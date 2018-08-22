const row1 = {
  q: 'q',
  w: 'w',
  e: 'e',
  r: 'r',
  t: 't',
  y: 'y',
  u: 'u',
  i: 'i',
  o: 'o',
  p: 'p'
};

const row2 = {
  a: 'a',
  s: 's',
  d: 'd',
  f: 'f',
  g: 'g',
  h: 'h',
  j: 'j',
  k: 'k',
  l: 'l'
};

const row3 = {
  z: 'z',
  x: 'x',
  c: 'c',
  v: 'v',
  b: 'b',
  n: 'n',
  m: 'm'
};

export const keyboardRow = (words) => {
  return words.filter(word => {
    let wordCopy = word.slice().toLowerCase().split('');
    if (wordCopy.every(letter => row1[letter])) {
      return word;
    } else if (wordCopy.every(letter => row2[letter])) {
      return word;
    } else if (wordCopy.every(letter => row3[letter])) {
      return word;
    }
  });
}; 