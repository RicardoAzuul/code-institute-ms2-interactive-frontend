// global variables
var playerSequence = []; 
var sequence = []; // TODO: rename to gameSequence?

// on page load: run game on easy, add eventListeners to all images and buttons
document.addEventListener('DOMContentLoaded', function () {

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

  let images = $('img'); 
  for (let image of images) {
    image.addEventListener('click', function () { 
      this.animate({
        opacity: 0.4
      }, 500);
      playerSequence.push(images.index(this));
    })
  }

  $('#submit-button').click(function () {
    checkSequence()
  });

  let startButton = document.getElementById('start-button');
  startButton.addEventListener('click', function () {
    // we check which button has the btn-lg class: that is our difficulty
    // TODO: convert the button text to lowercase, because that can be used for difficulty
    let largeButton = $('button.btn-lg').text();
    if (largeButton === 'Easy') {
      difficulty = 'easy';
    }
    else if (largeButton === 'Medium') {
      difficulty = 'medium';
    }
    else if (largeButton === 'Hard') {
      difficulty = 'hard';
    }
    else {
      alert('ERROR: Unknown difficulty setting');
    }
    generateSequence(difficulty);
  })

})

// function to load game based on chosen difficulty: easy (4 pictures), medium (6 pictures) or hard (8 pictures)
// NOTE: max board size that fits comfortably on a smartphone screen seems to be 6 by 8, with each pic at 50 by 50 px
// the max layout: 1/2 padding | tile | padding | tile | padding | tile | padding | tile | padding | tile | padding | tile | 1/2 padding --> 6 * padding, 6 * tile
function createBoard(difficulty) {
  if (difficulty === 'easy') {
    $('#easy-button').addClass('btn-lg'); // the selected difficulty becomes the default difficulty for next loops
  }
  else if (difficulty === 'medium') {
    $('#medium-button').addClass('btn-lg');
  }
  else if (difficulty === 'hard') {
    $('#hard-button').addClass('btn-lg');
  }
}

// function to generate a sequence of random numbers, with numbers equating to pictures. This function needs to run when the start button is clicked.
function generateSequence(difficulty) {
  sequence = []; //empty the array
  playerSequence = []; // empty the player sequence array: after this point whatever the player clicks is stored. This is the start of the game.
  let sequenceLength = 1;
  let multiplier = 0; // initialize the multiplier we use to generate random numbers
  let maxLengthSequence = 0;
  let previousSequenceLength = parseInt($('#longest-sequence').text()); // get the length of the last sequence: the sequence generated this round needs to be one longer

  if (difficulty === 'easy') {
    multiplier = 4;
    maxLengthSequence = multiplier * 2; // every round the sequence becomes longer. For now we set it at double the multiplier: so 8 for easy, 12 for medium, 16 for hard
  }
  else if (difficulty === 'medium') {
    console.log('Difficulty: ' + difficulty);
    multiplier = 4;
    maxLengthSequence = multiplier * 2;
  }
  else if (difficulty === 'hard') {
    console.log('Difficulty: ' + difficulty);
    multiplier = 4;
    maxLengthSequence = multiplier * 2; 
  }
  else {
    alert('ERROR: Unknown difficulty setting');
  }

  if (previousSequenceLength < maxLengthSequence) {
    sequenceLength = previousSequenceLength + 1;
  }
  else {
    sequenceLength = maxLengthSequence;
  }

  for (let index = 0; index < sequenceLength; index++) {
    sequence.push(Math.floor(Math.random() * multiplier));    
  }
  console.log('Sequence: ' + sequence);

  bopPictures(sequence);
}

// function that uses the generated sequence to bop pictures: used this answer on Stackoverflow: https://stackoverflow.com/questions/35071794/js-jquery-animate-divs-in-order
function bopPictures(sequence) {
  let index = 0;
  let targetImage = $('img')[sequence[index]];
  targetImage.classList.add('dim');

  removeClassAndPause();

  function removeClassAndPause() {
    window.setTimeout(function () {
      let previousImage = $('img')[sequence[index]];
      previousImage.classList.remove('dim');
      index++;

      if (index >= sequence.length) {
        console.log(index);
        console.log(sequence.length);
        return; // we've reached the end of the sequence. Discontinue
      }

      addClassAndPause()
    }, 500);
  }

  function addClassAndPause() {
    window.setTimeout(function () {
      let nextImage = $('img')[sequence[index]];
      nextImage.classList.add('dim');

      removeClassAndPause();
    }, 500);
  }
}

function checkSequence() {
  // TODO: It would be cool to have the game check for the length of the sequence the player put in, but a submit button is easier.
  // the first check is if playerSequence and sequence have the same length: if this is not true, the player failed.
  if (playerSequence.length === sequence.length) {
    // then we need to check all the pictures the player clicked. We loop through them, assuming they got it right. But if they get it wrong, we break the loop.
    let correctAnswer = true;
    for (let index = 0; index < playerSequence.length; index++) {
      if (playerSequence[index] !== sequence[index]) {
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
}

// function to increase score if the player gets the correct sequence
function increaseScore() {
  let oldScore = parseInt($('#current-score').text());
  $('#current-score').text(++oldScore);
}

// function to increase longest sequence score if the player gets the correct sequence
function increaseSequenceScore() {
  let oldSequenceScore = parseInt($('#longest-sequence').text());
  if (sequence.length > oldSequenceScore) {
    $('#longest-sequence').text(sequence.length);
  }
  else {
    return; // if the sequence wasn't longer than the previous one, we don't have to increase the score, and we can exit the function.
  }
}

function resetScores() {
  $('#current-score').text(0);
  $('#longest-sequence').text(0);
}