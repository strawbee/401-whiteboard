'use strict';

const BST = require('./lib/bst');

exports.compare = (tree1, tree2) => {
  if (!(tree1 instanceof BST) || !(tree2 instanceof BST)) return 'Arguments must be BSTs.';
  if (!tree1.root && !tree2.root) return true;
  if (!tree1.root || !tree2.root) return false;
  let stack1 = [tree1.root], stack2 = [tree2.root], str1 = '', str2 = '';
  while (stack1.length || stack2.length) {
    if (str1 !== str2) return false;
    let node1 = stack1.pop(), node2 = stack2.pop();
    if (node1.left) {
      stack1.push(node1.left);
      str1 += 'l';
    }
    if (node1.right) {
      stack1.push(node1.right);
      str1 += 'r';
    }
    if (node2.left) {
      stack2.push(node2.left);
      str2 += 'l';
    }
    if (node2.right) {
      stack2.push(node2.right);
      str2 += 'r';
    }
  }
  return true;
};