'use strict';

const Node = require('./nd');
const Stack = require('./stack');

module.exports = class {
    constructor(maxSize = 1048) {
        this.stack = new Stack(maxSize);
    }

    // Like Array.prototype.push()
    enqueue(val) {
        return this.stack.push(val);
    }

    // Like Array.prototype.shift()
    dequeue() {
        let tempStack = new Stack();
        for (let i = 0; i < this.stack.size - 1; i++)
            tempStack.push(this.stack.pop());
        let temp = this.stack.pop();
        for (let i = 0; i < tempStack.size; i++)
            this.stack.push(tempStack.pop());
        return temp;
    }
};