import { anagram } from './anagram.js';

describe('anagram', () => {
  const inputs = ['anagram', 'nagaram'];
  it('should return true if the second str is an anagram of first' , () => {
    expect(anagram(inputs[0], inputs[1])).toBe(true);
  });
});