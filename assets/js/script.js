// Global variables
const playerSequence = [];
const localStorage = window.localStorage;
var gameSequence = [];
const scoreKeyArray = [
  "score1",
  "score2",
  "score3",
  "score4",
  "score5",
  "score6",
  "score7",
  "score8",
  "score9",
  "score10",
];

// Pageload function: runs other functions based on page title
document.addEventListener("DOMContentLoaded", function () {
  let pageTitle = $("title").text();
  if (pageTitle === "Puggy Patterns") {
    setupGamePage();
  } else if (pageTitle === "Your Highscores") {
    displayScores();
  } else if (pageTitle === "Game Settings") {
    $("#reset-highscores-button").click(function () {
      resetHighScores();
    });
    getDifficultySetting();

    const difficultyButtons = $(".difficulty-button");   
    for (const difficultyButton of difficultyButtons) {       
      difficultyButton.addEventListener("click", function () {
        for (const difficultyButton of difficultyButtons) {
          difficultyButton.classList.remove("btn-primary");
          difficultyButton.classList.add("btn-outline-primary");
        }
        this.classList.add("btn-primary");
        this.classList.remove("btn-outline-primary");
        localStorage.setItem("difficulty", this.dataset.difficulty);
      });
    }
  }
});

/**
 * Generates a random sequence of numbers.
 * Uses the value contained by the element with id longest-sequence to determine how long the sequence needs to be.
 * Also uses the value of the difficulty key value pair in localstorage to determine how long the sequence needs to be, but only the first time.
 * The generated sequence is then passed as an array to the animatePictures function.
 */
function generateSequence() {
  gameSequence = [];
  playerSequence.length = 0;
  let sequenceLength = 0;
  const maxLengthSequence = 31;

  let previousSequenceLength = parseInt($("#longest-sequence").text());

  if (previousSequenceLength === 0) {
    if (
      !localStorage.getItem("difficulty") ||
      localStorage.getItem("difficulty") === "easy"
    ) {
      sequenceLength = 1;
    } else if (localStorage.getItem("difficulty") === "medium") {
      sequenceLength = 5;
    } else if (localStorage.getItem("difficulty") === "hard") {
      sequenceLength = 9;
    }
  } else if (previousSequenceLength < maxLengthSequence) {
    sequenceLength = previousSequenceLength + 1;
  } else {
    sequenceLength = maxLengthSequence;
  }

  for (let index = 0; index < sequenceLength; index++) {
    gameSequence.push(Math.floor(Math.random() * 4));
  }

  animatePictures(gameSequence);
}

/**  
 * Function that uses the generated sequence to animate pictures: used this answer on Stackoverflow: https://stackoverflow.com/questions/35071794/js-jquery-animate-divs-in-order
 * I've changed the names of the variables and moved the code that increments the index, but otherwise the code has not been changed.
*/
/**
 * This function animates pictures in sequence, by adding and removing a CSS class.
 *
 * @param {*} gameSequence - an array of integers that the function uses to animate pictures, based on their index in an array.
 */
function animatePictures(gameSequence) {
  let index = 0;
  let targetImage = $("img")[gameSequence[index]];
  targetImage.classList.add("dim");

  removeClassAndPause();

  /**
   * This function removes a CSS class from an element after a timeout.
   * It then increments an index, and either breaks the loop or continues the loop by calling another function that adds a CSS class to an element after a timeout.
   */
  function removeClassAndPause() {
    window.setTimeout(function () {
      let previousImage = $("img")[gameSequence[index]];
      previousImage.classList.remove("dim");
      index++;

      if (index >= gameSequence.length) {
        return;
      }

      addClassAndPause();
    }, 500);
  }

  /**
   * This function adds a CSS class to an element and then calls another function.
   */
  function addClassAndPause() {
    window.setTimeout(function () {
      let nextImage = $("img")[gameSequence[index]];
      nextImage.classList.add("dim");

      removeClassAndPause();
    }, 500);
  }
}

/**
 * This function compares the sequence the player submitted vs the sequence the game generated.
 * Based on the result, it will either call functions that increase the scores, or call the function that resets the scores.
 */
function checkSequence() {
  if (playerSequence.length === gameSequence.length) {
    let correctAnswer = true;
    for (let index = 0; index < playerSequence.length; index++) {
      if (playerSequence[index] !== gameSequence[index]) {
        correctAnswer = false;
        break;
      }
    }

    if (correctAnswer) {
      $("#game-alert")
        .text("Correct!")
        .addClass("alert-success")
        .removeClass("alert-info");
      increaseScore();
      increaseSequenceScore();
    } else {
      $("#game-alert")
        .text("Game over! Sorry, you didn't remember the pattern!")
        .addClass("alert-danger")
        .removeClass("alert-info");
      resetScores();
    }
  } else {
    $("#game-alert")
      .text("Game over! Sorry, you didn't click the right amount of pictures!")
      .addClass("alert-danger")
      .removeClass("alert-info");
    resetScores();
  }

  $("#start-button").removeClass("d-none");
  $("#submit-button").addClass("d-none");
}

/**
 * This function gets the current score from the DOM and then increments it by 1.
 */
function increaseScore() {
  let oldScore = parseInt($("#current-score").text());
  $("#current-score").text(++oldScore);
}

/**
 * This function gets the current longest sequence from the DOM and increments it by 1.
 * It only does this if the player submitted sequence is longer than the current longest sequence.
 */
function increaseSequenceScore() {
  let oldSequenceScore = parseInt($("#longest-sequence").text());
  if (gameSequence.length > oldSequenceScore) {
    $("#longest-sequence").text(gameSequence.length);
  }
}

/**
 * This function resets the score counters in the DOM to 0.
 * It also gets the current score from the DOM and calls the saveScore function with that current score as a parameter.
 */
function resetScores() {
  let endScore = parseInt($("#current-score").text());
  $("#current-score").text(0);
  $("#longest-sequence").text(0);
  saveScore(endScore);
}

/**
 * This function checks if the player beat their highscore, and if so, saves that highscore.
 *
 * @param {*} endScore - An integer that the function uses to determine if the player beat their highscore.
 *
 * The function gets all the currently saved highscores from localStorage.
 * Then it checks every highscore vs endScore. If the endScore is higher than any of the highscores, it gets spliced into the array of highscores.
 * This array of highscores is then written back to localStorage.
 *  */
function saveScore(endScore) {
  let highScoreBeaten = false;
  let scoreKey = "";
  let scoreValueArray = [];
  let scoreValue = "";
  for (let index = 0; index < scoreKeyArray.length; index++) {
    scoreKey = scoreKeyArray[index];
    scoreValue = localStorage.getItem(scoreKey);
    if (!scoreValue) {
      scoreValue = 0;
    }
    scoreValueArray.push(scoreValue);

    if (!highScoreBeaten) {
      if (endScore > scoreValue) {
        $("#highscore-alert")
          .text("Congratulations! You beat your highscore!")
          .addClass("alert-success")
          .removeClass("alert-dark");
        highScoreBeaten = true;
        scoreToMoveDown = index;
      }
    }
  }

  if (!highScoreBeaten) {
    $("#highscore-alert")
      .text("Sorry! You didn't beat your highscore!")
      .addClass("alert-danger")
      .removeClass("alert-dark");
  } else {
    scoreValueArray.splice(scoreToMoveDown, 0, endScore);
    scoreValueArray = scoreValueArray.slice(0, -1);
  }

  for (let index = 0; index < scoreKeyArray.length; index++) {
    scoreKey = scoreKeyArray[index];
    scoreValue = scoreValueArray[index];
    localStorage.setItem(scoreKey, scoreValue);
  }
}

/**
 * This function gets everything ready for the game to run.
 * It adds eventlisteners that listen for clicks to the Start button, the Submit button and the images.
 */
function setupGamePage() {
  $("#submit-button").click(function () {
    checkSequence();
  });

  const startButton = document.getElementById("start-button");
  startButton.addEventListener("click", function () {
    generateSequence();
    $("#start-button").addClass("d-none");
    $("#submit-button").removeClass("d-none");
    $("#game-alert")
      .text("Remember the pattern!")
      .addClass("alert-info")
      .removeClass("alert-success");
  });

  const images = $("img");
  for (const image of images) {
    image.addEventListener("click", function () {
      this.animate(
        {
          opacity: 0.4,
        },
        500
      );
      playerSequence.push(images.index(this));
    });
  }
}

/**
 * This function gets the highscores from localStorage and writes them to the DOM.
 */
function displayScores() {
  for (const scoreKey of scoreKeyArray) {
    let scoreValue = localStorage.getItem(scoreKey);
    if (scoreValue !== "") {
      document.getElementById(scoreKey).innerHTML = scoreValue;
    }
  }
}

/**
 * This function resets all the highscores in localStorage to an empty string.
 */
function resetHighScores() {
  for (const scoreKey of scoreKeyArray) {
    localStorage.setItem(scoreKey, "");
  }
}

/**
 * This function gets the difficulty setting from localStorage and based on that adds and removes CSS classes to the difficulty buttons.
 */
function getDifficultySetting() {
  let difficulty = localStorage.getItem("difficulty");
  const difficultyButtons = $(".difficulty-button");
  for (const difficultyButton of difficultyButtons) {
    if (difficultyButton.dataset.difficulty === difficulty) {
      difficultyButton.classList.add("btn-primary");
      difficultyButton.classList.remove("btn-outline-primary");
    } else {
      difficultyButton.classList.add("btn-outline-primary");
      difficultyButton.classList.remove("btn-primary");
    }
  }
}
