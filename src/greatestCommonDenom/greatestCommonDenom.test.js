import { greatestCommonDenom } from './greatestCommonDenom.js';

describe('greatestCommonDenom', () => {
  it('should return the greatest common denominator', () => {
    expect(greatestCommonDenom([42, 56, 14])).toEqual(14);
  });

  it('should return null when given empty array', () => {
    expect(greatestCommonDenom([])).toEqual(null);
  });
});