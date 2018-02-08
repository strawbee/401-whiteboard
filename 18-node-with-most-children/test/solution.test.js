'use strict';

require('jest');
const Tree = require('../lib/tree');
const solution = require('../solution');

describe('#maxChildren function', () => {
    it('should return an error message if the argument is not an instance of the Tree constructor', () => {
        let tree = new Tree();
        tree.insert(1);
        expect(solution.maxChildren(tree)).not.toBe('Not an instance of Tree.');

        let tree2 = Object.assign({}, tree);
        expect(solution.maxChildren(tree2)).toBe('Not an instance of Tree.');
    });

    it('should return an error message if the tree only has a root node', () => {
        let tree = new Tree();
        tree.insert(1);
        expect(solution.maxChildren(tree)).toBe('No nodes have children.');
    });

    it('should return the first node with the most children in the tree', () => {
        let tree = new Tree();
        tree.insert(1);
        tree.insert(2, 1);
        tree.insert(3, 1);
        tree.insert(4, 3);
        tree.insert(5, 3);
        tree.insert(6, 5);
        // 1 has 2 children. 3 has 2 children. 5 has one child.

        expect(solution.maxChildren(tree).value).toBe(1);

        tree.insert(7, 3); // now 3 has more children than 1.
        
        expect(solution.maxChildren(tree).value).toBe(3);
    });
});