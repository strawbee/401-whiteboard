'use strict';

// Big O Notation: O(n) as it iterates through the entire list once.
exports.isCircular = list => {
    if (!list || typeof list !== 'object' || Array.isArray(list)) return null;
    let current = Object.assign({}, list);
    while (current) {
        if (current.value === undefined || current.next === undefined) return null;
        if (current.seen) return true;
        current.seen = true;
        current = current.next;
    }
    return false;
};