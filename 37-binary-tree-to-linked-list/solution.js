'use strict';
let BinaryTree = require('./lib/bst');
let SLL = require('./lib/sll');

// O(n) - traverses binary tree once and then array once to insert into linked list
exports.convert = bst => {
  if (!(bst instanceof BinaryTree)) return 'Argument must be instance of BinaryTree';
  let sll = new SLL(), arr = [];
  if (bst.root) {
    bst.inOrderTraversal(bst.root, nd => arr.push(nd.value));
    arr.sort((a, b) => a - b).forEach(val => sll.insertTail(val));
  }
  return sll;
};

