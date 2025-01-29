/*
The .map() method is used to transform an array by APPLYING A FUNCTION to each of its 
elements and RETURNING A NEW ARRAY with the modified elements.

So basically map does callback. It takes a function in its parameter.
Now further this function can have its own parameters.The parameters of this function 
typically include:
Current Element (element) → The item being processed.
Index (index) → (Optional) The index of the current item.
Original Array (array) → (Optional) The full array that .map() is being called on.


map() vs forEach()
.map() returns a new array (it does not modify the original array).
.forEach() just iterates over the array but does not return anything.
*/

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); 
// Output: [1, 4, 9, 16, 25]

 