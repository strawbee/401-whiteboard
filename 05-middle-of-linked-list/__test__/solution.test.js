'use strict';

require('jest');
const solution = require('../solution');

describe('#FindMid', () => {
    it('should take an object', () => {
        expect(solution.findMid({value: 1, next: null})).not.toBeNull();
        expect(solution.findMid([1, 'next'])).toBeNull();
        expect(solution.findMid('string')).toBeNull();
        expect(solution.findMid(123)).toBeNull();
        expect(solution.findMid(null)).toBeNull();
    });

    it('should not take in an empty object', () => {
        expect(solution.findMid({})).toBeNull();
    });

    it('should ensure that each node has a value key and a next key', () => {
        expect(solution.findMid({value: 4, rest: 3})).toBeNull();
        expect(solution.findMid({ value: 1, next: {value: 2, next: {key: 3, next: null} } })).toBeNull();
    });

    it('should output the middle node or nodes', () => {

        let oddList = { value: 25, next: 
            { value: 1, next: 
                { value: 15, next: 
                    { value: 33, next: 
                        { value: 4, next: null } 
                    } 
                } 
            } 
        };

        let oddMiddleNode = {
            value: 15, next:
                {
                    value: 33, next:
                        { value: 4, next: null }
                }
        };

        let evenList = {
            value: 25, next:
                {
                    value: 1, next:
                        {
                            value: 15, next:
                                { value: 33, next: null }
                        }
                }
        };

        let evenMiddleNode1 = {
            value: 1, next:
                {
                    value: 15, next:
                        { value: 33, next: null }
                }
        };

        let evenMiddleNode2 = {
            value: 15, next:
                { value: 33, next: null }
        };

        expect(solution.findMid(oddList)).toMatchObject(oddMiddleNode);
        expect(solution.findMid(evenList)).toMatch(`Number of nodes are even. The two middle nodes are: ${evenMiddleNode1}, ${evenMiddleNode2}`);
    });
});