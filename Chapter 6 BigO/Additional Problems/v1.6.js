/*
Page 56 V 1.6

The following code computes the integer square root of a number. If the number is not a perfect square (there
is no integer square root), then it returns -1. It does this by trying increasingly large numbers until it 
finds the right value (or is too high). What is its runtime.

*/

const sqrt = n => {
	for (let guess = 1; guess * guess <= n; guess++) {
      console.log('helloWord')
		if (guess * guess === n)
			return guess;
	}
	retrun -1;
}


console.log(sqrt(4)) // N = 4 called 2 times
console.log(sqrt(4 * 4)) // N = 16 called 4 times
console.log(sqrt(4 * 4 * 4)) //N = 64 called 8 times
console.log(sqrt(4 * 4 * 4 * 4)) //N = 256 called 16 times

/* 
Answer: 
Once again a console.log is placed to calculate the amount of function being called.
The time complexity is O(sqrt(N)).
*/