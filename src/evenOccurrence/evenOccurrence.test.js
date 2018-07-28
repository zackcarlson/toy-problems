import { evenOccurrence } from './evenOccurrence.js';

describe('evenOccurrence', () => {
  const inputNumArr = [1, 7, 2, 4, 5, 6, 8, 9, 6, 4];
  const inputStrArr = ['zack', 'mealear', 'dog', 'meow', 'zack'];
  const inputMixArr = ['dog', 'meow', 1, 4, 4];
  const outputNum = 4;
  const outputStr = 'zack';
  const outputMix = 4;

  it('should be a function', () => {
    expect(typeof(evenOccurrence)).toBe('function');
  });
  it('should be given an array as an input', () => {
    expect(Array.isArray(inputNumArr)).toBe(true);
  });
  it('should return the first even occurrence of an array of numbers', () =>{
    expect(evenOccurrence(inputNumArr)).toEqual(outputNum);
  });
  it('should return a number when given array of numbers', () => {
    expect(typeof(evenOccurrence(inputNumArr))).toBe('number');
  });
  it('should return the first even occurrence of an array of strings', () => {
    expect(evenOccurrence(inputStrArr)).toEqual(outputStr);
  });
  it('should return a string when given array of strings', () => {
    expect(typeof(evenOccurrence(inputStrArr))).toBe('string');
  });
  it('should return correct value when given an array of mixed items', () => {
    expect(evenOccurrence(inputMixArr)).toEqual(outputMix);
  });
  it('should return null when there are no even occurrence items', () => {
    expect(evenOccurrence([1, 2, 3, 4])).toEqual(null);
  });
});