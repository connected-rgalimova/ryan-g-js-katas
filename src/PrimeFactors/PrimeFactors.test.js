const PrimeFactors = require('./PrimeFactors');

describe('PrimeFactors', () => {
  it('1 should return []', () => {
    const result = PrimeFactors(1);
    expect(result).toEqual([]);
  });

  it('2 should return [2]', () => {
    const result = PrimeFactors(2);
    expect(result).toEqual([2]);
  });

  it('3 should return [3]', () => {
    const result = PrimeFactors(3);
    expect(result).toEqual([3]);
  });

  it('4 should return [2,2]', () => {
    const result = PrimeFactors(4);
    expect(result).toEqual([2, 2]);
  });

  it('5 should return [5]', () => {
    const result = PrimeFactors(5);
    expect(result).toEqual([5]);
  });

  it('6 should return [2,3]', () => {
    const result = PrimeFactors(6);
    expect(result).toEqual([2, 3]);
  });

  it('7 should return [7]', () => {
    const result = PrimeFactors(7);
    expect(result).toEqual([7]);
  });

  it('8 should return [2,2,2]', () => {
    const result = PrimeFactors(8);
    expect(result).toEqual([2, 2, 2]);
  });

  it('9 should return [3,3]', () => {
    const result = PrimeFactors(9);
    expect(result).toEqual([3, 3]);
  });

  it('4620 should return [2,2,3,5,7,11]', () => {
    const result = PrimeFactors(4620);
    expect(result).toEqual([2, 2, 3, 5, 7, 11]);
  });
});
