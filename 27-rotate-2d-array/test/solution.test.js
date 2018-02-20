'use strict';

require('jest');
const solution = require('../solution');

describe('#rotate', () => {
    it('should take in an array an argument', () => {
        expect(solution.rotate(1)).toBe('Argument must be array.');
        expect(solution.rotate(true)).toBe('Argument must be array.');
        expect(solution.rotate({ a: 1 })).toBe('Argument must be array.');
        expect(solution.rotate('str')).toBe('Argument must be array.');
        expect(solution.rotate()).toBe('Argument must be array.');
        expect(solution.rotate([''])).not.toBe('Argument must be array.');
    });

    it('should ensure that if the array is not empty, all elements are arrays', () => {
        expect(solution.rotate([[], 1])).toBe('Elements must be array.');
        expect(solution.rotate([true])).toBe('Elements must be array.');
        expect(solution.rotate([{ a: 1 }])).toBe('Elements must be array.');
        expect(solution.rotate(['str'])).toBe('Elements must be array.');
        expect(solution.rotate([['']])).not.toBe('Elements must be array.');
    });

    it('should ensure that if the sub-arrays are not empty, all elements are numbers', () => {
        expect(solution.rotate([['str']])).toBe('Sub-elements must be numbers.');
        expect(solution.rotate([[{ a: 1 }]])).toBe('Sub-elements must be numbers.');
        expect(solution.rotate([[[1]]])).not.toBe('Sub-elements must be numbers.');
    });

    it('should rotate the array correctly, even if the array is not a square or if the sub-arrays have unequal lengths', () => {
        let square = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]];

        let rotatedSquare = [
            [7, 4, 1],
            [8, 5, 2],
            [9, 6, 3]];

        let rect = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [10, 11, 12]];

        let rotatedRect = [
            [10, 7, 4, 1],
            [11, 8, 5, 2],
            [12, 9, 6, 3]];

        let uneven = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8]];

        let rotatedUneven = [
            [7, 4, 1],
            [8, 5, 2],
            [null, 6, 3]];

        expect(solution.rotate(square)).toMatchObject(rotatedSquare);
        expect(solution.rotate(rect)).toMatchObject(rotatedRect);
        expect(solution.rotate(uneven)).toMatchObject(rotatedUneven);
    });
});