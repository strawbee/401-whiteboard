'use strict';

const Node = require('./nd');

module.exports = class {
    constructor(maxSize = 1048) {
        this.top = null;
        this.maxSize = maxSize;
        this.size = 0;
    }

    // O(1) as it inserts the new node directly without iterating through the list 
    push(val) {
        if (this.size === this.maxSize) throw new Error('Stack overflow!');
        let node = new Node(val);
        node.next = this.top;
        this.top = node;
        this.size++;
        return this.top;
    }

    // O(1) as it only modifies the next node in the list and does not iterate through the whole list.
    pop() {
        if (!this.size) throw new Error('Nothing to pop!');
        let temp = this.top;
        this.top = temp.next;
        temp.next = null;
        this.size--;
        return temp;
    }

    // O(1) as we keep track of the top node so can access it directly
    peek() {
        if (!this.size) throw new Error('Nothing to peek at!');
        return this.top;
    }
};