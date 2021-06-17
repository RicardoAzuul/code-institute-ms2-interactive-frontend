// run easy game on page load
document.addEventListener('DOMContentLoaded', function () {

  let difficulty = 'easy'; 

  createBoard(difficulty); // on page load we run the game at easy difficulty by default

  // TODO: turn this into code that gets all the buttons
  let startButton = document.getElementById('start-button');
  startButton.addEventListener('click', function () {
    generateSequence(difficulty);
  })
  
})


// function to load game based on chosen difficulty: easy (4 pictures), medium (6 pictures) or hard (8 pictures)
// NOTE: max board size that fits comfortably on a smartphone screen seems to be 6 by 8, with each pic at 50 by 50 px
// the max layout: 1/2 padding | tile | padding | tile | padding | tile | padding | tile | padding | tile | padding | tile | 1/2 padding --> 6 * padding, 6 * tile
function createBoard(difficulty) {
  if (difficulty === 'easy') {
  }

}

// function to generate a sequence of random numbers, with numbers equating to pictures. This function needs to run when the start button is clicked.
function generateSequence(difficulty) {  
  let sequence = [];
  sequence += Math.floor(Math.random() * 4); // generate random number between 0 and 3 --> we have 4 pictures.

  let gamedata = [difficulty, sequence]; // we're adding the generated sequence to gamedata, which also includes the difficulty setting
  bopPictures(gamedata);
}

// function that uses the generated sequence to bop pictures
function bopPictures(gamedata) {
  let sequence = gamedata[1];
  $('img')[sequence].animate({
    width: "90%",
    opacity: 0.4
  }, 1000 );
  checkSequence(gamedata); // we pass the generated sequence to checkSequence after we have bopped the pictures
}

function checkSequence(gamedata) {
  let playerSequence = []; // initialize empty playerSequence array
  let images = $('img'); // get all images: this is an object
  let sequence = gamedata[1];

  for (let image of images) {
    image.addEventListener('click', function() { // add eventlistener to all images
      playerSequence += images.index(image);

      if (playerSequence === sequence) { // this will only work for sequences of length 1
        alert('Correct!');
        increaseScore();
        increaseSequenceScore(gamedata);
      }
      else {
        alert('Sorry, you got it wrong!');
      }
    })
  }
}


// function to increase score if the player gets the correct sequence
function increaseScore() {
  let oldScore = parseInt($('#current-score').text());
  $('#current-score').text(++oldScore);  
}

// function to increase longest sequence score if the player gets the correct sequence
function increaseSequenceScore(gamedata) {
  let sequence = gamedata[1];
  let oldSequenceScore = parseInt($('#longest-sequence').text());
  if (sequence.length > oldSequenceScore) {
    $('#longest-sequence').text(sequence.length);
  }
  else {
    return;
  }
}