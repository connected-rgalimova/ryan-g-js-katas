function generate(number) {
  const primes = [2, 3, 5, 7, 11];
  const result = [];

  // loop through all numbers y smaller than number x (stopping at 1)
  // for each iteration, check if x / y has a remainder of zero
  // if it does:
  //  - push y into the result array
  //  - reassign x as x / y (integer division)

  primes.forEach(prime => {
    while (number % prime === 0) {
      result.push(prime);
      number = number / prime;
    }      
  });

  if (primes.includes(number)) {
    result.push(number)
  }

  return result;
}

module.exports = generate;
