'use strict';

let Tree = require('./lib/tree');

/* 
PSEUDO CODE:
    Use a deep equal recursive function.
    - Compare keys of both trees
    - If value of keys are object, recursively compare keys of the values
*/

let result = true;
exports.compareStructure = (a, b) => {
    if (!a || !b || typeof a !== 'object' || typeof b !== 'object') return 'Invalid argument.';
    let aKeys = Object.keys(a), bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) result = false;
    for (let i in aKeys) {
        if (aKeys[i] !== bKeys[i]) result = false;
        if (typeof a[aKeys[i]] === 'object' || typeof b[bKeys[i]] === 'object')
            exports.compareStructure(a[aKeys[i]], b[bKeys[i]]);
    }
    return result;
}