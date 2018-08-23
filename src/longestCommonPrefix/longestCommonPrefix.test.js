import { longestCommonPrefix } from './longestCommonPrefix.js';

describe('longestCommonPrefix', () => {
  it('should return the longest common prefix among all strings', () => {
    const input = ['flower', 'flow', 'flight'];
    const output = 'fl';

    expect(longestCommonPrefix(input)).toEqual(output);
  });

  it('should return an empty string if a common prefix does not exist', () => {
    const input = ['dog', 'car', 'racecar'];
    const output = '';

    expect(longestCommonPrefix(input)).toEqual(output);
  });

  it('should return an empty string when given an empty array', () => {
    const input = [];
    const output = '';

    expect(longestCommonPrefix(input)).toEqual(output);
  });

  it('should return the sole string in array with a length of 1', () => {
    const input = ['a'];
    const output = 'a';

    expect(longestCommonPrefix(input)).toEqual(output);
  });
});