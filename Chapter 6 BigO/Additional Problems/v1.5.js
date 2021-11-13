/*
Page 56 V 1.5

The following code computes the integer square root of a number. If the number is not a perfect square
(there is no integer square root), then it returns -1. It does this by successive guessing. If n is 100, 
it first guesses 50. Too high? Try something lower - halfway betwen 1 and 50. What is its runtime?

*/

const sqrt = n => sqrt_helper(n, 1, n)

const sqrt_helper = (n, min, max) => {
    console.log('Hello World')
	if (max < min) return -1;
	
	let guess = Math.trunc((min + max) / 2);
	
	if (guess * guess === n)
		return guess;
	else if (guess * guess < n)
		return sqrt_helper(n, guess + 1, max)
	else if (guess * guess > n)
		return sqrt_helper(n, min, guess - 1)
}

console.log(sqrt(4 * 4))
console.log(sqrt(4 * 4))
console.log(sqrt(4 * 4 * 4))
console.log(sqrt(4 * 4 * 4 * 4))

/* 
Answer: 
A console.log('Hello World') is placed into a function to trace how many time there would be a recursive call. 
As one may notice as we mutliply the value by itself N times the function is called N times 
which makes the time complexity O(log N). It takes exactly additional one call each time we multiply the 
value by itself.
*/