'use strict';

require('jest');
const Tree = require('../lib/tree');
const solution = require('../solution');

describe('#sumValues function', () => {
    it('should return an error message if the argument is not an instance of the Tree constructor', () => {
        let tree = new Tree();
        tree.insert(1);
        expect(solution.sumValues(tree)).not.toBe('Not an instance of Tree.');

        let tree2 = Object.assign({}, tree);
        expect(solution.sumValues(tree2)).toBe('Not an instance of Tree.');
    });

    it('should return an error message if a node has a non-numeric value', () => {
        let tree = new Tree();
        tree.insert(1);
        tree.insert('abc', 1);
        expect(solution.sumValues(tree)).toBe('Cannot sum non-numeric values.');
    });

    it('should return accurate sum of the values of all nodes in the tree', () => {
        let tree = new Tree();
        tree.insert(1);
        tree.insert(2, 1);
        tree.insert(3, 1);
        tree.insert(4, 3);
        tree.insert(5, 3);
        tree.insert(6, 5);

        expect(solution.sumValues(tree)).toBe(21);
    });
});