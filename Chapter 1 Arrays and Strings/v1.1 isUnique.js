/*
Page 90 V 1.1 is 

is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures.

*/

const isUnique = string => {
  const array = new Array(26);
  
  for (letter of string) {
    if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90)
      letter = letter.toLowerCase();
    else if (letter.charCodeAt(0) < 97 || letter.charCodeAt(0) > 122)
      continue;

    if (!array[letter.charCodeAt(0) - 97])
      array[letter.charCodeAt(0) - 97] = 1;
    else {
      console.log('Not Unique! ' + letter + ' already exists');
      return;
    }
  }

  console.log('Unique!')
}

//Perfect vs usual Pangrams
isUnique('Mr. Jock, TV quiz PhD., bags few lynx')
isUnique('Two driven jocks help fax my big quiz.')

/* 
Answer: 

The time complexity of the algorithm is O(N) since we iterate through each element once.

The first condition filters out all symbols other than a-z. Next, 97 is substracted from 
a current character code so that each letter takes its position equal to the index's id;
index 0 = a; index 1 = b; index 2 = c; etc.
A function is terminated once a character we want to place into the array already exists.

// ASC II code of "a" is 97 "z" is 122

*/