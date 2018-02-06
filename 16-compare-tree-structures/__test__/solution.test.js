'use strict';

require('jest');
let solution = require('../solution');
let Tree = require('../lib/tree');

describe('#compareStructure function', () => {
    it('should take in two arguments that are each objects (arrays are okay too)', () => {
        expect(solution.compareStructure('str', {'a': 1})).toBe('Invalid argument.');
        expect(solution.compareStructure({'a': 1})).toBe('Invalid argument.');
        expect(solution.compareStructure()).toBe('Invalid argument.');
    });

    it('should compare the structure of the two objects and return true if the structures are the same', () => {
        let tree = new Tree();
        tree.insert(1);
        tree.insert(2, 1);
        tree.insert(3, 1);

        let tree2 = new Tree();
        tree2.insert(1);
        tree2.insert(2, 1);
        tree2.insert(3, 1)

        expect(solution.compareStructure(tree, tree2)).toBe(true);
    });

    it('should return true for the same structure regardless of value', () => {
        let tree = new Tree();
        tree.insert(1);
        tree.insert(4, 1);
        tree.insert(6, 1);
        tree.insert(3, 6);

        let tree2 = new Tree();
        tree2.insert(1);
        tree2.insert(12, 1);
        tree2.insert(9, 1)
        tree2.insert(2, 9)

        expect(solution.compareStructure(tree, tree2)).toBe(true);
    });

    it('should return false if the structure is not the same', () => {
        let tree = new Tree();
        tree.insert(1);
        tree.insert(4, 1);
        tree.insert(6, 1);

        let tree2 = new Tree();
        tree2.insert(1);
        tree2.insert(12, 1);
        tree2.insert(9, 1)
        tree2.insert(2, 9)

        expect(solution.compareStructure(tree, tree2)).toBe(false);
    });
});