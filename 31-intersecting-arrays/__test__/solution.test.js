'use strict';

require('jest');
const solution = require('../solution');

describe('#Intersect', () => {
    it('should take in two arguments', () => {
        expect(solution.intersect([1])).toBeNull();
        expect(solution.intersect()).toBeNull();
    });

    it('should only take in array arguments', () => {
        expect(solution.intersect('str', [1])).toBeNull();
        expect(solution.intersect([1], { a: 1 })).toBeNull();
    });

    it('should return an array of shared elements, if any', () => {
        expect(solution.intersect([1, 2, 3, 4, 5], [1, 3, 5, 7])).toEqual([1, 3, 5]);
        expect(solution.intersect(['cat', 'dog', 4], [12, 'mouse', 'cat', 3])).toEqual(['cat']);
        expect(solution.intersect([2, 4], [1, 3])).toEqual([]);
    });

    it('should return correct output with floating point integers', () => {
        expect(solution.intersect([1.5555, 2, 3.0001, 4, 5.012], [1.5555, 3, 5.012, 7])).toEqual([1.5555, 5.012]);
    });
});