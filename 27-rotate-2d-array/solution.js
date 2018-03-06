'use strict';

// O(n) to first find the length of the longest sub-array, then O(n^2) to rotate the array.
// This solution accounts for rectangles and sub-arrays with different lengths
exports.rotate = arr => {
    if (!Array.isArray(arr)) return 'Argument must be array.';
    let result = [], length = 0;
    for (let i in arr) {
        if (!Array.isArray(arr[i])) return 'Elements must be array.';
        if (arr[i].length > length) length = arr[i].length;
    }
    for (let i = 0; i < length; i++) {
        result.push([]);
        for (let j in arr) {
            let current = arr[arr.length - 1 - j][i];
            if (!current) result[i].push(null);
            else {
                if (isNaN(current)) return 'Sub-elements must be numbers.';
                result[i].push(current);
            }
        }
    }
    return result;
};