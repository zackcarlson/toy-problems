export const lengthOfLongestSubstring = (s) => {
  const map = {};
  let leftIdx = 0;
  let rightIdx = 0;
  let longest = 0;

  while (leftIdx < s.length && rightIdx < s.length) {
    if (!map[s[rightIdx]]) {
      map[s[rightIdx]] = s[rightIdx];
      rightIdx++;
    } else {
      delete map[s[leftIdx]];
      leftIdx++;
    }

    longest = Math.max(longest, rightIdx - leftIdx);
  }

  return longest;
};