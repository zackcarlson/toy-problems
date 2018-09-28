export const anagram = (str1, str2) => {
  // return false if str lengths are unequal
  if (str1.length !== str2.length) return false;
  // create an object for letter counts
  let str1LetterFreq = {};
  let str2LetterFreq = {};
  // loop length of str1
  for (let letter of str1) {
    // if letter is new, add letter to object and set to 1
    // else increment letter by 1
    str1LetterFreq[letter] = ++str1LetterFreq[letter] || 1;
  }

  for (let letter of str2) {
    str2LetterFreq[letter] = ++str2LetterFreq[letter] || 1;
  }


  // loop through object 
  for (let freq in str1LetterFreq) {
    // return false if letter of str1 is not present in str2 and
    // letter's count of str1 is not the same
    if (
      !str2LetterFreq[freq] &&
      str1LetterFreq[freq] !== str2LetterFreq[freq]
    ) return false;
  }
  // return true 
  return true;
};