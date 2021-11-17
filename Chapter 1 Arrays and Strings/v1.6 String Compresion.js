/*
Page 91 V 1.6 String compression

Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z).

*/

const stringCompression = string => {
   
	let previousLetter = string[0];
	let counter = 0;
	let compressed = ''
   
	for (let i = 0; i < string.length; i++) {
		if (string[i] === previousLetter) {
			counter++;
			if(i < string.length - 1) 
              continue;
		}
		compressed += previousLetter.concat(counter);
		previousLetter = string[i];
		counter = 1;
	}
	
	return compressed.length < string.length ? compressed : string
   
}
console.log(stringCompression('aabcccccaaa')) // a2b1c5a3
console.log(stringCompression('abca'))        // a1b1c1a1 became longer than the initial string


/* 
Answer: 

The time complexity of the algorithm O(N);

*/