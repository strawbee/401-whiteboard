'use strict';
const utils = module.exports = {};

// Each of these methods are O(n) as it loops through the array once.
utils.map = (arr, cb) => {
    if (!Array.isArray(arr) || typeof cb !== 'function') return 'Invalid argument.';
    let result = [];
    for (let i in arr) result.push(cb(arr[i]))
    return result;
};

utils.filter = (arr, cb) => {
    if (!Array.isArray(arr) || typeof cb !== 'function') return 'Invalid argument.';
    let result = [];
    for (let i in arr) {
        if (cb(arr[i])) result.push(arr[i]);
    }
    return result;
};

utils.reduce = (arr, cb, initialValue) => {
    if (!Array.isArray(arr) || typeof cb !== 'function') return 'Invalid argument.';
    let index = 0;
    if (!initialValue) {
        initialValue = arr[0];
        index = 1;
    }
    for (let i = index; i < arr.length; i++) initialValue = cb(initialValue, arr[i])
    return initialValue;
};