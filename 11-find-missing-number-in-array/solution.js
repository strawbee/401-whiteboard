'use strict';

exports.calculateMissing = arr => {
    if (!Array.isArray(arr)) return 'Invalid argument.';
    if (arr.length !== 99) return 'Array must contain 99 numbers.';
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number' || arr[i] < 1 || arr[i] > 100) return 'Array must contain numbers between 1 and 100.';
        if (arr[i] !== i + 1) return arr[i] - 1;
    }
};