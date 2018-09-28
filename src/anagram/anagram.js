export const anagram = (str1, str2) => {
  // return false if str lengths are unequal
  if (str1.length !== str2.length) return false;
  // create an object for letter counts
  let letterFreq = {};
  // loop length of str1
  for (let i = 0; i < str1.length; i++) {
    // if letter is new, add letter to object and set to 1
    // else increment letter by 1
    letterFreq[str1[i]] = ++letterFreq[str1[i]] || 1;
    letterFreq[str2[i]] = ++letterFreq[str2[i]] || 1;
  }

  // loop through object 
  for (let freq in letterFreq) {
    // return false if letter count is unevenly divisible by 2
    if (letterFreq[freq] % 2 !== 0) {
      return false;
    }
  }
  // return true 
  return true;
};