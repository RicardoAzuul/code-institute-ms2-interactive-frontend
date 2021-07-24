// Global variables
var playerSequence = [];
var gameSequence = [];
var maxLengthSequence = 31;
var sequenceLength = 1;
var numberOfImages = 0;
const scoreKeyArray = ['score1', 'score2', 'score3', 'score4', 'score5', 'score6', 'score7', 'score8', 'score9', 'score10'];

// Pageload function: runs other functions based on page title
document.addEventListener('DOMContentLoaded', function () {

  let pageTitle = $('title').text();
  if (pageTitle === 'Puggy Patterns') {
    setupGamePage();
  }

  else if (pageTitle === 'Your Highscores') {
    displayScores();
  }

  else if (pageTitle === 'Game Settings') {
    $('#reset-highscores-button').click(function () {
      resetHighScores();
    });
    getDifficultySetting();

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
      });
    }
  }
});

// Function that generates a sequence of random numbers for the pattern
function generateSequence() {
  gameSequence = [];
  playerSequence = [];

  let previousSequenceLength = parseInt($('#longest-sequence').text()); 
 
  if (previousSequenceLength === 0) {
    if (!localStorage.getItem('difficulty') || localStorage.getItem('difficulty') === 'easy') {
      sequenceLength = 1;
    }
    else if (localStorage.getItem('difficulty') === 'medium') {
      sequenceLength = 5;
    }
    else if (localStorage.getItem('difficulty') === 'hard') {
      sequenceLength = 9;
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


// function that uses the generated sequence to animate pictures: used this answer on Stackoverflow: https://stackoverflow.com/questions/35071794/js-jquery-animate-divs-in-order
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
        return; 
      }

      addClassAndPause();
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

// Function that checks the generated sequence and the player sequence
function checkSequence() {
  if (playerSequence.length === gameSequence.length) {
 
    let correctAnswer = true;
    for (let index = 0; index < playerSequence.length; index++) {
      if (playerSequence[index] !== gameSequence[index]) {
        correctAnswer = false;
        break;
      }
    }

    if (correctAnswer === true) {
      $('#game-alert').text('Correct!').addClass('alert-success').removeClass('alert-info');
      increaseScore();
      increaseSequenceScore();
    }
    else {
      $('#game-alert').text('Game over! Sorry, you didn\'t remember the pattern!').addClass('alert-danger').removeClass('alert-info');
      resetScores();
    }
  }
  else {
    $('#game-alert').text('Game over! Sorry, you didn\'t click the right amount of pictures!').addClass('alert-danger').removeClass('alert-info');
    resetScores();
  }

  $('#start-button').removeClass('d-none');
  $('#submit-button').addClass('d-none');
}

// Function to increase score if the player gets the correct sequence
function increaseScore() {
  let oldScore = parseInt($('#current-score').text());
  $('#current-score').text(++oldScore);
}

// Function to increase longest sequence score if the player gets the correct sequence
function increaseSequenceScore() {
  let oldSequenceScore = parseInt($('#longest-sequence').text());
  if (gameSequence.length > oldSequenceScore) {
    $('#longest-sequence').text(gameSequence.length);
  }
}

// Function that resets scores once the player fails
function resetScores() {
  let endScore = parseInt($('#current-score').text());
  $('#current-score').text(0);
  $('#longest-sequence').text(0);
  saveScore(endScore);
}

// Function that checks the endscore with the scores in highscores
function saveScore(endScore) {
  let highScoreBeaten = false;
  let scoreKey = '';
  let scoreValueArray = [];
  let scoreValue = '';
  for (let index = 0; index < scoreKeyArray.length; index++) {
    scoreKey = scoreKeyArray[index];
    scoreValue = localStorage.getItem(scoreKey);
    if (scoreValue === null) {
      scoreValue = 0;
    }
    scoreValueArray.push(scoreValue);
  }

  for (let index = 0; index < scoreValueArray.length; index++) {
    if (endScore > scoreValueArray[index]) {
      $('#highscore-alert').text('Congratulations! You beat your highscore!').addClass('alert-success').removeClass('alert-dark');
      highScoreBeaten = true;
      scoreToMoveDown = index;
      break;
    }
  }

  if (!highScoreBeaten) {
    $('#highscore-alert').text('Sorry! You didn\'t beat your highscore!').addClass('alert-danger').removeClass('alert-dark');
  }
  else {
    scoreValueArray.splice(scoreToMoveDown, 0, endScore);
    scoreValueArray = scoreValueArray.slice(0, -1);
  }

  for (let index = 0; index < scoreKeyArray.length; index++) {
    scoreKey = scoreKeyArray[index];
    scoreValue = scoreValueArray[index];
    localStorage.setItem(scoreKey, scoreValue);
  }
}

// Function that starts an easy game on pageload
function setupGamePage() {

  $('#submit-button').click(function () {
    checkSequence();
  });

  let startButton = document.getElementById('start-button');
  startButton.addEventListener('click', function () {
    generateSequence();
    $('#start-button').addClass('d-none');
    $('#submit-button').removeClass('d-none');
    $('#game-alert').text('Remember the pattern!').addClass('alert-info').removeClass('alert-success');
  });

  let images = $('img');
  for (let image of images) {
    image.addEventListener('click', function () {
      this.animate({
        opacity: 0.4
      }, 500);
      playerSequence.push(images.index(this));
    });
  }
}

// Function that loads scores from localstorage
function displayScores() {
  for (let scoreKey of scoreKeyArray) {
    let scoreValue = localStorage.getItem(scoreKey);
    if (scoreValue !== '') {
      document.getElementById(scoreKey).innerHTML = scoreValue;
    }
  }
}

// Function that resets highscores when the player clicks the reset button
function resetHighScores() {
  for (let scoreKey of scoreKeyArray) {
    localStorage.setItem(scoreKey, '');
  }
}

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