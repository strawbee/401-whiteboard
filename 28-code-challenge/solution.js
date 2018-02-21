'use strict';

// Given a string of words, you need to return the highest scoring word.
// each letter of a word receives a score. a=1, b=2, c=3, etc.
// if two words receive same score...

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