import { characterFrequency } from './characterFrequency.js';

describe('characterFrequency', () => {
  it('should be a function', () => {
    expect(typeof(characterFrequency)).toBe('function');
  });

  it('should return nested array sorted alphabetically (ascending) and by character freq (descending)', () => {
    let input = 'mississippi';
    let output = [['i', 4], ['s', 4], ['p', 2], ['m', 1]];
    expect(characterFrequency(input)).toEqual(output);
  });
});