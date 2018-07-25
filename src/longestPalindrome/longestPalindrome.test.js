import { longestPalindrome } from './longestPalindrome.js';

describe('longestPalindrome', () => {
  it('should be a function', () => {
    expect(typeof(longestPalindrome)).toBe('function');
  });
  it('should return the longest palindrome', () => {
    let input = 'My dad is a racecar athlete';
    let output = 'a racecar a';
    expect(longestPalindrome(input)).toEqual(output);
  });
});