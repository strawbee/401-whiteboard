'use strict';

require('jest');
const solution = require('../solution');
const sll = require('../lib/sll');

describe('Intersect Function', () => {
    let list1 = new sll();
    list1.insertTail(1);
    list1.insertTail(2);
    list1.insertTail(3);
    list1.insertTail(4);
    list1.insertTail(5);
    list1.insertTail(6);
    list1.insertTail(7);

    let list2 = new sll();
    list2.insertTail(1);
    list2.insertTail(3);
    list2.insertTail(5);
    list2.insertTail(7);
    list2.insertTail(9);

    it('should take in two objects', () => {
        expect(solution.intersect(list1.head, 'str')).toBeNull();
        expect(solution.intersect(list1.head)).toBeNull();
        expect(solution.intersect([1, 2, 3], [1, 2])).toBeNull();
        expect(solution.intersect(null, null)).toBeNull();
    });

    it('should ensure that each node in each list has the correct keys', () => {
        expect(solution.intersect({value: 1, rest: null}, {value: 1, next: null})).toBeNull();
        expect(solution.intersect({value: 1, next: {value: 2, rest: null}}, { value: 1, next: null })).toBeNull();
        expect(solution.intersect({value: 1, next: null }, {value: 1, next: {key: 2, next: null}})).toBeNull();
    });

    it('should return an object', () => {
        expect(typeof solution.intersect(list1.head, list2.head)).toBe('object');
        expect(Array.isArray(solution.intersect(list1.head, list2.head))).toBe(false);
        expect(solution.intersect(list1.head, list2.head)).not.toBeNull();
    });

    it('should ensure each node in the returned object should have the correct keys', () => {
        let newList = solution.intersect(list1.head, list2.head);
        let current = newList.head;
        while (current) {
            expect(current.value).not.toBeUndefined();
            expect(current.next).not.toBeUndefined();
            current = current.next;
        }
    });

    it('should ensure returned values are intersected values', () => {
        let newList = solution.intersect(list1.head, list2.head);
        let current = newList.head;
        expect(current.value).toBe(1);
        expect(current.next.value).toBe(3);
        expect(current.next.next.value).toBe(5);
        expect(current.next.next.next.value).toBe(7);
        expect(current.next.next.next.next).toBeNull();
    });
});