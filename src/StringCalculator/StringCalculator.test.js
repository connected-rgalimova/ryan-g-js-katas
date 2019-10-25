const StringCalculator = require('./StringCalculator');

// Write a method `add` under an object `StringCalculator` that, given a delimited string, returns the sum of the numbers in the string.

describe('StringCalculator', () => {
  it('works', () => {
    expect(true).toBe(true);
  });

  describe('.add()', () => {
  // 1. An empty string returns zero `'' => 0`
    it('returns zero when empty string is given', () => {
      const result = StringCalculator.add('');

      expect(result).toEqual(0);
    });

    // 2. A single number returns the value `'1' => 1` `'2' => 2`
    it('returns the value if it is a single number string', () => {
      const result = StringCalculator.add('1');
      expect(result).toEqual(1);
    });

    // 3. Two numbers, comma delimited, returns the sum `'1,2' => 3` `'10,20' => 30`
    it('returns the sum when string contains two numbers, comma delimited', () => {
      const result = StringCalculator.add('1,2');
      expect(result).toEqual(3);
    });

    
    // 4. Two numbers, newline delimited, returns the sum `'1\n2' => 3`
    it('returns the sum when string contains two numbers, newline delimited', () => {
      const result = StringCalculator.add('1\n2');
      expect(result).toEqual(3);
    });
  });
});
