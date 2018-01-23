'use strict';

require('jest');
const solution = require('../solution');

describe('isCircular Function', () => {
    it('should return null if argument is not an object', () => {
        expect(solution.isCircular([])).toBeNull();
        expect(solution.isCircular(1234)).toBeNull();
        expect(solution.isCircular('string')).toBeNull();
        expect(solution.isCircular(true)).toBeNull();
        expect(solution.isCircular(null)).toBeNull();
        expect(solution.isCircular()).toBeNull();
    });

    it('should return null if any node in the list does not have a value key and a next key', () => {
        expect(solution.isCircular({})).toBeNull();
        expect(solution.isCircular({a: 1})).toBeNull();
        expect(solution.isCircular({value: 1, rest: 2})).toBeNull();
        expect(solution.isCircular({value: 1, next: {value: 2, next: null}})).not.toBeNull();
    });

    it('should return false if a list is not circular', () => {
        let list = { value: 1, next: { value: 2, next: { value: 3, next: null }}};
        expect(solution.isCircular(list)).toBe(false);
    });

    it('should return true if a list is circular', () => {
        let list = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
        list.next.next.next = list;

        expect(solution.isCircular(list)).toBe(true);
    });
});