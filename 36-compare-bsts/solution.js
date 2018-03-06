'use strict';

const BST = require('./lib/bst');

exports.compare = (tree1, tree2) => {
    if (!(tree1 instanceof BST) || !(tree2 instanceof BST)) return 'Arguments must be BSTs.';
    const _traverse = (node, str) => {
        if (node.left) {
            str += '0';
            _traverse(node.left);
        }
        str += '1';
        if (node.right) {
            str += '2';
            _traverse(node.right);
        }
    }
    let one = '', two = '';
    if (tree1.root) _traverse(tree1.root, one);
    if (tree2.root) _traverse(tree2.root, two);
    console.log(one, two);
    return one === two;
};