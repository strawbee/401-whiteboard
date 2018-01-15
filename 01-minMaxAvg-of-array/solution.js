'use strict';

const findArrayProperties = arr => {
    let max = Math.max.apply(null, arr),
        min = Math.min.apply(null, arr),
        avg = arr.reduce((sum, el) => sum + el) / arr.length;
    return `Highest Value: ${max}
    Lowest Value: ${min}
    Average of All Values: ${avg}`;
}   

// Examples
findArrayProperties([1,2,3,4,5]);
/*
Highest Value: 5
Lowest Value: 1
Average of All Values: 3
*/


findArrayProperties([-18, 12, 6837, 0, 3, 10]);
/*
Highest Value: 6837
Lowest Value: -18
Average of All Values: 1140.6666666666667
*/