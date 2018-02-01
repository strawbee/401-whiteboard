'use strict';

require('jest');
let solution = require('../solution');

describe('#Dedupe Function', () => {
    it('should take in an object', () => {
        expect(solution.dedupe('str')).toBeNull();
        expect(solution.dedupe([1, 2])).toBeNull();
        expect(solution.dedupe(null)).toBeNull();
        expect(solution.dedupe()).toBeNull();
        expect(solution.dedupe(1)).toBeNull();
        expect(solution.dedupe(true)).toBeNull();
    });

    it('should return null for an empty object', () => {
        expect(solution.dedupe({})).toBeNull();
    });

    it('should ensure all nodes of the list argument have a value key and a next key', () => {
        expect(solution.dedupe({val: 1, next: null})).toBeNull();
        expect(solution.dedupe({value: 1, next: {value: 1, rest: null}})).toBeNull();

    });

    it('should work with a list argument with a single node', () => {
        expect(solution.dedupe({value: 1, next: null})).not.toBeNull();
        expect(solution.dedupe({value: 1, next: null})).toMatchObject({value: 1, next: null});
    });

    it('should return a list', () => {
        expect(typeof solution.dedupe({value: 1, next: null})).toBe('object');
        expect(Array.isArray(solution.dedupe({value: 1, next: null}))).toBeFalsy();
        expect(solution.dedupe({value: 1, next: null})).not.toBeNull();
        expect(solution.dedupe({value: 1, next: null})).toHaveProperty('value');
        expect(solution.dedupe({value: 1, next: null})).toHaveProperty('next');
    });

    it('should remove all consecutive duplicate values from the list', () => {
        let list = {value: 1, next: {value: 2, next: {value: 2, next: {value: 3, next: {value: 3, next: null}}}}};
        let listNoDupes = {value: 1, next: {value: 2, next: {value: 3, next: null}}};

        expect(solution.dedupe(list)).toMatchObject(listNoDupes);
    });
});