'use strict';

require('jest');
const solution = require('../solution');

describe('checkBraces Function', () => {
    it('should take in a string argument', () => {
        expect(solution.checkBraces(1)).toBe('Invalid argument.');
        expect(solution.checkBraces(true)).toBe('Invalid argument.')
        expect(solution.checkBraces(['{}{}'])).toBe('Invalid argument.')
        expect(solution.checkBraces({a: 1})).toBe('Invalid argument.')
        expect(solution.checkBraces()).toBe('Invalid argument.')
    });

    it('should ensure the string contains braces', () => {
        expect(solution.checkBraces('Hello world!')).toBe('Your string did not have any braces.');
        expect(solution.checkBraces('')).toBe('Your string did not have any braces.');
    });

    it('should ensure the correct output', () => {
        expect(solution.checkBraces('{}{}{}{}')).toBe('Your braces are corrrect.');
        expect(solution.checkBraces('{Hello {world {again}}}')).toBe('Your braces are corrrect.');
        expect(solution.checkBraces('}{}{')).toBe('Incorrect braces.');
        expect(solution.checkBraces('{{}')).toBe('Incorrect braces.');
    });
});

describe('binarySearch Function', () => {
    let arr = [1, 2, 3, 4, 5, 6];

    it('should ensure first argument is an array', () => {
        expect(solution.binarySearch({a: 1}, 2)).toBe('Invalid argument.');
        expect(solution.binarySearch(true, 2)).toBe('Invalid argument.');
        expect(solution.binarySearch(2, 2)).toBe('Invalid argument.');
        expect(solution.binarySearch('2', 2)).toBe('Invalid argument.');
        expect(solution.binarySearch(null, 2)).toBe('Invalid argument.');
        expect(solution.binarySearch(undefined, 2)).toBe('Invalid argument.');
    });

    it('should ensure second argument is number.', () => {
        expect(solution.binarySearch(arr, {a: 2})).toBe('Invalid argument.');
        expect(solution.binarySearch(arr, null)).toBe('Invalid argument.');
        expect(solution.binarySearch(arr)).toBe('Invalid argument.');
        expect(solution.binarySearch(arr, arr)).toBe('Invalid argument.');
        expect(solution.binarySearch(arr, '2')).toBe('Invalid argument.');
        expect(solution.binarySearch(arr, true)).toBe('Invalid argument.');
    });

    it('should ensure n is in the array', () => {
        expect(solution.binarySearch(arr, 10)).toBe('Your item 10 is not in the array.');
        expect(solution.binarySearch(arr, 0)).toBe('Your item 0 is not in the array.');
        expect(solution.binarySearch(arr, 2.5)).toBe('Your item 2.5 is not in the array.');
    });

    it('should ensure the correct index for n is returned', () => {
        expect(solution.binarySearch(arr, 5)).toBe('Your item 5 is at index 4.');
        expect(solution.binarySearch(arr, 1)).toBe('Your item 1 is at index 0.');
        expect(solution.binarySearch(arr, 6)).toBe('Your item 6 is at index 5.');
    });
});