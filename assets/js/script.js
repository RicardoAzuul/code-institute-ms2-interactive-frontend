// Global variables
var playerSequence = [];
var gameSequence = [];
var maxLengthSequence = 31;
var sequenceLength = 1;
var numberOfImages = 0;
const scoreKeyArray = ['score1', 'score2', 'score3', 'score4', 'score5', 'score6', 'score7', 'score8', 'score9', 'score10'];
// End of Global variables

// Pageload function: runs other functions based on page title
document.addEventListener('DOMContentLoaded', function () {

  let pageTitle = $('title').text();
  if (pageTitle === 'Puggy Patterns') {
    setupGamePage()
  }

  else if (pageTitle === 'Your Highscores') {
    displayScores()
  }

  else if (pageTitle === 'Game Settings') {
    $('#reset-highscores-button').click(function () {
      resetHighScores()
    });
    getDifficultySetting()

    let difficultyButtons = $('.difficulty-button');
    for (let difficultyButton of difficultyButtons) {
      difficultyButton.addEventListener('click', function () {
        for (let difficultyButton of difficultyButtons) {
          difficultyButton.classList.remove('btn-primary');
          difficultyButton.classList.add('btn-outline-primary');
        }
        this.classList.add('btn-primary');
        this.classList.remove('btn-outline-primary');
        localStorage.setItem('difficulty', this.dataset.difficulty);
      })
    }
  }
})
// End of pageload function

// Function that generates a sequence of random numbers for the pattern
function generateSequence() {
  gameSequence = [];
  playerSequence = [];

  let previousSequenceLength = parseInt($('#longest-sequence').text()); // get the length of the last sequence: the sequence generated this round needs to be one longer
 
  if (previousSequenceLength === 0) {
    if (!localStorage.getItem('difficulty') || localStorage.getItem('difficulty') === 'easy') {
      sequenceLength = 1;
      console.log('Easy difficulty');
    }
    else if (localStorage.getItem('difficulty') === 'medium') {
      sequenceLength = 5;
      console.log('Medium difficulty');
    }
    else if (localStorage.getItem('difficulty') === 'hard') {
      sequenceLength = 9;
      console.log('Hard difficulty');
    }
  }
  else if (previousSequenceLength < maxLengthSequence) {
    sequenceLength = previousSequenceLength + 1;
  } 
  else {
    sequenceLength = maxLengthSequence;
  }

  let images = $('img');
  numberOfImages = images.length;

  for (let index = 0; index < sequenceLength; index++) {
    gameSequence.push(Math.floor(Math.random() * numberOfImages));
  }

  animatePictures(gameSequence);
}
// End of function that generates a sequence of random numbers

// function that uses the generated sequence to bop pictures: used this answer on Stackoverflow: https://stackoverflow.com/questions/35071794/js-jquery-animate-divs-in-order
// Function that animates pictures using the generated sequence
function animatePictures(gameSequence) {
  let index = 0;
  let targetImage = $('img')[gameSequence[index]];
  targetImage.classList.add('dim');

  removeClassAndPause();

  function removeClassAndPause() {
    window.setTimeout(function () {
      let previousImage = $('img')[gameSequence[index]];
      previousImage.classList.remove('dim');
      index++;

      if (index >= gameSequence.length) {
        return; // we've reached the end of the sequence. Stop the loop.
      }

      addClassAndPause()
    }, 500);
  }

  function addClassAndPause() {
    window.setTimeout(function () {
      let nextImage = $('img')[gameSequence[index]];
      nextImage.classList.add('dim');

      removeClassAndPause();
    }, 500);
  }

}
// End of function that animates pictures

// Function that checks the generated sequence and the player sequence
function checkSequence() {
  // TODO: It would be cool to have the game check for the length of the sequence the player put in, but a submit button is easier.
  // the first check is if playerSequence and sequence have the same length: if this is not true, the player failed.
  if (playerSequence.length === gameSequence.length) {
    // then we need to check all the pictures the player clicked. We loop through them, assuming they got it right. But if they get it wrong, we break the loop.
    let correctAnswer = true;
    for (let index = 0; index < playerSequence.length; index++) {
      if (playerSequence[index] !== gameSequence[index]) {
        correctAnswer = false;
        break;
      }
      else {
        continue; // if both values in the same position of both arrays match, we simply continue to the next two values.
      }
    }

    if (correctAnswer === true) {
      alert('Correct!');
      increaseScore();
      increaseSequenceScore();
    }
    else {
      alert('Sorry, you got it wrong!');
      resetScores();
    }
  }
  else {
    alert('Sorry, you didn\'t click the right amount of pictures!');
    resetScores();
  }

  $('#start-button').removeClass('d-none');
  $('#submit-button').addClass('d-none');
}
// End of function that checks the generated sequence and the player sequence

// Function to increase score if the player gets the correct sequence
function increaseScore() {
  let oldScore = parseInt($('#current-score').text());
  $('#current-score').text(++oldScore);
}
// End of function to increase score if the player gets the correct sequence

// Function to increase longest sequence score if the player gets the correct sequence
function increaseSequenceScore() {
  let oldSequenceScore = parseInt($('#longest-sequence').text());
  if (gameSequence.length > oldSequenceScore) {
    $('#longest-sequence').text(gameSequence.length);
  }
  else {
    return; // if the sequence wasn't longer than the previous one, we don't have to increase the score, and we can exit the function.
  }
}
// End of function to increase longest sequence score

// Function that resets scores once the player fails
function resetScores() {
  let endScore = parseInt($('#current-score').text());
  $('#current-score').text(0);
  $('#longest-sequence').text(0);
  saveScore(endScore);
}
// End of Function that resets scores 

// Function that checks the endscore with the scores in highscores
function saveScore(endScore) {
  let highScoreBeaten = false;
  let scoreKey = '';
  let scoreValueArray = [];
  let scoreValue = '';
  // first create the array of highscores
  for (let index = 0; index < scoreKeyArray.length; index++) {
    scoreKey = scoreKeyArray[index];
    scoreValue = localStorage.getItem(scoreKey);
    // if the scoreValue is blank, we set it to 0 
    if (scoreValue === null) {
      scoreValue = 0;
    }
    scoreValueArray.push(scoreValue);
  }

  for (let index = 0; index < scoreValueArray.length; index++) {
    if (endScore > scoreValueArray[index]) {
      alert('You beat your highscore! ' + endScore + ' is larger than ' + scoreValue);
      highScoreBeaten = true;
      scoreToMoveDown = index;
      break
    }
    else {
      continue
    }
  }

  if (highScoreBeaten === false) {
    alert('You didn\'t beat your highscore!');
  }
  else if (highScoreBeaten === true) {
    scoreValueArray.splice(scoreToMoveDown, 0, endScore);
    scoreValueArray = scoreValueArray.slice(0, -1);
  }

  for (let index = 0; index < scoreKeyArray.length; index++) {
    scoreKey = scoreKeyArray[index];
    scoreValue = scoreValueArray[index];
    localStorage.setItem(scoreKey, scoreValue);
  }
}
// End of function that checks the endscore with the scores in highscores

// Function that starts an easy game on pageload
function setupGamePage() {

  $('#submit-button').click(function () {
    checkSequence()
  });

  let startButton = document.getElementById('start-button');
  startButton.addEventListener('click', function () {
    generateSequence();
    $('#start-button').addClass('d-none');
    $('#submit-button').removeClass('d-none');
  })

  let images = $('img');
  for (let image of images) {
    image.addEventListener('click', function () {
      this.animate({
        opacity: 0.4
      }, 500);
      playerSequence.push(images.index(this));
    })
  }
}
// End of function that starts an easy game on pageload

// -- Function for the page highscores.html --

// Function that loads scores from localstorage
function displayScores() {
  for (let scoreKey of scoreKeyArray) {
    let scoreValue = localStorage.getItem(scoreKey);
    if (scoreValue !== '') {
      document.getElementById(scoreKey).innerHTML = scoreValue;
    }
  }
}
// End of function that loads scores

// -- Functions for the page gamesettings.html --

// Function that resets highscores when the player clicks the reset button
function resetHighScores() {
  for (let scoreKey of scoreKeyArray) {
    localStorage.setItem(scoreKey, '');
  }
}
// End of function that resets highscores when the player clicks the reset button

// Function that checks difficulty in localStorage and displays  this
function getDifficultySetting() {
  let difficulty = localStorage.getItem('difficulty');
  let difficultyButtons = $('.difficulty-button');
  for (let difficultyButton of difficultyButtons) {
    if (difficultyButton.dataset.difficulty === difficulty) {
      difficultyButton.classList.add('btn-primary');
      difficultyButton.classList.remove('btn-outline-primary');
    }
    else {
      difficultyButton.classList.add('btn-outline-primary');
      difficultyButton.classList.remove('btn-primary');
    }
  }
}
// End of function that checks difficulty