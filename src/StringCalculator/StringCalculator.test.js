const StringCalculator = require('./StringCalculator');

// Write a method `add` under an object `StringCalculator` that, given a delimited string, returns the sum of the numbers in the string.
//
// 1. An empty string returns zero `'' => 0`
// 2. A single number returns the value `'1' => 1` `'2' => 2`
// 3. Two numbers, comma delimited, returns the sum `'1,2' => 3` `'10,20' => 30`
// 4. Two numbers, newline delimited, returns the sum `'1\n2' => 3`
// 5. Three numbers, delimited either way, returns the sum `'1\n2,3\n4' => 10`
// 6. Negative numbers throw an exception with the message `'-1,2,-3' => 'negatives not allowed: -1,-3'`
//
// **stop here if you are a beginner. Continue if you can finish the steps so far in less than 30 minutes.**
//
// 7. Numbers greater than 1000 are ignored
// 8. A single char delimiter can be defined on the first line starting with `//` (e.g `//#\n1#2` for a ‘#’ as the delimiter)
// 9. A multi char delimiter can be defined on the first line starting with `//` (e.g. `//###\n1###2` for ‘###’ as the delimiter)

describe('StringCalculator', () => {
  const add = (new StringCalculator()).add;

  it('should return 0 when given an empty string', () => {
    expect(add('')).toBe(0);
  });

  it('should return the number when given a single number as a string', () => {
    expect(add('1')).toBe(1);
  });

  it('should return the sum when given two comma delimited numbers', () => {
    expect(add('1,2')).toBe(3)
  });

  it('should return the sum when given two newline delimited numbers', () => {
    expect(add(`3\n4`)).toBe(7);
  });

  it('should return the sum when given more then two numbers mixed deliminators', () => {
    expect(add(`1\n2,3\n4`)).toBe(10);
  });

  it('should throw an exception for negative numbers', () => {
    expect(() => add(`-1,2,-3`)).toThrow(new Error('negatives not allowed: -1,-3'));
  });

  it('Numbers greater than 1000 are ignored', () => {
    expect(add(`1001,1`)).toBe(1);
  });

  it('A single char delimiter can be defined on the first line starting with `//`', () => {
    expect(add(`//#\n1#2#3`)).toBe(6);
  });
});
