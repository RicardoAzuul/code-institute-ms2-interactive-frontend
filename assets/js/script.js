// global variables
var playerSequence = [];
var gameSequence = [];
const scoreArray = ['score1', 'score2', 'score3', 'score4', 'score5', 'score6', 'score7', 'score8', 'score9', 'score10']; // TODO Better Name: scoreKeyArray?

// on page load: run game on easy, add eventListeners to all images and buttons
document.addEventListener('DOMContentLoaded', function () {

  let pageTitle = $('title').text();
  if (pageTitle === 'Puggy Patterns') {
    setupGamePage()
  }

  else if (pageTitle === 'Your Highscores') {
    displayScores()
  }

  else if (pageTitle === 'Game Settings') {
    // TODO Load game settings
  }


})

// function to load game based on chosen difficulty: easy (4 pictures), medium (6 pictures) or hard (8 pictures)
// NOTE: max board size that fits comfortably on a smartphone screen seems to be 6 by 8, with each pic at 50 by 50 px
// the max layout: 1/2 padding | tile | padding | tile | padding | tile | padding | tile | padding | tile | padding | tile | 1/2 padding --> 6 * padding, 6 * tile
function createBoard(difficulty) {
  if (difficulty === 'easy') {
    $('#easy-button').addClass('btn-lg'); // the selected difficulty becomes the default difficulty for next loops
    $('#game-board').html('');
    let gameBoardHTML =
      `
      <div class="row">
        <div class="col-6 col-md-3 col-lg-2 offset-md-3 offset-lg-4">
          <img src="/assets/images/pug_face_looking_up.jpg" class="img-fluid rounded" alt="Pug face looking up">
        </div>
        <div class="col-6 col-md-3 col-lg-2">
          <img src="/assets/images/black_pug_in_black_vest.jpg" class="img-fluid rounded" alt="Black pug in black vest">
        </div>
      </div>
      <div class="row">
        <div class="col-6 col-md-3 offset-md-3 col-lg-2 offset-md-3 offset-lg-4">
          <img src="/assets/images/pug_with_butterfly_on_nose.jpg" class="img-fluid rounded" alt="Pug with butterfly on nose">
        </div>
        <div class="col-6 col-md-3 col-lg-2">
          <img src="/assets/images/pug_lying_in_grass.jpg" class="img-fluid rounded" alt="Pug lying in grass">
        </div>
      </div>
      `;
    $('#game-board').html(gameBoardHTML);

    // add eventListeners to all imgs, so the player can click them 
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
  else if (difficulty === 'medium') {
    $('#medium-button').addClass('btn-lg');
    $('#game-board').html('');
    let gameBoardHTML =
      `
    <div class="row">
      <div class="col-6 col-md-3 col-lg-2 offset-md-3 offset-lg-4">
        <img src="/assets/images/pug_face_looking_up.jpg" class="img-fluid" alt="">
      </div>
      <div class="col-6 col-md-3 col-lg-2">
        <img src="/assets/images/pug_face_looking_up.jpg" class="img-fluid" alt="">
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-md-3 offset-md-3 col-lg-2 offset-md-3 offset-lg-4">
        <img src="/assets/images/pug_face_looking_up.jpg" class="img-fluid" alt="">
      </div>
      <div class="col-6 col-md-3 col-lg-2">
        <img src="/assets/images/pug_face_looking_up.jpg" class="img-fluid" alt="">
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-md-3 offset-md-3 col-lg-2 offset-md-3 offset-lg-4">
        <img src="/assets/images/pug_face_looking_up.jpg" class="img-fluid" alt="">
      </div>
      <div class="col-6 col-md-3 col-lg-2">
        <img src="/assets/images/pug_face_looking_up.jpg" class="img-fluid" alt="">
      </div>
    </div>
    `;
    $('#game-board').html(gameBoardHTML);

    // add eventListeners to all imgs, so the player can click them 
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
  else if (difficulty === 'hard') {
    $('#hard-button').addClass('btn-lg');
    $('#game-board').html('');
    let gameBoardHTML =
      `
    <div class="row">
      <div class="col-6 col-md-3 col-lg-2 offset-md-3 offset-lg-4">
        <img src="/assets/images/pug_face_looking_up.jpg" class="img-fluid" alt="">
      </div>
      <div class="col-6 col-md-3 col-lg-2">
        <img src="/assets/images/pug_face_looking_up.jpg" class="img-fluid" alt="">
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-md-3 offset-md-3 col-lg-2 offset-md-3 offset-lg-4">
        <img src="/assets/images/pug_face_looking_up.jpg" class="img-fluid" alt="">
      </div>
      <div class="col-6 col-md-3 col-lg-2">
        <img src="/assets/images/pug_face_looking_up.jpg" class="img-fluid" alt="">
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-md-3 offset-md-3 col-lg-2 offset-md-3 offset-lg-4">
        <img src="/assets/images/pug_face_looking_up.jpg" class="img-fluid" alt="">
      </div>
      <div class="col-6 col-md-3 col-lg-2">
        <img src="/assets/images/pug_face_looking_up.jpg" class="img-fluid" alt="">
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-md-3 offset-md-3 col-lg-2 offset-md-3 offset-lg-4">
        <img src="/assets/images/pug_face_looking_up.jpg" class="img-fluid" alt="">
      </div>
      <div class="col-6 col-md-3 col-lg-2">
        <img src="/assets/images/pug_face_looking_up.jpg" class="img-fluid" alt="">
      </div>
    </div>
    `;
    $('#game-board').html(gameBoardHTML);

    // add eventListeners to all imgs, so the player can click them 
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
}

// function to generate a sequence of random numbers, with numbers equating to pictures. This function needs to run when the start button is clicked.
function generateSequence(difficulty) {
  gameSequence = [];
  playerSequence = [];
  let sequenceLength = 1;
  let numberOfImages = 0;
  let maxLengthSequence = 0; // TODO: If I'm sticking to just one difficulty, then we can remove this and instead set maxLengthSequence at the top of the script.
  let previousSequenceLength = parseInt($('#longest-sequence').text()); // get the length of the last sequence: the sequence generated this round needs to be one longer

  if (difficulty === 'easy') {
    numberOfImages = 4;
  }
  else if (difficulty === 'medium') {
    console.log('Difficulty: ' + difficulty);
    numberOfImages = 6;
  }
  else if (difficulty === 'hard') {
    console.log('Difficulty: ' + difficulty);
    numberOfImages = 8;
  }
  else {
    alert('ERROR: Unknown difficulty setting');
  }

  maxLengthSequence = 31;

  if (previousSequenceLength < maxLengthSequence) {
    sequenceLength = previousSequenceLength + 1;
  }
  else {
    sequenceLength = maxLengthSequence;
  }

  for (let index = 0; index < sequenceLength; index++) {
    gameSequence.push(Math.floor(Math.random() * numberOfImages));
  }

  animatePictures(gameSequence);
}

// function that uses the generated sequence to bop pictures: used this answer on Stackoverflow: https://stackoverflow.com/questions/35071794/js-jquery-animate-divs-in-order
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
        return; // we've reached the end of the sequence. Discontinue
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

// function to increase score if the player gets the correct sequence
function increaseScore() {
  let oldScore = parseInt($('#current-score').text());
  $('#current-score').text(++oldScore);
}

// function to increase longest sequence score if the player gets the correct sequence
function increaseSequenceScore() {
  let oldSequenceScore = parseInt($('#longest-sequence').text());
  if (gameSequence.length > oldSequenceScore) {
    $('#longest-sequence').text(gameSequence.length);
  }
  else {
    return; // if the sequence wasn't longer than the previous one, we don't have to increase the score, and we can exit the function.
  }
}

function resetScores() {
  let endScore = parseInt($('#current-score').text());
  $('#current-score').text(0);
  $('#longest-sequence').text(0);
  saveScore(endScore);
}

// this function just saves scores in localstorage
// TODO have this function run through all score localStorage
// TODO the scores can be turned into an array. That allows me to pop() and unshift()
function saveScore(endScore) {
  let highScoreBeaten = false;
  let scoreKey = '';
  let scoreValueArray = [];
  let scoreValue = '';
  // first create the array of highscores
  for (let index = 0; index < scoreArray.length; index++) {
    scoreKey = scoreArray[index];
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

  for (let index = 0; index < scoreArray.length; index++) {
    scoreKey = scoreArray[index];
    scoreValue = scoreValueArray[index];
    localStorage.setItem(scoreKey, scoreValue);
  }
}

function displayScores() {
  for (let scoreKey of scoreArray) {
    let scoreValue = localStorage.getItem(scoreKey);
    if (scoreValue !== '') {
      document.getElementById(scoreKey).innerHTML = scoreValue;
    }
  }
}

function setupGamePage() {
  let difficulty = 'easy';
  createBoard(difficulty);

  let difficultyButtons = document.getElementById('difficulty-buttons-col').children;
  for (let button of difficultyButtons) {
    button.addEventListener('click', function () {
      for (let button of difficultyButtons) {
        button.classList.remove('btn-lg');
      }
      this.classList.add('btn-lg');
      difficulty = this.innerHTML.toLowerCase();
      createBoard(difficulty);
    })
  }

  $('#submit-button').click(function () {
    checkSequence()
  });

  let startButton = document.getElementById('start-button');
  startButton.addEventListener('click', function () {
    // we check which button has the btn-lg class: that is our difficulty
    let largeButtonDifficulty = $('button.btn-lg').text();
    difficulty = largeButtonDifficulty.toLowerCase();
    generateSequence(difficulty);

    $('#start-button').addClass('d-none');
    $('#submit-button').removeClass('d-none');
  })
}