'use strict';

exports.traverse = obj => {
    if(!obj.value || Object.keys(obj).indexOf('next') === -1) return null;
    console.log(obj.value);
    while (obj.next) return exports.traverse(obj.next);
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