'use strict';

require('jest');
const Tree = require('../lib/tree');
const SLL = require('../lib/sll');
const solution = require('../solution');

describe('#treeToList function', () => {
    it('should return an error message if the argument is not an instance of the Tree constructor', () => {
        let tree = new Tree();
        tree.insert(1);
        expect(solution.treeToList(tree)).not.toBe('Not an instance of Tree.');

        let tree2 = Object.assign({}, tree);
        expect(solution.treeToList(tree2)).toBe('Not an instance of Tree.');
    });

    it('should output a linked list', () => {
        let tree = new Tree();
        tree.insert(1);
        expect(solution.treeToList(tree) instanceof SLL).toBe(true);
    });

    it('should output a sorted linked list', () => {
        let tree = new Tree();
        tree.insert(1);
        tree.insert(4, 1);
        tree.insert(2, 4);
        tree.insert(5, 1);
        tree.insert(3, 5);

        expect(solution.treeToList(tree).head.value).toBe(1);
        expect(solution.treeToList(tree).tail.value).toBe(5);
        expect(solution.treeToList(tree).head.next.value).toBe(2);
        expect(solution.treeToList(tree).head.next.next.value).toBe(3);
        expect(solution.treeToList(tree).head.next.next.next.value).toBe(4);
        expect(solution.treeToList(tree).head.next.next.next.next.value).toBe(5);
    });
});