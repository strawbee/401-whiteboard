'use strict';

// O(n) - loops through copy of list twice. Once to find the list length and once to find the nth node from end.
exports.nthFromEnd = (list, n) => {
    if (!list || typeof list !== 'object' || Array.isArray(list) || !Number.isInteger(n) || n < 0) return null;
    let current = Object.assign({}, list), length = 0;
    while (current) {
        if (current.value === undefined || current.next === undefined) return null;
        length++;
        current = current.next;
    }
    if (length <= n) return null;
    let nth = length - n;
    for (let i = 1; i < nth; i++) list = list.next;
    return list;
}