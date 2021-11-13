/*
Page 56 V 1.4

The following code performs integer division. What is its runtime (assume a and b are both positive)?

*/

const div = (a, b) => {
	let count = 0;
	let sum = b;
	while (sum <= a) {
		sum += b;
		count++
	}
	return count;
}

console.log(div(12, 2))

/* 
Answer: 

The function has a while loop which would be repleated (a / b) times. The time complexity is O(A/B);
*/