const PrimeFactors = require('./PrimeFactors');

describe('PrimeFactors', () => {

      // * 4620 should return `[2,2,3,5,7,11]`


  // * 1 should return `[]`
  describe('#generate ', () => {
    it('should return [] when given 1', () => {
      expect(PrimeFactors.generate(1)).toEqual([]);
    });

    it('should return [2] when given 2', () => {
      expect(PrimeFactors.generate(2)).toEqual([2]);
    });

    it('3 should return `[3]`', () => {
      expect(PrimeFactors.generate(3)).toEqual([3]);
    });

    it('4 should return `[2, 2]`', () => {
      expect(PrimeFactors.generate(4)).toEqual([2, 2]);
    });

    it('5 should return `[5]`', () => {
      expect(PrimeFactors.generate(5)).toEqual([5]);
    });

    it('6 should return `[2, 3]`', () => {
      expect(PrimeFactors.generate(6)).toEqual([2, 3]);
    });

    it('7 should return `[7]`', () => {
      expect(PrimeFactors.generate(7)).toEqual([7]);
    });

    it('8 should return `[2, 2, 2]`', () => {
      expect(PrimeFactors.generate(8)).toEqual([2, 2, 2]);
    });

    it('9 should return `[3, 3]`', () => {
      expect(PrimeFactors.generate(9)).toEqual([3, 3]);
    });

    it( '4620 should return `[2,2,3,5,7,11]`', () => {
      expect(PrimeFactors.generate(4620)).toEqual([2,2,3,5,7,11]);
    });

    it( '676 should return `[2, 2, 13, 13]`', () => {
      expect(PrimeFactors.generate(676)).toEqual([2,2,13, 13]);
    })
  });


  it('works', () => {
    expect(true).toBe(true);
  });
});
