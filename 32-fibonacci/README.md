# Whiteboard 32 - Fibonacci
Joy Hou, Feb 27, 2018

## Problem Domain
Write two functions to print out the *nth* entry in the fibonacci series, recursively and iteratively.

## Recursive vs. Iterative Approach
While more elegant, the recursive approach is not preferred because of its much higher Big O time complexity. The iterative approach cycles through and calculates the sequence once, giving it O(n) complexity. However, because we are calling the recursive function twice with (n - 1) and (n - 2) each time, the number of times the function is called doubles with each increase in *n*, giving it an exponential Big O complexity of 2^n.