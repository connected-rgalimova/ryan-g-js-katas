class StringCalculator {
  add(input) {
    // TODO split by \n and grab the first element
    // check if it starts with //
    // if yes set the value after // as delimiter
    const customDelimiter = input.split('\n');

    const splitString = input.split(/[,\n]/);
    let sum = 0;
    let negatives = [];
    for (let i = 0; i < splitString.length; i++) {
      let num = Number(splitString[i]);
      if (num < 0) {
        negatives.push(num)
      } else if (num > 1000) {
        continue
      }
      sum += num;
    }
    if (negatives.length > 0) {
      throw new Error('negatives not allowed: ' + negatives.join(','))
    }
    return sum;
  }
}

module.exports = StringCalculator;
