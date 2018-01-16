'use strict';

exports.twoHighest = arr => {
    arr = arr.filter(el => !isNaN(el));
    if (arr.length < 2) return null;

    while (arr[0] === arr[1]) arr.shift();
    let highest = arr[0] > arr[1] ? arr[0] : arr[1];
    let second = arr[0] > arr[1] ? arr[1] : arr[0];

    for (let i = 2; i <= arr.length; i++) {
        if (arr[i] > highest) {
            second = highest;
            highest = arr[i];
        }
        else if (arr[i] > second && arr[i] !== highest) second = arr[i];
    }
    return `${highest}, ${second}`;
}

/* Alternate - more eloquent but less efficient:

exports.twoHighest = arr => {
    if (arr.length < 2) return null;
    arr.sort((a, b) => b - a);
    while (arr[0] === arr[1]) arr.shift();
    return `${arr[0]}, ${arr[1]}`;
}
*/