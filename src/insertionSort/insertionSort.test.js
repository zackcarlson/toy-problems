import { insertionSort } from './insertionSort.js';

describe('insertionSort', () => {
  it('should return unsorted array of nums into sorted array of objects', () => {
    let input = [54, 54, 3, 1, 43, 0];
    let output = [ { value: 0, order: 5 },
      { value: 1, order: 3 },
      { value: 3, order: 2 },
      { value: 43, order: 4 },
      { value: 54, order: 0 },
      { value: 54, order: 1 } ];
    expect(insertionSort(input)).toEqual(output);
  });

  it('should return an empty array when given empty input', () => {
    expect(insertionSort([])).toEqual([]);
  });

  it('should be able to sort string values',  () => {
    let input = ['bennys','zack','apple'];
    let output = [ { value: 'apple', order: 2 },
    { value: 'bennys', order: 0 },
    { value: 'zack', order: 1 } ];
    expect(insertionSort(input)).toEqual(output);
  });

});