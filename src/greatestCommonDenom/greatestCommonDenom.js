/*
  Given n numbers, find the greatest common denominator between them.
  For example, given the numbers [42, 56, 14], return 14.
*/

export const greatestCommonDenom = (arr) => {
  if (!arr.length) return null;
  let min = Math.min(...arr);
  let foundGCD = false;  

  while (!foundGCD && min !== 0) {
    let allShareMin = arr.every(el => el % min === 0);
    if (allShareMin) {
      foundGCD = true;
    } else {
      if (Math.sign(min) === 1) min--;
      if (Math.sign(min) === -1) min++;
    }
  }
  
  return min;
};