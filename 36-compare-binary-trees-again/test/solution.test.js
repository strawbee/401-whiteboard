'use strict';

const BST = require('../lib/bst');
const solution = require('../solution');
require('jest');

describe('#Compare', () => {
  let tree1 = new BST();
  let tree2 = new BST();

  it('should take in two BST arguments', () => {
    expect(solution.compare(1, 2)).toBe('Arguments must be BSTs.');
    expect(solution.compare([], {})).toBe('Arguments must be BSTs.');
    expect(solution.compare(tree1, 'str')).toBe('Arguments must be BSTs.');
    expect(solution.compare(tree1)).toBe('Arguments must be BSTs.');
    expect(solution.compare()).toBe('Arguments must be BSTs.');
    expect(solution.compare(tree1, tree2)).not.toBe('Arguments must be BSTs.');
  });

  it('should return a boolean', () => {
    expect(typeof solution.compare(tree1, tree2)).toBe('boolean');
  });



  it('should return the correct output for empty BSTs or BSTs with only a root', () => {
    expect(solution.compare(tree1, tree2)).toBe(true);

    tree1.insert(10);

    expect(solution.compare(tree1, tree2)).toBe(false);

    tree2.insert(10);

    expect(solution.compare(tree1, tree2)).toBe(true);        
  });

  it('should return the correct output', () => {
    tree1.insert(4);
    tree1.insert(16);
    tree1.insert(11);
    tree1.insert(12);
    tree1.insert(8);

    tree2.insert(4);
    tree2.insert(16);
    tree2.insert(11);
    tree2.insert(12);

    expect(solution.compare(tree1, tree2)).toBe(false);

    tree2.insert(13);
        
    expect(solution.compare(tree1, tree2)).toBe(true);
  });
});