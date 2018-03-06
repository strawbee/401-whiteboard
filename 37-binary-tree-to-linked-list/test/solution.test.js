'use strict';
let BinaryTree = require('../lib/bst');
let SLL = require('../lib/sll');
let solution = require ('../solution');
require('jest');

describe('#Convert', () => {
  let tree = new BinaryTree();
  tree.insert(4);
  tree.insert(2);
  tree.insert(6);
  tree.insert(1);
  tree.insert(11);

  it('should take in a BinaryTree argument', () => {
    expect(solution.convert('str')).toBe('Argument must be instance of BinaryTree');
    expect(solution.convert('{}')).toBe('Argument must be instance of BinaryTree');
    expect(solution.convert(tree)).not.toBe('Argument must be instance of BinaryTree');
  });

  it('should return a linked list', () => {
    expect(solution.convert(tree) instanceof SLL).toBe(true);
  });

  it('should convert an empty binary tree into an empty linked list', () => {
    let emptyTree = new BinaryTree();
    let emptyList = new SLL();
    expect(solution.convert(emptyTree)).toMatchObject(emptyList);
  });

  it('should return a sorted linked list', () => {
    let list = solution.convert(tree);

    expect(list.head.value).toBe(1);
    expect(list.head.next.value).toBe(2);
    expect(list.head.next.next.value).toBe(4);
    expect(list.head.next.next.next.value).toBe(6);
    expect(list.head.next.next.next.next.value).toBe(11);
    expect(list.head.next.next.next.next.next).toBe(null);
  });
});





