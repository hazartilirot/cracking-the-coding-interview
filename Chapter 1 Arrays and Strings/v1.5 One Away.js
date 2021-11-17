/*
Page 91 V 1.5 One Away

There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.

EXAMPLE

pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false

*/

const oneAway = (string1, string2) => {
   const hashTable = {};
   
   for (letter of string1)
		hashTable[letter] 
			? hashTable[letter] += 1 
			: hashTable[letter] = 1
  
   for (letter of string2)
        if (hashTable[letter] === 1)
			delete hashTable[letter]
        else if (hashTable[letter] > 1)
			hashTable[letter] -= 1;
	
   return Object.keys(hashTable).length <= 1;
}
console.log(oneAway('pale', 'pale'))   // true
console.log(oneAway('pale', 'ple'))    // true
console.log(oneAway('pales', 'pale'))  // true
console.log(oneAway('pale', 'bale'))   // true
console.log(oneAway('pale', 'bake'))   // false

/* 
Answer: 

The time complexity of the algorithm O(N);

*/