function generate(number) {
  if (number === 1) return [];

  if (number > 2 && number % 2 === 0) { // even
    return [2].concat(generate(number / 2));
  } else if (number > 2 && number % 3 === 0) {
    return [3].concat(generate(number / 3));
  }

  return [number];
}

module.exports = {
  generate
};
