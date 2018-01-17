'use strict';

exports.traverse = obj => {
    console.log(obj.value);
    while (obj.next) return traverse(obj.next);
}

/* Alternative, non-recursive solution:

exports.traverse = obj => {
    console.log(obj.value);
    while (obj.next) {
        obj = obj.next;
        console.log(obj.value);
    }
}
*/