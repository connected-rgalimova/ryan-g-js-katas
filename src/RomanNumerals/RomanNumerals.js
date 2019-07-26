const letterToInteger = {
  "I": 1,
  "V": 5,
  "L": 50,
  "X": 10,
  "C": 100,
  "D": 500,
  "M": 1000,
};

class RomanNumerals {

  static toInteger(letters) {

    let number = 0;
    for (let i = 0; i < letters.length; i += 1) {
      let letter = letters.charAt(i);
      if (letter === "I") {
        number = this.calculateNumber(i, letters, ["V", "X"], number, letter);
      } else if (letter === "X") {
        number = this.calculateNumber(i, letters, ["L", "C"], number, letter);
      } else {
        number += letterToInteger[letter];
      }
    }
    return number;
  }

  static calculateNumber(i, letters, subtractiveLetters, number, letter) {
    if ((i + 1 <= letters.length) && subtractiveLetters.includes(letters.charAt(i + 1))) {
      number -= letterToInteger[letter];
    } else {
      number += letterToInteger[letter];
    }
    return number;
  }
}

module.exports = RomanNumerals;
