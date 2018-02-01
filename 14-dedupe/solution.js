'use strict';

const Stack = require('./stack');

// 2 * O(1) as it iterates through the list once and then iterates through the stack once as well.
exports.dedupe = list => {
    if (typeof list !== 'object' || Array.isArray(list) || list === null || !Object.keys(list)[0]) return null;

    let stack = new Stack(), next;

    while (list) {
        if (!list.value || list.next === undefined) return null;
        if (stack.size && list.value === stack.peek().value) {
            list = list.next;
            continue;
        }
        stack.push(list.value);
        list = list.next;
    }

    while (stack.size) {
        let current = {'value': stack.pop().value, 'next': next || null};
        next = current;
    }

    return next;
};