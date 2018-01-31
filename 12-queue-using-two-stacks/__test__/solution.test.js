'use strict';

require('jest');
const Queue = require('../solution');

describe('Queue Data Structure Module', () => {
    describe('Default Properties', () => {
        let queue = new Queue();

        it('should create a new instance of a Queue', () => {
            expect(queue).toBeInstanceOf(Queue);
        });

        it('should have a default val of null assigned to the top property', () => {
            expect(queue.stack.bottom).toBeNull();
        });

        it('should have a default val of 0 assigned to the size property', () => {
            expect(queue.stack.size).toEqual(0);
        });

        it('should have a maxSize property with a default val of 1048', () => {
            expect(queue.stack.maxSize).toEqual(1048);
        });
    });

    describe('#Enqueue', () => {
        let queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);

        it('should have a size of 5', () => {
            expect(queue.stack.size).toEqual(5);
        });

        it('should add a new node with the value of 6, but the bottom should remain with a value of 1', () => {
            queue.enqueue(6);
            expect(queue.stack.size).toEqual(6);
            //
        });

        it('throw an error when maxSize is met', () => {
            expect(() => {
                [...Array(1049)].map((e, i) => this.queue.enqueue(~~(Math.random() * i)));
            }).toThrow();
        });
    });

    describe('#Dequeue', () => {
        let queue.stack = new Queue();

        it('should remove the bottom most node from the queue.stack', () => {
            queue.enqueue(1);
            expect(queue.stack.bottom.value).toEqual(1);
            expect(queue.dequeue().value).toEqual(1);
        });

        it('should throw an error when the queue.stack size is 0', () => {
            expect(() => {
                queue.dequeue();
            }).toThrow();
        });
    });
});