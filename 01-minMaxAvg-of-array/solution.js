'use strict';

const findArrayProperties = arr => {
    let max = Math.max.apply(null, arr),
        min = Math.min.apply(null, arr),
        avg = arr.reduce((sum, el) => sum + el) / arr.length;
    return `Highest Value: ${max}
    Lowest Value: ${min}
    Average of All Values: ${avg}`;
}   