// run easy game on page load
document.addEventListener('DOMContentLoaded', function () {
  $('#current-score').text('0'); // set score to 0 on page load
  $('#timer').text('0'); // set timer to 0 on page load

  // TODO: turn this into code that gets all the buttons
  let startButton = document.getElementById('start-button');
  startButton.addEventListener('click', function () {
    generateSequence();
  })


  createBoard('easy'); // on page load we run the game at medium difficulty by default
})


// function to load game based on chosen difficulty: easy (4 pictures), medium (6 pictures) or hard (8 pictures)
// NOTE: max board size that fits comfortably on a smartphone screen seems to be 6 by 8, with each pic at 50 by 50 px
// the max layout: 1/2 padding | tile | padding | tile | padding | tile | padding | tile | padding | tile | padding | tile | 1/2 padding --> 6 * padding, 6 * tile
function createBoard(boardDifficulty) {
  if (boardDifficulty === 'easy') {
    console.log(boardDifficulty);
  }

}

// function to generate a sequence of random numbers, with numbers equating to pictures. This function needs to run when the start button is clicked.
function generateSequence() {
  let sequence = [];
  sequence += Math.floor(Math.random() * 4); // generate random number between 0 and 3 --> we have 4 pictures.
  bopPictures(sequence);
}

// function that uses the generated sequence to bop pictures
function bopPictures(sequence) {
  $('img')[sequence].animate({
    width: "90%",
    opacity: 0.4
  }, 1000 );
  checkSequence(sequence); // we pass the generated sequence to checkSequence after we have bopped the pictures
}

function checkSequence(sequence) {
  let playerSequence = []; // initialize empty playerSequence array
  let images = $('img'); // get all images: this is an object


  for (let image of images) {
    image.addEventListener('click', function() { // add eventlistener to all images
      playerSequence += images.index(image);
      console.log(playerSequence);
      console.log(sequence);
    })
  }
}


// function to increase score if the player gets the correct sequence
function increaseScore() {

}

// timer function
function increaseTimer() {

}