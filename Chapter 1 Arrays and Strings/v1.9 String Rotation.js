/*
Page 91 V 1.9 String Rotation

Assumeyou have a method isSubstringwhich checks if one word is a substring
of another. Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one
call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").

*/

const isSubstring = (s1, s2) => {
    let missing = 0
    let match = false
    let counterMatch = 0;
    let i = 0;
  
    while (s1.length > i) {
      
        if (s1[i] === s2[i - missing]) {
          match = true;
          counterMatch++
        } else if (match && s1[i] !== s2[i - missing]) {
          return false;
        }
      
        if (!match) missing++
        
        if (counterMatch === s2.length) return true;
        
        i++
        
        if (s1.length === i) {
            i = 0;
            while (i < missing) {
                if (s1[i] !== s2.at(-1 * missing + i))
                return false;
              i++;
            }
            return true;
        }
    }
}

console.log(isSubstring('waterbottle', 'erbottlewat'))  // true;
console.log(isSubstring('waterbottle', 'erbottlewet'))  // false
console.log(isSubstring('waterbottle', 'ermottlewat'))  // false


/* 
Answer: 

As we begin iterating through each element of the s1 string we compare s1[i] with s2[0] so that we know what descrepency between two words is;
Substracting the missing difference from i-element we're waiting for the first letter to match. Once two letters matched a consecutive counterMatch is being incremeted.
When the end of the s1 string is reached we get missing (couter) comparing the rest three letters.

s1 = |waterbottle|
s2 =    |erbottlewat|


The time complexity is O(N)
 
*/