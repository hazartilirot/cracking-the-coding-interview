/*
Page 91 V 1.4 URLify

Palindrome Permutation: Given a string, write a function to check if it is a permutation of
a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A
permutation is a rearrangement of letters. The palindrome does not need to be limited to just
dictionary words.

EXAMPLE

Input: Tact Coa
Output: True (permutations: "taco cat", "atco cta", etc.)

*/

const palindrome = string => {
  const hashTable = {};
  let letterCounter = 0;

  for (e of string) {
    e = e.toLowerCase();
    if (e >= 'a' && e <= 'z') {
      hashTable[e] ? delete hashTable[e] : hashTable[e] = true;
      letterCounter++;
    }
  }

  return letterCounter % 2 === 0 
    ? Object.keys(hashTable).length === 0 
    : Object.keys(hashTable).length === 1;
  
}

console.log(palindrome("Tact Coa"))
console.log(palindrome("taco cat"))
console.log(palindrome("atco cta"))

/* 
Answer: 

The time complexity of the algorithm O(N);

*/