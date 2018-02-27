'use strict';

// Iterative approach: O(n) - iterates through the sequence once until it reaches the desired index
exports.fib = n => {
  if (!Number.isInteger(n)) return 'Invalid argument.';
  if (!n) return 0;
  let start = 0, prev = 1, res;
  for (let i = 0; i < n; i++) {
    res = start + prev;
    prev = start;
    start = res;
  }
  return res;
};

// Recursive approach - O(2^n) - exponential Big O complexity. 
exports.recurs = n => {
  if (!Number.isInteger(n)) return 'Invalid argument.';
  if (!n) return 0;
  if (n <= 2) return 1;
  return exports.recurs(n - 1) + exports.recurs(n - 2);
};