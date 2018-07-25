/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example1 ::
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 * I: string
 * O: array of arrays, sorted in descending order by frequency and then by
 *  ascending order by character 
 * C: linear
 * E: NA
 * 
 */


const sortByAlpha = (string) => {
  return string.split('').sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }).join('');
};

const countCharFreq = (alphaSortedStr) => {
  let charFreq = {};
  for (let i = 0; i < alphaSortedStr.length; i++) {
    let currentChar = alphaSortedStr[i];
    if (charFreq[currentChar]) {
      charFreq[currentChar] = (charFreq[currentChar] || 0) + 1;
    } else {
      charFreq[currentChar] = 1;
    }
  }
  return charFreq;
};

export const characterFrequency = (string) => {
  let alphaSortedStr = sortByAlpha(string);
  let charFrequency = countCharFreq(alphaSortedStr);
};