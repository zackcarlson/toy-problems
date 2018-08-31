import { findMedianSortedArrays } from './findMedianSortedArrays.js';

describe('findMedianSortedArrays', () => {
  it('should return median of two sorted arrays', () => {
    const inputs = [ [1, 2], [3, 4], [1, 3], [2] ];
    const outputs = [ 2.5, 2.0 ];
    expect(findMedianSortedArrays(inputs[0], inputs[1])).toBe(outputs[0]);
    expect(findMedianSortedArrays(inputs[2], inputs[3])).toBe(outputs[1]);
  });
});