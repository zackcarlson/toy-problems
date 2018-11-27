import { transform, insertionSort } from './insertionSort.js';

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
});