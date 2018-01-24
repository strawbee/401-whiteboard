'use strict';
let sll = require('./lib/sll');

// Big O(n) as it iterates through each list once
exports.intersect = (list1, list2) => {
    if (!list1 || !list2 || typeof list1 !== 'object' || typeof list2 !== 'object' || Array.isArray(list1) || Array.isArray(list2)) return null;
    let hash = {}, result = new sll();
    while (list1) {
        if (list1.value === undefined || list1.next === undefined) return null;
        hash[list1.value] = true;
        list1 = list1.next;
    }
    while (list2) {
        if (list2.value === undefined || list2.next === undefined) return null;
        if (hash[list2.value]) result.insertTail(list2.value);
        list2 = list2.next;
    }
    return result;
};