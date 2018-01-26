'use strict';

// O(n) - iterates through all of the characters of the string
exports.checkBraces = str => {
    if (typeof str !== 'string') return 'Invalid argument.';
    let arr = [], num = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '{') {
            arr.push('{');
            num++;
        }
        else if (str[i] === '}') {
            if (!arr.length) return 'Incorrect braces.';
            arr.pop();
        }
    }
    return !num ? 'Your string did not have any braces.' : !arr.length ? 'Your braces are corrrect.' : 'Incorrect braces.';
};

// O(log n) - recurisvely splits the array in half and iterates through each half
exports.binarySearch = (arr, n) => {
    if (!Array.isArray(arr) || typeof n !== 'number') return 'Invalid argument.';
    let start = 0, end = arr.length - 1, mid = ~~((start + end) / 2);
    while (n !== arr[mid] && start < end) {
        if (n > arr[mid]) start = mid + 1;
        if (n < arr[mid]) end = mid - 1;
        mid = ~~((start + end) / 2);
    }
    return arr[mid] !== n ? `Your item ${n} is not in the array.` : `Your item ${n} is at index ${mid}.`;
};