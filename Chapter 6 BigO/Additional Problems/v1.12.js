/*
Page 56 V 1.12

The following code computes the intersection (the number of elements in common) of two arrays. It assumes that neither array has duplicates. 
It computes the intersection by sorting one array (array b) and then iterating through array a checking (via binary search) if each value
is in b. What is its runtime?

*/

const intersection = (a, b) => {
	mergesOrt(b);
	let intersect = 0;
	
	for (x of a) {
		if (binarySearch(b, x) >= 0) {
			intersect++;
		}
	}
}

/* 
Answer: 

There is b-elements in one array and a-elements in another.

1) Sorting array in b array is O(b log b) if we use a quicksort algorithm.
2) Iterating through each element in an a array would take us O(a)
3) Binary search in b array for each element in the a array would give us O(a log b)

*/