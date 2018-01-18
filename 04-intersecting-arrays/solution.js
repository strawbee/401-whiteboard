'use strict';

exports.intersect = (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return null;
    let obj = {};
    arr1.forEach(el => obj[el] = true);
    return arr2.filter(el => obj[el]);
}

/* Alternate -- more elegant but less efficient: 

exports.intersect = (arr1, arr2) => arr1.filter(el => arr2.includes(el));
*/