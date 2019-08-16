const letterToInteger = {
  "I": 1,
  "V": 5,
  "L": 50,
  "X": 10,
  "C": 100,
  "D": 500,
  "M": 1000,
};

const subtractiveLetters = {
  "I": ["V", "X"],
  "X": ["L", "C"],
  "C": ["D"],
};

const invalidNextLetters = {
  "I": ["L", "C", "D", "M"],
  "V": ["V", "L", "X", "C", "D", "M"],
  "L": ["C", "D", "M"],
  "X": ["D", "M"],
  "C": [],
  "D": ["D", "M"],
  "M": [],
};

class RomanNumerals {

  static toInteger(letters) {

    let number = 0;
    for (let i = 0; i < letters.length; i += 1) {
      let letter = letters.charAt(i);
      number = this.calculateNumber(i, letters, number, letter);
    }
    return number;
  }

  static calculateNumber(i, letters, number, letter) {
    // TODO: WIP refactor for readability
    if (i + 1 <= letters.length && letterToInteger[letters.charAt(i)] < letterToInteger[letters.charAt(i + 1)]) {
      if (!subtractiveLetters[letter] || !subtractiveLetters[letter].includes(letters.charAt(i + 1))) {
        throw new Error(`${letters} is not a valid Roman Numeral`)
      }
      // const nextLetter = letters[i + 1];
      // if (invalidNextLetters[letter].includes(nextLetter)) {
      //   throw new Error(`${letter}${nextLetter} is not a valid Roman Numeral`)
      // }
    }
    if ((i + 1 <= letters.length) && subtractiveLetters[letter] && subtractiveLetters[letter].includes(letters.charAt(i + 1))) {
      number -= letterToInteger[letter];
    } else {
      number += letterToInteger[letter];
    }
    return number;
  }
}

module.exports = RomanNumerals;
