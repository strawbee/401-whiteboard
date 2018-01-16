'use strict';

const solution = require('./solution');

describe('twoHighest', () => {
    it('should take in an array of numeric values and return the highest and second highest values', () => {
        expect(solution.twoHighest([1, 2, 3, 4])).toBe('4, 3');
        expect(solution.twoHighest([4.03, 3.4, 4.2, 4])).toBe('4.2, 4.03');
        expect(solution.twoHighest([0, 'cat', 3])).toBe('3, 0');
        expect(solution.twoHighest([-0.9, -99, -1.3, 1])).toBe('1, -0.9');
        expect(solution.twoHighest([])).toBeNull();
    });
})