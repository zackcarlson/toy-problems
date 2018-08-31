const singleRomanVals = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};

const doubleRomanVals = {
  'IV': 4,
  'IX': 9,
  'XL': 40,
  'XC': 90,
  'CD': 400,
  'CM': 900,
};

export const romanToInt = function(s) {
  let sum = 0;
  let str = s.slice();

  for (let i = 0; i < str.length; i++) {
    let doubleRoman = str.substring(i, i+2);
    let foundDouble = doubleRomanVals[doubleRoman];
    if (doubleRoman && foundDouble) {
      sum += foundDouble;
      str = str.split('');
      str.splice(i, 2, '_');
      str = str.join('');
    }
  }

  str.split('').forEach(letter => {
    let foundSingle = singleRomanVals[letter];
    if (foundSingle) {
      sum += foundSingle;
    }
  });

  return sum;
};