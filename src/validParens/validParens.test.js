import { validParens } from './validParens.js';

describe('validParens', () => {
  it('should return true if parens are valid', () => {
    const inputs = ['{{{{()}}}}', '{}[]', '[()]'];
    const outputs = [true, true, true];

    inputs.forEach((input, i) => {
      expect(validParens(input)).toEqual(outputs[i]);
    });
  });

  it('should return false for invalid parens', () => {
    const inputs = ['[[]}}', '{]()', '({])'];
    const outputs = [false, false, false];

    inputs.forEach((input, i) => {
      expect(validParens(input)).toEqual(outputs[i]);
    });
  });

  it('should only accept parenthesis and bracket characters', () => {
    const chars = { '{':'{', '}':'}', '[':'[', ']':']', '(':'(', ')':')' };
    const validInput = '{]}[)('.split('');
    const invalidInput = '144{])}(['.split('');

    const validStr = validInput.every(char => char === chars[char]);
    const invalidStr = invalidInput.every(char => char === chars[char]);

    expect(validStr).toBe(true);
    expect(invalidStr).toBe(false);
  });
});