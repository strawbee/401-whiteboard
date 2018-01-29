'use strict';

require('jest');
const solution = require('../solution');

describe('calculateMissing Function', () => {
    it('should take in an array argument', () => {
        expect(solution.calculateMissing(1)).toBe('Invalid argument.');
        expect(solution.calculateMissing(true)).toBe('Invalid argument.');
        expect(solution.calculateMissing({ a: 1 })).toBe('Invalid argument.');
        expect(solution.calculateMissing('str')).toBe('Invalid argument.');
        expect(solution.calculateMissing()).toBe('Invalid argument.');
        expect(solution.calculateMissing([''])).not.toBe('Invalid argument.');
    });

    it('should ensure the length of the array is 99', () => {
        let arr = [...Array(88)].map((e, i) => (Math.ceil(Math.random() * i)));
        expect(solution.calculateMissing(arr)).toBe('Array must contain 99 numbers.');

        let arr2 = [...Array(99)].map((e, i) => (Math.ceil(Math.random() * i)));
        expect(solution.calculateMissing(arr2)).not.toBe('Array must contain 99 numbers.');
    });

    it('should take in an array of numbers between 1-100', () => {
        let arr = [...Array(98)];
        arr.push(300);
        expect(solution.calculateMissing(arr)).toBe('Array must contain numbers between 1 and 100.');    
    });

    it('should return the correct output', () => {
        let arr = [...Array(100)].map((e, i) => i + 1);
        arr.splice(5, 1);

        expect(solution.calculateMissing(arr)).toBe(6); 
    });  
});