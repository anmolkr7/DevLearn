/*
The .filter() method is used to CREATE A NEW ARRAY containing only the elements that 
satisfy a given condition. It does not modify the original array.
*/

const numbers = [1, 2, 3, 4, 5, 6];
// Keep only even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]


/*
1.Filter an Array of Numbers

const numbers = [10, 25, 30, 45, 50];
// Get numbers greater than 30
const greaterThan30 = numbers.filter(num => num > 30);
console.log(greaterThan30); // [45, 50]

2. Filter an Array of Objects

const users = [
  { id: 1, name: "Alice", age: 22 },
  { id: 2, name: "Bob", age: 17 },
  { id: 3, name: "Charlie", age: 25 }
];
// Get only users who are 18 or older
const adults = users.filter(user => user.age >= 18);
console.log(adults);

3. Remove False Values from an Array

const values = [0, "hello", "", null, undefined, 42, false, "world"];
// Remove falsy values (0, "", null, undefined, false)
const truthyValues = values.filter(Boolean);
console.log(truthyValues); // ["hello", 42, "world"]


4. Filtering Duplicates in an Array

const numbers = [1, 2, 3, 4, 5, 3, 2, 1];
// Remove duplicates
const uniqueNumbers = numbers.filter((num, index, array) => array.indexOf(num) === index);
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
*/
