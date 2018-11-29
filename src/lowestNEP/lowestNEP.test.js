import lowestNEP from './lowestNEP.js';

describe('lowestNEP', () => {
  it('should return lowest positive number not present in given array', () => {
    expect(lowestNEP([3, 4, -1, 1])).toEqual(2);
    expect(lowestNEP([1, 2, 0])).toEqual(3);
  });
});