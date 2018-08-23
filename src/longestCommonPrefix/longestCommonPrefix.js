export const longestCommonPrefix = (strs) => {
  let longest = '';

  if (strs.length < 1) return longest;
  if (strs.length === 1) return strs[0];

  let firstStr = strs[0];

  for (let i = 0; i < firstStr.length; i++) {
    let prefix = firstStr.slice(0, i+1);
    let prefixMatch = strs.every(str => str.slice(0, i+1) === prefix);
    if (prefixMatch) longest = prefix;
  }

  return longest;
};