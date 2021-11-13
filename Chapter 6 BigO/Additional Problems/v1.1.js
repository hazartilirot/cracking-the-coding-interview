/*
Page 55 V 1.1

The following code computes the product of a and b what is its runtime

*/

const product = (a, b) => {
	let sum = 0;
	for (let i = 0; i < b; i++) {
		sum += a;
	}
	return sum;
}

console.log(product(2, 10)) // 20

/* 
Answer: 

The loop would be iterated b times.
Meaning if we consider b as N elements, the time compexity is going to be O(N) which is linear.
*/