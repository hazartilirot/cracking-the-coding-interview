/*
Page 90 V 1.2 Check Permutation

Given two strings, write a moethod to decide if one is a paermutation of the other.

*/

const checkPermutation = (string1, string2) => {
  const hashTable = {};
  
  if (string1.length !== string2.length) 
    return false
  
  for (c of string1) {
    hashTable[c] ? hashTable[c] += 1 : hashTable[c] = 1;
  }
  
  for (c of string2) {
    if (!hashTable[c])
      return false;
    if (hashTable[c] <= 1) 
      delete hashTable[c]
    else if (hashTable[c])
      hashTable[c] -= 1;
  }

  return Object.keys(hashTable).length === 0;
}


console.log(checkPermutation('abcd', 'dcba'))
console.log(checkPermutation('newdoor', 'oneword'))
console.log(checkPermutation('earth', 'heart'))
console.log(checkPermutation('listen', 'silent'))
console.log(checkPermutation('aa', 'aba'))




/* 
Answer: 

Time complexity is linear O(N) since if any string has a different length than the other it will return false immediately;

*/