# Whiteboard 29 - Hash Map of Anagrams
Joy Hou, Feb 22, 2018

## Team Members
Bill

## Problem Domain
Write a function that takes in a string and returns a hash map of all the anagrams in the string. Example:

```sortAnagrams('acre race care act cat tac');```

Returns:
```
{
    'acer': ['acre', 'race', 'care'], 
    'act': ['act', 'cat', 'tac']
};
```

## Update
Specs have been ammended to require an array input and output. Array output of adjacent anagrams should be sorted. Code has been updated accordingly.

```
sortAnagrams(['acre', 'act', 'race', 'cat', 'tac', 'care'])
=> ['acre', 'care', 'race', 'act', 'cat', 'tac']
```