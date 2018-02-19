'use strict';

require('jest');
const solution = require('../solution');

describe('#utils methods', () => {
    let arr = [1, 2, 3];

    describe('#map', () => {
        let cb = el => el * 10;

        it('should take in an array as the first argument', () => {
            expect(solution.map(1, cb)).toBe('Invalid argument.');
            expect(solution.map(true, cb)).toBe('Invalid argument.');
            expect(solution.map({ a: 1 }, cb)).toBe('Invalid argument.');
            expect(solution.map('str', cb)).toBe('Invalid argument.');
            expect(solution.map()).toBe('Invalid argument.');
            expect(solution.map([''], cb)).not.toBe('Invalid argument.');
        });

        it('should take in a callback function as the second argument', () => {
            expect(solution.map(arr, 1)).toBe('Invalid argument.');
            expect(solution.map(arr, true)).toBe('Invalid argument.');
            expect(solution.map(arr, { a: 1 })).toBe('Invalid argument.');
            expect(solution.map(arr, 'str')).toBe('Invalid argument.');
            expect(solution.map()).toBe('Invalid argument.');
            expect(solution.map(arr, [''])).toBe('Invalid argument.');
            expect(solution.map(arr, cb)).not.toBe('Invalid argument.');
        });

        it('should return an array', () => {
            expect(Array.isArray(solution.map(arr, cb))).toBe(true);
        });

        it('should return the correct output', () => {
            expect(solution.map(arr, cb)).toMatchObject([10, 20, 30]);
        });
    });
    
    describe('#filter', () => {
        let cb = el => el % 2;

        it('should take in an array as the first argument', () => {
            expect(solution.filter(1, cb)).toBe('Invalid argument.');
            expect(solution.filter(true, cb)).toBe('Invalid argument.');
            expect(solution.filter({ a: 1 }, cb)).toBe('Invalid argument.');
            expect(solution.filter('str', cb)).toBe('Invalid argument.');
            expect(solution.filter()).toBe('Invalid argument.');
            expect(solution.filter([''], cb)).not.toBe('Invalid argument.');
        });

        it('should take in a callback function as the second argument', () => {
            expect(solution.filter(arr, 1)).toBe('Invalid argument.');
            expect(solution.filter(arr, true)).toBe('Invalid argument.');
            expect(solution.filter(arr, { a: 1 })).toBe('Invalid argument.');
            expect(solution.filter(arr, 'str')).toBe('Invalid argument.');
            expect(solution.filter()).toBe('Invalid argument.');
            expect(solution.filter(arr, [''])).toBe('Invalid argument.');
            expect(solution.filter(arr, cb)).not.toBe('Invalid argument.');
        });

        it('should return an array', () => {
            expect(Array.isArray(solution.filter(arr, cb))).toBe(true);
        });

        it('should return the correct output', () => {
            expect(solution.filter(arr, cb)).toMatchObject([1, 3]);
        });
    });

    describe('#reduce', () => {
        let cb = (acc, el) => acc + el;
        let arr2 = ['a', 'b', 'c'];

        it('should take in an array as the first argument', () => {
            expect(solution.reduce(1, cb)).toBe('Invalid argument.');
            expect(solution.reduce(true, cb)).toBe('Invalid argument.');
            expect(solution.reduce({ a: 1 }, cb)).toBe('Invalid argument.');
            expect(solution.reduce('str', cb)).toBe('Invalid argument.');
            expect(solution.reduce()).toBe('Invalid argument.');
            expect(solution.reduce([''], cb)).not.toBe('Invalid argument.');
        });

        it('should take in a callback function as the second argument', () => {
            expect(solution.reduce(arr, 1)).toBe('Invalid argument.');
            expect(solution.reduce(arr, true)).toBe('Invalid argument.');
            expect(solution.reduce(arr, { a: 1 })).toBe('Invalid argument.');
            expect(solution.reduce(arr, 'str')).toBe('Invalid argument.');
            expect(solution.reduce()).toBe('Invalid argument.');
            expect(solution.reduce(arr, [''])).toBe('Invalid argument.');
            expect(solution.reduce(arr, cb)).not.toBe('Invalid argument.');
        });

        it('should return the correct output', () => {
            expect(solution.reduce(arr, cb)).toBe(6);
            expect(solution.reduce(arr2, cb)).toBe('abc');
            expect(solution.reduce(arr, cb, 3)).toBe(9);
            expect(solution.reduce(arr2, cb, '123')).toBe('123abc');
        });
    });
});