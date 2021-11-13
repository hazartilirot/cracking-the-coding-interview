/*
Page 56 V 1.3

The following code computes a % b. What's its runtime?

*/

const mod = (a, b) => {
	if ( b <= 0) return -1;
	
	let div = a / b;
	
	return a - div * b
}

console.log(mod(4, 2)) // 0

/* 
Answer: 

The function doesn't include any loops or recursive calls so regardless of a or b
it will give us the result immediately. The time complexity is O(1)
*/