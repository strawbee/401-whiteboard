'use strict';

exports.sumExpDigits = (base, exp) => {
  if (!Number.isInteger(base) || !Number.isInteger(exp)) return 'Invalid argument.';
  let n = base ** exp, sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = ~~(n/10);
  }
  return sum;
};