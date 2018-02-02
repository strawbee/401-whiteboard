'use strict';

const returnLeaves = root => {
    let arr = [];

    const hasChildren = node => {
        if (!node.children[0]) {
            arr.push(node);
            return;
        }
        for (i in node.children) return hasChildren(node.children[i]);
        return arr;
    }

    return hasChildren(root);
}