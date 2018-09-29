export const sumZero = (sortArrNums) => {
  // create left idx and right idx
  let left = 0, right = sortArrNums.length - 1;
  // while left is less than right 
  while (left < right) {
    let sum = sortArrNums[left] + sortArrNums[right];
    // if sum of els at left & right = 0 
    if (sum === 0) {
      // return left and right as array
      return [sortArrNums[left], sortArrNums[right]];
      // if sum  is greater than 0 
      // decrement right idx
    } else if (sum > 0) {
      right--;
      // else increase left idx
    } else {
      left++;
    }
  }
  // return undefined
  return undefined;
}