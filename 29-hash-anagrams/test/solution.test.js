'use strict';

require('jest');
const solution = require('../solution');

describe('#sortAnagrams', () => {
    it('should take in an string an argument', () => {
        expect(solution.sortAnagrams(1)).toBe('Invalid argument.');
        expect(solution.sortAnagrams(true)).toBe('Invalid argument.');
        expect(solution.sortAnagrams({ a: 1 })).toBe('Invalid argument.');
        expect(solution.sortAnagrams()).toBe('Invalid argument.');
        expect(solution.sortAnagrams('str')).not.toBe('Invalid argument.');
    });

    it('should take output an object', () => {
        expect(typeof solution.sortAnagrams('str')).toBe('object');
    });

    it('should return an error if taking in an empty string') {
        expect(solution.sortAnagrams([''])).toBe('Invalid argument.');
    }

    it('should have the correct output', () => {
        let str = 'acre race care act cat tac';
        let result = {
            'acer': ['acre', 'race', 'care'], 
            'act': ['act', 'cat', 'tac']
        };

        expect(solution.sortAnagrams(str)).toMatchObject(result);
    });
});