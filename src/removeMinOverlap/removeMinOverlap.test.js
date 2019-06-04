import { removeMinOverlap } from './removeMinOverlap.js';

describe('removeMinOverlap', () => {
  it('should return correct number of min overlaps to remove', () => {
    expect(removeMinOverlap([[7,9], [2,4], [5,8]])).toBe(1);
  });

  it('should return 0 when given empty array', () => {
    expect(removeMinOverlap([])).toBe(0);
  });
});