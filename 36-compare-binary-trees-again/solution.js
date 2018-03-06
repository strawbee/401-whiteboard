'use strict';

const BST = require('./lib/bst');

exports.compare = (tree1, tree2) => {
  if (!(tree1 instanceof BST) || !(tree2 instanceof BST)) return 'Arguments must be BSTs.';
  if (!tree1.root && !tree2.root) return true;
  if (!tree1.root || !tree2.root) return false;
  let q1 = [tree1.root], q2 = [tree2.root], str1 = '', str2 = '';
  while (q1.length || q2.length) {
    if (str1 !== str2) return false;
    let node1 = q1.shift(), node2 = q2.shift();
    if (node1.left) {
      q1.push(node1.left);
      str1 += 'l';
    }
    if (node1.right) {
      q1.push(node1.right);
      str1 += 'r';
    }
    if (node2.left) {
      q2.push(node2.left);
      str2 += 'l';
    }
    if (node2.right) {
      q2.push(node2.right);
      str2 += 'r';
    }
  }
  return true;
};