import { anagram } from './anagram.js';

describe('anagram', () => {
  const inputs = ['anagram', 'nagaram', 'aabb', 'sstt'];
  it('should return true if the second str is an anagram of first' , () => {
    expect(anagram(inputs[0], inputs[1])).toBe(true);
  });
  it('should return false if second str is not an anagram of first', () => {
    expect(anagram(inputs[1], inputs[2])).toBe(false);
  });
});