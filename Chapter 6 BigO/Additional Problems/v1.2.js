/*
Page 55 V 1.2

The following code computes a^b. What's its runtime?

*/

const power = (a, b) => {
	if (b < 0) {
		return 0;
	} else if (b === 0) {
		return 1;
	} else {
		return a * power(a, b - 1);
	}
}

console.log(power(2, 3)) // 8

/* 
Answer: 

Once again the recursive call would be executed b times.
The time compexity is going to be O(b) which is linear.
*/