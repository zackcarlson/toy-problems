import lowestNEP from './lowestNEP.js';

describe('lowestNEP', () => {
  it('should return lowest positive number not present in given array', () => {
    expect(lowestNEP([3, 4, -1, 1])).toEqual(2);
    expect(lowestNEP([1, 2, 0])).toEqual(3);
  });

  it('should return 1 when given an array of negative integers',  () => {
    expect(lowestNEP([-3, -4, -1, -1])).toEqual(1);
    expect(lowestNEP([-1, -2, -10])).toEqual(1);
  });
});