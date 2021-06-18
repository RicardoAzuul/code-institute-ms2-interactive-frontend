// run easy game on page load
document.addEventListener('DOMContentLoaded', function () {

  let difficulty = 'easy';

  createBoard(difficulty); // on page load we run the game at easy difficulty by default

  // TODO: turn this into code that gets all the buttons
  let startButton = document.getElementById('start-button');
  startButton.addEventListener('click', function () {
    // we check which button has the btn-lg class: that is our difficulty
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
    $('#easy-button').addClass('btn-lg'); // add active class to button so we can use this for the game loop
  }
}

// function to generate a sequence of random numbers, with numbers equating to pictures. This function needs to run when the start button is clicked.
function generateSequence(difficulty) {
  let sequence = []; // initialize sequence array
  console.log('Sequence before code: ' + sequence);
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
  }
  else if (difficulty === 'hard') {
    console.log('Difficulty: ' + difficulty);
  }
  else {
    alert('ERROR: Unknown difficulty setting');
  }

  if (previousSequenceLength < maxLengthSequence) {
    sequenceLength = previousSequenceLength + 1;
  }

  for (let index = 0; index < sequenceLength; index++) {
    sequence.push(Math.floor(Math.random() * multiplier)); // generate random number between 0 and 3 --> we have 4 pictures.    
  }
  console.log('Previous sequence length: ' + previousSequenceLength);
  console.log('Sequence length: ' + sequenceLength);
  console.log('Sequence: ' + sequence);

  bopPictures(sequence);
}

// function that uses the generated sequence to bop pictures
function bopPictures(sequence) {
  $('img')[sequence].animate({
    width: "90%",
    opacity: 0.4
  }, 1000);
  checkSequence(sequence); // we pass the generated sequence to checkSequence after we have bopped the pictures
}

function checkSequence(sequence) {
  let playerSequence = []; // initialize empty playerSequence array
  let images = $('img'); // get all images: this is an object

  for (let image of images) {
    image.addEventListener('click', function () { // add eventlistener to all images
      playerSequence.push(images.index(image));
      console.log('Player sequence: ' + playerSequence);
      console.log('Sequence: ' + sequence);
    })
  }

  // TODO: We need a submit button as a trigger for the game to check the player sequence. It would be cool to have the game check for the length of the sequence the player put in, but a submit button is easier.
  $('#submit-button').click(function () {
    if (playerSequence === sequence) { // this will only work for sequences of length 1
      alert('Correct!');
      increaseScore();
      increaseSequenceScore(sequence);
    }
    else {
      alert('Sorry, you got it wrong!');
    }
  });
}

// function to increase score if the player gets the correct sequence
function increaseScore() {
  let oldScore = parseInt($('#current-score').text());
  $('#current-score').text(++oldScore);
}

// function to increase longest sequence score if the player gets the correct sequence
function increaseSequenceScore(sequence) {
  let oldSequenceScore = parseInt($('#longest-sequence').text());
  if (sequence.length > oldSequenceScore) {
    $('#longest-sequence').text(sequence.length);
  }
  else {
    return;
  }
}