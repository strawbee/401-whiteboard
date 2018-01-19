'use strict';

exports.findMid = list => {
    if (typeof list !== 'object' || Array.isArray(list) || list === null || !Object.keys(list)[0]) return null;
    let list2 = Object.assign({}, list);
    let count = 0;
    while (list2) { // Big O complexity: O(n)
        if (!list2.value || list2.next === undefined) return null;
        count++;
        list2 = list2.next;
    }
    let mid = Math.ceil(count / 2);
    for (let i = 1; i < mid; i++) list = list.next; // Big O complexity: O(n), but more succinctly roughly O(n) / 2
    if (count % 2) return list;
    else return `Number of nodes are even. The two middle nodes are: ${list}, ${list.next}`;
}