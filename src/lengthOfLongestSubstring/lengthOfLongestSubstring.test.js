import { lengthOfLongestSubstring } from './lengthOfLongestSubstring.js';

describe('lengthOfLongestSubstring', () => {
  it('should return length of longest substr w/o repeat chars', () => {
    const inputs = ['abcabcbb', 'bbbbb', 'pwwkew', ' '];
    expect(lengthOfLongestSubstring(inputs[0])).toBe(3);
    expect(lengthOfLongestSubstring(inputs[1])).toBe(1);
    expect(lengthOfLongestSubstring(inputs[2])).toBe(3);
    expect(lengthOfLongestSubstring(inputs[3])).toBe(1);
  });
});