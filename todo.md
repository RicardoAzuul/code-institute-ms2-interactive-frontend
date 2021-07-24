[] work on game
[] another CSS effect rather than scale?
[] work on readme.md
[] work on wireframes

sort array first

docstrings

/**
 * Checks the endscore with the scores in highscores
 *
 * @param {Integer} endScore  - score
 * @return {Integer} score - score
 */
function saveScore(endScore) {
    ...
}


remove end of function comments



  if (highScoreBeaten === false) { --> can also be if (!highScoreBeaten)
    alert('You didn\'t beat your highscore!');
  }
  else if (highScoreBeaten === true) { --> can also be if (highScoreBeaten)
    scoreValueArray.splice(scoreToMoveDown, 0, endScore);
    scoreValueArray = scoreValueArray.slice(0, -1);
  }
  
  
prettier

const difficultyButtons


console.log