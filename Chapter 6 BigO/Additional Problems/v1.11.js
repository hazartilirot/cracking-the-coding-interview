/*
Page 56 V 1.11

The following code prints all strings of length k where the charactes are in sorted order. It does this by generating 
all strings of length k and then checking if each is sorted. What is its runtime?

*/

let numChar = 26;

const printSortedStrings = remaining => printStrings(remaining, "");

const printStrings = (remaining, prefix) => {
	if (remaining === 0) {
		if (isInOrder(prefix))
			console.log(prefix)
            return;
	} else {
		for (let i = 0; i < numChar; i++) {
			let c = ithLetter(i);
			printStrings(remaining - 1, prefix + c)
		}
	}
}

const isInOrder = prefix => {
	for (let i = 1; i < prefix.length; i++) {
		let prev = ithLetter(prefix.charAt(i - 1));
		let curr = ithLetter(prefix.charAt(i));
		if (prev > curr) 
          return false;
	}
	return true;
}

const ithLetter = i => String.fromCharCode('a'.charCodeAt(0) + i)


printSortedStrings(2)


/* 
Answer: 

For a string with a length of 2 characters it would iterate through all 26 letters in English alphabet, and then 26 for each character.
26^N and then it take O(N) to iterate through prefix in isOrder(prefix) function

which give us the total time complexity O(N*M^N)


*/