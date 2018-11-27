import { sumZero } from './sumZero.js';

describe('sumZero', () => {
  it('should return a pair of nums that sum to 0', () => {
    const input = [-5, 0, 2, 5, 6, 7, 8, 10];
    const output = [-5, 5];

    expect(sumZero(input)).toEqual(output);
  });

  it('should return an empty array if no pairs sum to 0', () => {
    expect(sumZero([1, 2, 3]).toEqual([]));
  });
});