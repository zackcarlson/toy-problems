/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
 * 
 * 
 * I: array of items
 * O: first item that reoccurs evenly
 * C: linear
 * E: none
 * 
 * Transformation: 
 * 
 * create an object to store item, and occurences
 * {
 *   value: 2(occurenece)
 * }
 * iterate through array and collect all values and occurences 
 * into object
 * 
 * {
 *   1: 1,
 *   7: 1,
 *   2: 1,
 *   4: 2,
 *   5: 1,
 *   6: 2,
 *   8: 1,
 *   9: 1,
 * }
 * 
 * iterate through object and check if occurrences are even 
 * return that value 
 * 
*/

export const evenOccurrence = (arr) => {
  let occurrences = {};
  arr.forEach(item => {
    if (occurrences[item]) {
      occurrences[item] = [(occurrences[item][0] || 0) + 1, item];
    } else {
      occurrences[item] = [1, item];
    }
  });
  for (let item in occurrences) { 
    if (occurrences[item][0] % 2 === 0) {
      return occurrences[item][1];
    }
  }
  return null;
};