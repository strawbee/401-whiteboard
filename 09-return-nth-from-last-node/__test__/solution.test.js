'use strict';

require('jest');
const solution = require('../solution');

describe('nthFromEnd Function', () => {
    let list = {value: 1, next: {
        value: 2, next: {
            value: 3, next: {
                value: 4, next: {
                    value: 5, next: {
                        value: 6, next: null,
                    },
                },
            },
        },
    }};

    it('should take in a list object for the first argument', () => {
        expect(solution.nthFromEnd([1, 2, 3], 2)).toBeNull();
        expect(solution.nthFromEnd(3, 2)).toBeNull();
        expect(solution.nthFromEnd(true, 2)).toBeNull();
        expect(solution.nthFromEnd(null, 2)).toBeNull();
        expect(solution.nthFromEnd('str', 2)).toBeNull();
    });

    it('should take in an integer 0 or greater, but not longer than the length of the list minus 1, for the second argument', () => {
        expect(solution.nthFromEnd(list, -1)).toBeNull();
        expect(solution.nthFromEnd(list, 7)).toBeNull();
        expect(solution.nthFromEnd(list)).toBeNull();
        expect(solution.nthFromEnd(list, 4)).not.toBeNull();
        expect(solution.nthFromEnd(list, 0)).not.toBeNull();
    });

    it('should ensure the list argument has a value key and an next key', () => {
        expect(solution.nthFromEnd({value: 1, next: {value: 2, rest: null}}, 0)).toBeNull();
        expect(solution.nthFromEnd({key: 1, next: null}, 0)).toBeNull();
    });

    it('should return the correct node', () => {
        expect(solution.nthFromEnd(list, 3)).toMatchObject(list.next.next);
        expect(solution.nthFromEnd(list, 0)).toMatchObject(list.next.next.next.next.next);
        expect(solution.nthFromEnd(list, 5)).toMatchObject(list);
    });
});