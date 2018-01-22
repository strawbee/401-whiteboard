'use strict';

require('jest');
const solution = require('../lib/solution');

describe('Loop Function', () => {
    it('should return null if n is less than 1', () => {
        expect(solution.loop(0, () => {})).toBeNull();
        expect(solution.loop(-1, () => {})).toBeNull();
        expect(solution.loop(1, () => {})).not.toBeNull();
    });

    it('should return null if n is not an integer', () => {
        expect(solution.loop(1.5, () => {})).toBeNull();
        expect(solution.loop(3.99, () => {})).toBeNull();
        expect(solution.loop(5, () => {})).not.toBeNull();
    });

    it('should return null if cb is not a function', () => {
        expect(solution.loop(2, 'string')).toBeNull();
        expect(solution.loop(1, [1, 2])).toBeNull();
        expect(solution.loop(3, true)).toBeNull();
        expect(solution.loop(3, {a: 1})).toBeNull();
        expect(solution.loop(3, () => {})).not.toBeNull();
    });

    it('should run the callback n number of times', () => {
        function callback() {
            cbCount++;
        }

        let cbCount = 0;
        solution.loop(3, callback);
        expect(cbCount).toBe(3);

        cbCount = 0;
        solution.loop(12, callback);
        expect(cbCount).toBe(12);

        cbCount = 0;
        solution.loop(-2, callback);
        expect(cbCount).toBe(0);
    });
});