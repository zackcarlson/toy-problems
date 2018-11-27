/**
 * Insertion sort is a basic sorting algorithm.
 *
 * Insertion sort iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 *
 * Insertion sort should be implemented as a stable sort. This means that equal elements
 * should retain their relative order. Numbers, as primitives, give us no way to check this,
 * so we'll be sorting objects with a value field, on which they will be sorted, like so:
 *
 * `[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]`
 *
 * A stable sort must return `{value: 5, order: 1}, {value:5, order: 2}` in that order.
 * Example usage:
    insertionSort([{value: 2}, {value: 1}, {value: 3}]);
    yields [{value: 1}, {value: 2}, {value: 3}]

    This function is to help you test, and should not be incorporated in your solution.
    It will transform an array of numbers into an array of valid objects.
 **/

const transform = (array) => {
  let transformed = [];
  for (let i = 0; i < array.length; i++) {
    transformed.push({value: array[i], order: i});
  }
  return transformed;
};

export const insertionSort = (array) => {
  array = transform(array);
  for (let i = 1; i < array.length; i++) {
    let curEl = array[i].value;
    let j = i - 1;
    
    while (j >= 0 && array[j].value > curEl ) {
      array[j+1].value = array[j].value;
      array[j+1].order = array[j].order;
      j--;
    }
    array[j+1].value = curEl;
    array[j+1].order = i;
  }
  return array;
};