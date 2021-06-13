/* 
function to load game at default setting of normal on page load: we start off loading a board of just 4 tiles, 2 pairs each
eventlistener that waits for DOMContentLoaded
then: 
get all the buttons (easy, medium, hard)

if button pressed is easy or hard run those games

*/

document.addEventListener('DOMContentLoaded', function () {
  $('#current-score').text('0'); // set score to 0 on page load
  $('#timer').text('0'); // set timer to 0 on page load

  createBoard('medium'); // on page load we run the game at medium difficulty by default
})


// function to load game based on chosen difficulty: easy (3 by 4), medium (4 by 5) or hard (5 by 6)
// NOTE: max board size that fits comfortably on a smartphone screen seems to be 6 by 8, with each pic at 50 by 50 px
// the max layout: 1/2 padding | tile | padding | tile | padding | tile | padding | tile | padding | tile | padding | tile | 1/2 padding --> 6 * padding, 6 * tile
function createBoard(boardDifficulty) {
  if (boardDifficulty === 'medium') {
    // as medium is the default right now, we set width and height to 2. Later this will be set to 3 and 4.
    let boardWidth = 2;
    let boardHeight = 2;
    // each image on a row needs to be col-6
    // we want to get all the div's with class tile-row, and then loop through this equal to boardHeight
    // for each loop we have another loop, of adding image equal to boardWidth
  }

}

// function to flip two cards

// function to check the flipped cards to see if they are the same
function checkFlippedCards() {

}

// function to increase score if flipped cards match
function increaseScore() {

}

// function to flip cards back if they are not the same
function unflipCards() {

}

// timer function
function increaseTimer() {

}