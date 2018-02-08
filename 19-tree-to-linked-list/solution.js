'use strict';
const Tree = require('./lib/tree');
const SLL = require('./lib/sll');

// tree should be an instance of our Tree constructor
// Traverses tree using breadthFirst method (O(n)), sorts array using Array.sort method (O log n), then traverses array to insert into list (O(n)).
exports.treeToList = tree => {
    if (tree instanceof Tree === false) return 'Not an instance of Tree.';
    let arr = [], list = new SLL();
    tree.breadthFirst(node => arr.push(node.value));
    arr.sort((a, b) => a - b).forEach(val => list.insertEnd(val));
    return list;
};

