/*
Page 56 V 1.10

The following code sums the digits in a number. What is its big O time?

*/

const sumDigits = n => {
	let sum = 0;
    let tracer = 0;
	while (n > 0) {
        tracer++
		sum += n % 10;
		n /= 10;
	}
    console.log(tracer)
	return sum;
}

sumDigits(1)                  // 324
sumDigits(1 * 10)             // 325
sumDigits(10 * 10)            // 326
sumDigits(10 * 10 * 10)       // 327
sumDigits(10 * 10 * 10 * 10)  // 328


/* 
Answer: 

tracer counts the amount of operations. 
As it turned out it takes +1 operation for a number raised to a power of N + 1
The time compexity is O(log N);

*/