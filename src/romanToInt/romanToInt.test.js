import { romanToInt } from './romanToInt.js';

describe('romanToInt', () => {
  it('should return a number', () => {
    const input = 'III';
    const output = 'number';

    expect(typeof romanToInt(input)).toBe(output);
  });

  it('should return the correct integer for a given roman numeral', () => {
    const input = 'MCMXCIV';
    const output = 1994;

    expect(romanToInt(input)).toEqual(output);
  });
});