import { productOfIndex } from './productOfIndex.js';

describe('productOfIndex', () => {
  it('should return new array such that each index i is product of given ints except for one at i', () => {
    let input = [1, 2, 3, 4, 5];
    let output = [120, 60, 40, 30, 24];
    expect(productOfIndex(input)).toEqual(output);
  });
});