'use strict';

require('jest');
const solution = require('../solution');

describe('#sumExpDigits', () => {
  it('should take in two numerical arguments', () => {
    expect(solution.sumExpDigits()).toBe('Invalid argument.');
    expect(solution.sumExpDigits('1', '2')).toBe('Invalid argument.');
    expect(solution.sumExpDigits(1)).toBe('Invalid argument.');
    expect(solution.sumExpDigits(1, 2)).not.toBe('Invalid argument.');
  });

  it('should not take in floating point numbers', () => {
    expect(solution.sumExpDigits(1, 2.2)).toBe('Invalid argument.');
    expect(solution.sumExpDigits(1.2, 2)).toBe('Invalid argument.');
  });

  it('should return the correct output', () => {
    expect(solution.sumExpDigits(2, 4)).toBe(7);
    expect(solution.sumExpDigits(2, 15)).toBe(26);
  });

  it('should return the correct output even when either argument is 0', () => {
    expect(solution.sumExpDigits(0, 4)).toBe(0);
    expect(solution.sumExpDigits(2, 0)).toBe(1);
    expect(solution.sumExpDigits(0, 0)).toBe(1);

  });
});