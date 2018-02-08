'use strict';
const Tree = require('./lib/tree');

// tree should be an instance of our Tree constructor
// O(n) as it traverses the tree once using the breadthFirst method.
exports.maxChildren = tree => {
    if (tree instanceof Tree === false) return 'Not an instance of Tree.';
    let num = 0, result = 'No nodes have children.';
    tree.breadthFirst(node => {
        if (node.children.length > num) {
            num = node.children.length;
            result = node;
        }
    });
    return result;;
};