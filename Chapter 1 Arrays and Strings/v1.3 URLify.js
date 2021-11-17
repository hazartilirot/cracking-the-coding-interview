/*
Page 90 V 1.3 URLify

Write a method to replace all spaces in a string with %20. You may assume that
the string has sufficient space at the end to hold the additional characters, 
and that you are given the "true" length of the string. (Note: If implementing
in Java, please use a character array so that you can perform this operation in
place)

EXAMPLE:

Input: "Mr John Smith     ", 13
Output: "Mr%20John%20Smith"

*/

const URLify = string => {
  let newString = '';
  let flag = false;
  
  for (let i = 0; i < string.length; i++) {
    if(string[i] === ' ' && !flag) {
      continue;
    } else if (string[i] !== ' ') {
      flag = true;
      newString = newString.concat(string[i]);
    } else if (string[i] === ' ' && string[i + 1] === ' ' || string.length - 1  === i) {
      flag = false;
    } else if (string[i] === ' ' && flag) {
      newString = newString.concat('%20')
    }
  }
  
  console.log(newString);
}

URLify("Mr John Smith")
URLify("Mr John Smith ")
URLify("   Mr John Smith")
URLify("   Mr John Smith      ")



/*REGEX IN ONE LINE*/

const URLify = s => s.match(/(?:[A-Za-z]+\s)+[A-Za-z]+/)[0].replace(/\s/g, '%20')

console.log(URLify("Mr John Smith"))
console.log(URLify("Mr John Smith "))
console.log(URLify("   Mr John Smith"))
console.log(URLify("   Mr John Smith      "))

/* 
Answer: 

The first example is more verbose. We go over each element and check if there is a whitespace. A variable flag indicates
there hasn't been any letter yet. Once we reached a letter we switch the flag to true; Provided our element is a letter
we concatinate our newString with the letter however if it's a whitespace we change it to "%20" and only then concatinate with the
newString. If we reach a whitespace and its next neighbour is a whitespace as well OR it's the end of the string. We switch our
flag back to false meaning we've reached the end and the exessive whitespaces are irrelevant to us.

*/