/*
Page 55 V 1.1

The following code computes the product of a and b what is its runtime

*/

const product = (a, b) => {
	let sum = 0;
	for (const i = 0; i < b; i++) {
		sum += a;
	}
	return sum;
}

/* 
Answer: 
The amount of times the loop would be expecuted depends on the variable of b parameter.
Meaning if we consider b as N elements, the time compexity is going to be O(N) which is Linear.
*/