'use strict';

// O(n) - iterates through arr1 once and arr2 once.
exports.intersect = (arr1, arr2) => { 
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return null;
    let obj = {};
    arr1.forEach(el => obj[el] = true);
    return arr2.filter(el => obj[el]);
};