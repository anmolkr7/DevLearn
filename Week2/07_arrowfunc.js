//Arrow functions
/*
I know this already i.e
(req,res)=>{
}
*/

/*
1.)Basic Arrow Function

const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8

2. Arrow Function with No Parameters

const greet = () => "Hello, World!";
console.log(greet()); // Output: Hello, World!

3. Arrow Function with One Parameter (No Parentheses Required)

const square = x => x * x;
console.log(square(4)); // Output: 16

4. Arrow Function with Multiple Statements

const multiply = (a, b) => {
  let result = a * b;
  return result;
};
console.log(multiply(4, 5)); // Output: 20
*/

/*
The main difference between arrow functions and regular functions is how they handle the 
this context.
Regular functions have their own this, which depends on how they are called.
Arrow functions do not have their own this. Instead, they inherit this from their 
surrounding scope (lexical this).


1.)this in Regular Functions

const obj = {
  value: 42,
  regularFunction: function () {
    console.log(this.value); // `this` refers to obj
  }
};

obj.regularFunction(); // Output: 42
✅ Here, this refers to obj because regularFunction is called as a 
method of obj.


2.)this in Arrow Functions

const obj = {
  value: 42,
  arrowFunction: () => {
    console.log(this.value); // `this` does NOT refer to obj!
  }
};

obj.arrowFunction(); // Output: undefined
🚨 Arrow functions do not bind this to the object, so this.value is undefined. 
Instead, this refers to the outer scope (likely window in browsers or global in Node.js).


4.)Arrow Functions in Callbacks (setTimeout)
A common problem with normal functions is losing the correct this when used inside 
callbacks.

✅ Arrow function fixes this issue:

function Person() {
  this.age = 25;

  setTimeout(() => {
    console.log(this.age); // ✅ 25 (inherits `this` from Person)
  }, 1000);
}
new Person();


🚫 Normal function loses this:
function Person() {
  this.age = 25;
  setTimeout(function () {
    console.log(this.age); // ❌ undefined (because `this` refers to `window` in strict mode)
  }, 1000);
}
new Person();
*/

