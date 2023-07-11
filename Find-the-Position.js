// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// My Solution

function position(letter){
    let i, n = letter.length, acc = 0;
    for(i= 0; i < n; i++) {
      acc += parseInt(letter[i], 36) - 9;
    }
    return 'Position of alphabet: ' + acc;
  }