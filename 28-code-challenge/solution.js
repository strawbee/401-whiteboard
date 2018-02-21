'use strict';

const highScore = str => {
    if (typeof str !== 'string') return 'Argument must be a string.';
    let max = 0, word = '';
    str.split(' ').forEach(el => {
        let count = 0;
        for (let i in el) count += el.charCodeAt(i) - 96;
        if (count > max) {
            max = count;
            word = el;
        }
    });
    return word;
};