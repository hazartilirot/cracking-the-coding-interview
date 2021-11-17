/*
Page 91 V 1.8 Zero Matrix

Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
column are set to 0.

*/

const zeroMatrix = matrix => {
	
    const coords = [];
  
	for (let r = 0; r < matrix.length; r++)
		for (let c = 0; c < matrix[0].length; c++)
			if (matrix[r][c] === 0)
				coords.push([r, c]);
		
	while (coords.length > 0) {
      
      const [r, c] = coords.pop();
      
      for (let i = 0; i < matrix[0].length; i++)
        matrix[r][i] = 0;
      
      for (let i = 0; i < matrix.length; i++)
        matrix[i][c] = 0
    }
  
    return matrix;
}


console.log(zeroMatrix([[1, 2], [0, 4]]))
console.log(zeroMatrix([[1, 2, 3], [4, 0, 6], [0, 8, 9]]))
console.log(zeroMatrix([[0, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12,], [13, 14, 15, 0]]))


/* 
Answer: 

The challenge of the task was the condition doesn't specify that one should take into account more than one occurance!
The author is mean with details.

0 2
0 0

0 0 3 
0 0 0
0 0 0

0  0  0  0 
0  6  7  0
0 10 11  0
0  0  0  0

*/