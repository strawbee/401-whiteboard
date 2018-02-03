'use strict';

// O(n) - recursively traverses through all nodes in tree once
exports.returnLeaves = root => {
    if (!root || typeof root !== 'object' || Array.isArray(root)) return 'Invalid argument.';
    let arr = [], hasProps = true;

    const hasChildren = node => {
        if (!node.hasOwnProperty('value') || !node.hasOwnProperty('children')) hasProps = false;
        if (!node.children[0]) arr.push(node);
        for (let i in node.children) hasChildren(node.children[i]);
        return hasProps ? arr : 'Invalid node properties.';
    }

    return hasChildren(root);
}