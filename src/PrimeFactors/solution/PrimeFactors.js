// prime factors solution

function generate(number) {
  if (number === 1) return [];

  // TODO: Implement Sieve
  const PRIMES = _generatePrimes(number);

  let primeFactors = [];
  console.log("primes for number:", number, PRIMES);
  // const candidatePrime = PRIMES.find((prime) => (number % prime) === 0);

  let remainder = number;
  PRIMES.forEach(( prime )=> {
    while (remainder % prime === 0) {
      primeFactors.push(prime);
      remainder /= prime ;
    }
  });


  return primeFactors;
}

/*
 Input: an integer n > 1.

 Let A be an array of Boolean values, indexed by integers 2 to n,
 initially all set to true.

 for i = 2, 3, 4, ..., not exceeding √n:
   if A[i] is true:
     for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n:
       A[j] := false.

 Output: all i such that A[i] is true.
* */

function _generatePrimes(number) {
  if (number === 1) return [];
  const primeArray = [true, true];
  let result = [];
  for (let i = 2; i < Math.floor(Math.sqrt(number)); i++) {
    if(!primeArray[i]) {
      for(let j = i*i; j <= number; j+=i) {
        primeArray[j] = true;
      }
    }
  }
  for(let i = 2; i <= primeArray.length; i++) {
    if(!primeArray[i]) {
      result.push(i);
    }
  }
  return result;
}

module.exports = {
  generate
};
