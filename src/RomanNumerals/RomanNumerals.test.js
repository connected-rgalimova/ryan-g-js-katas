const RomanNumerals = require('./RomanNumerals');

describe('RomanNumerals', () => {

  // 1. Given an Integer, return as a Roman Numeral
  // 1. Given a Roman Numeral, return as an Integer

  const toI = letter => RomanNumerals.toInteger(letter)

  it('converts I to 1', () => {
    expect(toI('I')).toEqual(1);
  });
  it('converts V to 5', () => {
    expect(toI('V')).toEqual(5);
  });
  it('converts X to 10', () => {
    expect(toI('X')).toEqual(10);
  });
  it('converts L to 50', () => {
    expect(toI('L')).toEqual(50);
  });
  it('converts C to 100', () => {
    expect(toI('C')).toEqual(100);
  });
  it('converts D to 500', () => {
    expect(toI('D')).toEqual(500);
  });
  it('converts M to 1000', () => {
    expect(toI('M')).toEqual(1000);
  });
  it('converts II to 2', () => {
    expect(toI('II')).toEqual(2);
  });
  it('converts IV to 4', () => {
    expect(toI('IV')).toEqual(4);
  });
  it('converts IX to 9', () => {
    expect(toI('IX')).toEqual(9);
  });
  it('converts XL to 40', () => {
    expect(toI('XL')).toEqual(40);
  });
  it('converts XC to 90', () => {
    expect(toI('XC')).toEqual(90);
  });
  it('converts CD to 400', () => {
    expect(toI('CD')).toEqual(400);
  });

  describe('validating input', () => {
    it('throws error when input is an invalid roman numeral combination', () => {
      expect(() => toI('IL')).toThrowError('IL is not a valid Roman Numeral');
    });
  });
});
