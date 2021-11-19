/*
Page 90 V 1.1 Remove Dups

Write code to remove duplicates from an unsorted linked list.

FOLLOW UP: How would you solve this problem if a temporary buffer is not allowed?

*/

class Node {
	#data
	#next
	
	constructor(data) {
		this.#data = data;
        this.#next = null;
	}
	
	append(data) {
		let newNode = new Node(data);
		let currentNode = this;

		while (currentNode.#next !== null) {
			currentNode = currentNode.#next;
		}
		currentNode.#next = newNode;
	}          
	
	findAndRemoveDuplicates() {
        const hashTable = {}; 
          
		let currentNode = this;
		let previousNode = currentNode;
        hashTable[currentNode.#data] = true;
		
        while (currentNode.#next !== null) {
               
            if (!hashTable[currentNode.#next.#data]) {
                 hashTable[currentNode.#next.#data] = true
            } else {
                 currentNode.#next = currentNode.#next.#next;
                 continue;
            }
            previousNode = currentNode;
            currentNode = currentNode.#next;
		}
	}
    print() {
        let currentNode = this;
                         
        while (true) {

          console.log(currentNode.#data)
          if (currentNode.#next === null) return;
                  
          currentNode = currentNode.#next
        }
    }
	
}
               
const node = new Node('A');
node.append('A');
node.append('B');
node.append('C');
node.append('');                  
node.append('C');
node.append('D');
node.append('D');

node.findAndRemoveDuplicates();          
node.print();


/* 
Answer: 

The time complexity is O(N) since we iterate through each element; 
The space complexity is O(N) for a hashTable is used. 
In the worst case scenario we have to put each element into the hash.

As for FOLLOW UP, we would use a nested loop and for each element going through each element twice which
would give us the time complexity O(N^2) and space complexity O(1) if we didn't use a hashTable;


The output:

"A"
"B"
"C"
""
"D"

*/