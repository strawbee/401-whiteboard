'use strict';

exports.sortAnagrams = arr => {
    if (!Array.isArray(arr) || !arr[0]) return ('Invalid argument.');
    let hash = {}, result = [];
    arr.forEach(word => {
        let sorted = word.split('').sort().join('');
        if (!hash[sorted]) hash[sorted] = [word];
        else hash[sorted].push(word);
    });
    for (let i in hash) {
        hash[i].sort();
        result = result.concat(hash[i]);
    }
    return result;
};