'use strict';

require('jest');
const solution = require('../solution');
const Tree = require('../lib/tree');

describe('#returnLeaves function', () => {
    it('should take in an object', () => {
        expect(solution.returnLeaves()).toBe('Invalid argument.');
        expect(solution.returnLeaves(null)).toBe('Invalid argument.');
        expect(solution.returnLeaves('str')).toBe('Invalid argument.');
        expect(solution.returnLeaves(123)).toBe('Invalid argument.');
        expect(solution.returnLeaves([1])).toBe('Invalid argument.');
        expect(solution.returnLeaves(true)).toBe('Invalid argument.');
    });

    it('should ensure each node has a value key and a children key', () => {
        let tree = new Tree();
        tree.insert(1);
        tree.insert(2, 1);
        
        expect(solution.returnLeaves(tree.root)).not.toBeNull();

        let tree2 = Object.assign({}, tree)
        delete tree2.root.children[0].value;
        console.log(tree2.root.children[0]);

        expect(solution.returnLeaves(tree2.root)).toBe('Invalid node properties.');
    });

    it('should return an array with the correct leaf nodes', () => {
        let tree = new Tree();
        tree.insert(1);
        tree.insert(2, 1);
        tree.insert(3, 1);
        let arr = [];
        arr.push(tree.root.children[0]);
        arr.push(tree.root.children[1]);

        expect(Array.isArray(solution.returnLeaves(tree.root))).toBeTruthy();
        expect(solution.returnLeaves(tree.root).length).toBe(2);
        expect(solution.returnLeaves(tree.root)).toMatchObject(arr);

        tree.remove(3);
        arr.pop();

        expect(solution.returnLeaves(tree.root)).toMatchObject(arr);

        tree.remove(1);
        
        expect(solution.returnLeaves(tree.root)).toBe('Invalid argument.');
    });
});