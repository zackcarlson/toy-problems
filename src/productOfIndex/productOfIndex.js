/**
  Given an array of integers, return a new array such that 
  each element at index i of the new array is the product of 
  all the numbers in the original array except the one at i.

  For example, if our input was [1, 2, 3, 4, 5], the expected 
  output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], 
  the expected output would be [2, 3, 6].

  Follow-up: what if you can't use division?

  I: [3, 2, 1] arr of ints
  O: [2, 3, 6] return a new array such that 
  each element at index i of the new array is the product of 
  all the numbers in the original array except the one at i

  // create a result array to return 
  // loop through given array (parent loop) 
    // perform a reduce on given array and assign to a variable called reduced 
      // if index is the current index we're on in the parent loop,
        // skip it 
      // else mulitply all the other ints
    // push reduced into result array
  // return result array

  C: 0(n^2) time, 0(n) space
 */

export const productOfIndex = (ints) => {
  let result = [];
  for (let i = 0; i < ints.length; i++) {
    let reduced = ints.reduce((accum, curEl, curIdx) => {
      if (curIdx === i) return accum;
      else return accum * curEl;
    }, 1);
    result.push(reduced);
  }
  return result;
};