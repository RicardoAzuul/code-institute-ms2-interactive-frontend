/* 
function to load game at default setting of easy on page load: we start off loading a board of just 4 tiles
eventlistener that waits for DOMContentLoaded
then: 
get all the buttons (easy, medium, hard)

if button pressed is medium or hard run those games

*/

document.addEventListener('DOMContentLoaded', function () {
  $('#current-score').text('0'); // set score to 0 on page load
  $('#timer').text('0'); // set timer to 0 on page load

  createBoard('easy'); // on page load we run the game at medium difficulty by default
})


// function to load game based on chosen difficulty: easy (4 pictures), medium (6 pictures) or hard (8 pictures)
// NOTE: max board size that fits comfortably on a smartphone screen seems to be 6 by 8, with each pic at 50 by 50 px
// the max layout: 1/2 padding | tile | padding | tile | padding | tile | padding | tile | padding | tile | padding | tile | 1/2 padding --> 6 * padding, 6 * tile
function createBoard(boardDifficulty) {
  if (boardDifficulty === 'easy') {

  }

}

// function to generate a sequence of random numbers, with numbers equating to pictures.
function generateSequence() {

}

// function that uses the generated sequence to bop pictures
function bopPicture() {

}

// function to increase score if the player gets the correct sequence
function increaseScore() {

}

// timer function
function increaseTimer() {

}