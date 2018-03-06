'use strict';

const BST = require('./lib/bst');

exports.compare = (tree1, tree2) => {
    if (!(tree1 instanceof BST) || !(tree2 instanceof BST)) return 'Arguments must be BSTs.';
    if (!tree1.root && !tree2.root) return true;
    if (!tree1.root || !tree2.root) return false;
    let q1 = [tree1.root], q2 = [tree2.root];
    while (q1.length || q2.length) {
        if (q1.length !== q2.length) return false;
        let node1 = q1.shift(), node2 = q2.shift();
        if (node1.left) q1.push(node1.left);
        if (node1.right) q1.push(node1.right);
        if (node2.left) q2.push(node2.left);
        if (node2.right) q2.push(node2.right);
    }
    return true;
};