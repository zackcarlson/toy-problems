import { characterFrequency } from './characterFrequency.js';

describe('characterFrequency', () => {
  const input = 'mississippi';
  const output = [['i', 4], ['s', 4], ['p', 2], ['m', 1]];

  it('should be a function', () => {
    expect(typeof(characterFrequency)).toBe('function');
  });
  it('should be an instance of an array', () => {
    expect(Array.isArray(characterFrequency(input))).toBe(true);
  });
  it('should return nestArr sorted alpha (ascend) & charFreq (descend)', () => {
    expect(characterFrequency(input)).toEqual(output);
  });
});