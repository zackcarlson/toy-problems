import { reverseInteger } from './reverseInteger.js';

describe('reverseInteger', () => {
  it('should return the given input, reversed', () => {
    const input = 123;
    const output = 321;
    
    expect(reverseInteger(input)).toEqual(output);
  });

  it('should remove leading zeroes of reversed integer', () => {
    const input = 1000;
    const output = 1;

    expect(reverseInteger(input)).toEqual(output);
  });

  it('should return negative integer when given negative integer', () => {
    const input = -2045;
    const output = -5402;

    expect(reverseInteger(input)).toEqual(output);
  });

  it('should return 0 when reversing integer greater/less than 32-bits', () => {
    const input = 1534236469;
    const output = 0;

    expect(reverseInteger(input)).toEqual(output);
  });
});