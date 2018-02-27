'use strict';

require('jest');
const solution = require('../solution');

describe('#Fibonacci Iterative Approach', () => {
  it('should take in a numerical argument', () => {
    expect(solution.fib()).toBe('Invalid argument.');
    expect(solution.fib('str')).toBe('Invalid argument.');
    expect(solution.fib([1])).toBe('Invalid argument.');
    expect(solution.fib(1)).not.toBe('Invalid argument.');
  });

  it('should take in a whole number', () => {
    expect(solution.fib(1.3)).toBe('Invalid argument.');
  });

  it('should return the correct output even when n is 0 or 1', () => {
    expect(solution.fib(0)).toBe(0);
    expect(solution.fib(1)).toBe(1);
  });

  it('should return the correct output', () => {
    expect(solution.fib(4)).toBe(3);
    expect(solution.fib(20)).toBe(6765);
  });
});

describe('#Fibonacci Recursive Approach', () => {
  it('should take in a numerical argument', () => {
    expect(solution.recurs()).toBe('Invalid argument.');
    expect(solution.recurs('str')).toBe('Invalid argument.');
    expect(solution.recurs([1])).toBe('Invalid argument.');
    expect(solution.recurs(1)).not.toBe('Invalid argument.');
  });

  it('should take in a whole number', () => {
    expect(solution.recurs(1.3)).toBe('Invalid argument.');
  });

  it('should return the correct output even when n is 0 or 1', () => {
    expect(solution.recurs(0)).toBe(0);
    expect(solution.recurs(1)).toBe(1);
  });

  it('should return the correct output', () => {
    expect(solution.recurs(4)).toBe(3);
    expect(solution.recurs(20)).toBe(6765);
  });
});