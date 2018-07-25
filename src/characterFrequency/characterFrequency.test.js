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
  it('should return key value pairs as [string, number]', () => {
    let result = characterFrequency('babe');
    expect(typeof(result[0][0])).toBe('string');
    expect(typeof(result[0][1])).toBe('number');
  });
  it('should prioritize sort by frequency over by alphabet', () => {
    let result = characterFrequency('booonne');
    expect(result[0][0]).toEqual('o');
    expect(result[1][0]).toEqual('n');
  });
  it('should return nestArr sorted alpha (ascend) & charFreq (descend)', () => {
    expect(characterFrequency(input)).toEqual(output);
  });
});