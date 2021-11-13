/*
Page 56 V 1.9

The appendToNew method appends a value to an array by createing a new, longer array and returning this longer
array. You've used the appendToNew method to create a copyArray function that repeatedly calls appendToNew.

How long does copying an array take?

*/

const copyArray = array => {
	let copy = [];
	
	for (value of array) {
		copy = appendToNew(copy, value)
    }
        
	return copy;
}

const appendToNew = (array, value) => {
	const bigger = new Array(array.length);
	for (let i = 0; i < array.length; i++) {
      bigger[i] = array[i]
    }

	bigger.push(value);

	return bigger;
}

const array = ['a', 'b', 'c', 'd']

console.log(['a', 'b', 'c', 'd'] === copyArray(array))


/* 
Answer: 

copyArray's loop would iterate through a, b, c, d (4 iterations)
appendToNew's lopp would go over: a, ab, abc - 6 iterations
bigger.push(value) would be called 4 times

The total would be 14 (rounded to 16) which gives us O(N^2);

*/