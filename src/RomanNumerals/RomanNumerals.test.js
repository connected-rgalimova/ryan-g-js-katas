const RomanNumerals = require('./RomanNumerals');

describe('RomanNumerals', () => {

  // 1. Given an Integer, return as a Roman Numeral
  // 1. Given a Roman Numeral, return as an Integer

  it('converts I to 1', () => {
    expect(RomanNumerals.toInteger('I')).toEqual(1);
  });

  it('converts V to 5', () => {
    expect(RomanNumerals.toInteger('V')).toEqual(5);
  });
  it('converts X to 10', () => {
    expect(RomanNumerals.toInteger('X')).toEqual(10);
  });
  it('converts L to 50', () => {
    expect(RomanNumerals.toInteger('L')).toEqual(50);
  });
  it('converts C to 100', () => {
    expect(RomanNumerals.toInteger('C')).toEqual(100);
  });
  it('converts D to 500', () => {
    expect(RomanNumerals.toInteger('D')).toEqual(500);
  });
  it('converts M to 1000', () => {
    expect(RomanNumerals.toInteger('M')).toEqual(1000);
  });
  it('converts II to 2', () => {
    expect(RomanNumerals.toInteger('II')).toEqual(2);
  });
  it('converts IV to 4', () => {
    expect(RomanNumerals.toInteger('IV')).toEqual(4);
  });
  it('converts IX to 9', () => {
    expect(RomanNumerals.toInteger('IX')).toEqual(9);
  });
  it('converts XL to 40', () => {
    expect(RomanNumerals.toInteger('XL')).toEqual(40);
  });
  it('converts XC to 90', () => {
    expect(RomanNumerals.toInteger('XC')).toEqual(90);
  });
  it('converts CD to 400', () => {
    expect(RomanNumerals.toInteger('CD')).toEqual(400);
  });
});
