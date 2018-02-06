'use strict';
const Tree = require('./lib/tree');

// tree should be an instance of our Tree constructor
// O(n) as it traverses the tree once using the breadthFirst method.
exports.sumValues = tree => {
    if (tree instanceof Tree === false) return 'Not an instance of Tree.';
    let sum = 0;
    tree.breadthFirst(node => sum += node.value);
    return isNaN(sum) ? 'Cannot sum non-numeric values.' : sum;
};