'use strict';

exports.traverse = obj => {
    if(!obj.value || Object.keys(obj).indexOf('next') === -1) return null;
    console.log(obj.value);
    return obj.value + (obj.next ? exports.traverse(obj.next) : 0);
}

/* Alternative, non-recursive solution:

exports.traverse = obj => {
    let sum = obj.value;
    console.log(obj.value);
    while (obj.next) {
        obj = obj.next;
        sum += obj.value;
        console.log(obj.value);
    }
    return sum;
}
*/