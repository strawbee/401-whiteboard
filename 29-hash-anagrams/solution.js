'use strict';

exports.sortAnagrams = str => {
    if (typeof str !== 'string' || !str) return 'Invalid argument';
    let result = {};
    str.split(' ').forEach(word => {
        let sorted = word.split('').sort().join('');
        if (!result[sorted]) result[sorted] = [word];
        else result[sorted].push(word);
    });
    return result;
};