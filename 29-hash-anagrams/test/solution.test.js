'use strict';

require('jest');
const solution = require('../solution');

describe('#sortAnagrams', () => {
    it('should take in an array an argument', () => {
        expect(solution.sortAnagrams(1)).toBe('Invalid argument.');
        expect(solution.sortAnagrams(true)).toBe('Invalid argument.');
        expect(solution.sortAnagrams({ a: 1 })).toBe('Invalid argument.');
        expect(solution.sortAnagrams()).toBe('Invalid argument.');
        expect(solution.sortAnagrams(['arr'])).not.toBe('Invalid argument.');
    });

    it('should take output an array', () => {
        expect(Array.isArray(solution.sortAnagrams(['arr']))).toBe(true);
    });

    it('should return an error if taking in an empty array', () => {
        expect(solution.sortAnagrams([''])).toBe('Invalid argument.');
    });

    it('should have the correct output', () => {
        let arr = ['acre', 'act', 'race', 'cat', 'tac', 'care'];
        let result = ['acre', 'care', 'race', 'act', 'cat', 'tac'];

        expect(solution.sortAnagrams(arr)).toMatchObject(result);
    });
});