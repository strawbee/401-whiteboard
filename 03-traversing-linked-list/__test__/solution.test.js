'use strict';

require('jest');
const solution = require('../solution');

describe('traverse', () => {
    it('should take in a linked list and console.log each value in the list', () => {
        expect(solution.traverse({ value: 4, next: { value: 3, next: { value: 2, next: { value: 1, next: null } } } })).not.toBeNull();
        expect(solution.traverse({ value: 4, next: null })).not.toBeNull();
        expect(solution.traverse({ value: 3, next: { value: 12, next: null } })).not.toBeNull();
        expect(solution.traverse({ number: 4, rest: { number: 2, rest: null } })).toBeNull();
        expect(solution.traverse('str')).toBeNull();
    });
});