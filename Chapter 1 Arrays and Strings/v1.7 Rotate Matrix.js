/*
Page 91 V 1.7 Rotate Matrix

Given an image represented by an NxN matrix, where each pixel in the image is 4
bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

*/

const rotateMatrix = matrix => {
	let level = 0;
    let deep = matrix.length / 2 | 0;
    let last = matrix.length - 1

    while (level < deep) {
      for (let i = level; i < last; i++) {
         [ matrix[i][last], matrix[level][i] ] = [ matrix[level][i], matrix[i][last] ];
         [ matrix[last][last - i + level], matrix[level][i] ] = [ matrix[level][i], matrix[last][last - i + level] ];
         [ matrix[last - i + level][level], matrix[level][i] ] = [ matrix[level][i], matrix[last - i + level][level] ];
		 console.log('hello')
      }
      level++;
      last--;
    }

   return matrix
}

console.log(rotateMatrix([[1, 2], [3, 4]]))
console.log(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log(rotateMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12,], [13, 14, 15, 16]]))

/* 
Answer: 

The variable level represents a level we are on. deep is the amount of levels. The first and the second matrixes only have one level of deep;
The algorithm works with outter elements. However the third one is a two-levels of deep matrix. 10 6 7 11 - are an inner matrix circle;

We consider each corner value as a pointer: A, B, C, D repectively; 
Then we cross-assigned values [A, B] = [B, A], [A, C] = [C, A], [A, D] [D, A];


1 2	   3 1
3 4    4 2


1 2 3	7 4 1 
4 5 6	8 5 2
7 8 9	9 6 3


 1  2  3  4		13  9 5 1
 5  6  7  8		14 10 6 2
 9 10 11 12		15 11 7 3
13 14 15 16		16 12 8 4

The time complexity of the algorithm O(N);

*/