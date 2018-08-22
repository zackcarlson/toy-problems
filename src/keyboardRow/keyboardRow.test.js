import { keyboardRow } from './keyboardRow.js';

describe('keyboardRow', () => {
  it('should accept an array as its argument', () => {
    const input = ['ab', 'cd'];
    const output = Array;

    expect(input).toBeInstanceOf(output);
  });

  it('should return array of words that can be created on only one row', () => {
    const input = ['Alaska', 'Lake', 'Dad', 'Fish'];
    const output = ['Alaska', 'Dad'];
    expect(keyboardRow(input)).toEqual(output);
  });

  it('should return empty array if no words can be created on one row', () => {
    const input = ['Nothing', 'Can', 'Be', 'Found'];
    const output = [];
    expect(keyboardRow(input)).toEqual(output);
  });
});