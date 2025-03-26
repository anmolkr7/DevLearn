/*
TypeScript provides several basic types to ensure better type safety and readability. 
Here are the most commonly used ones: number, string , boolean, null, undefined, 
array, tuple, object, etc
*/

/*
Problem 1:
Write a function that greets a user given their first name.
Argument:firstname
Logs- Hello {firstname}
Doesnt return anything

Solution:-

function greet(firstname:string)
{
    console.log(`Hello ${firstname}`)
}
greet("Anmol")

IMPORTANT
Q.How is typescript better? you still had to add extra code i.e specifying type
Ans:- As the codebase gets bigger, a lot of people will call this greet() function, they
might miss out that functions expects string as an input. For future references , for everyone
else to understand without looking at the whole code and just by looking at function signature
they would be able to know that it requires a string as argument
*/

/*
Problem 2: Sum Function
Write a function that calculates the sum of two numbers and RETURNS IT

we can explicitly specify the return type of function
functiom sum(args):returntype {
    //code here
}
Even if we dont explicitly specify the return type, it will automatically infer it

Solution:-
function sum(a:number,b:number) :number
{
    return a+b;
}
console.log("Sum="+sum(2,3));
*/



/*
Problem 3: Return true or false based on if a user is 18+

Solution:-
function user(age:number):boolean
{
    if(age>=18)
        return true
    return false
}
console.log(user(22));
*/


/*
Problem 4-
Create a function that takes another function as input and runs it after 5 second.
here we learn how to give type to function that is passed as an argument

Solution:-
function sample(fn:()=>void){
    setTimeout(fn, 5000);
}
sample(()=>{console.log("Hello")})
*/

/*
Interfaces in TypeScript
:->In TypeScript, interfaces define the structure of an object by specifying the 
properties and their types. They help ensure type safety and improve code maintainability.

interface Person {
  name: string;
  age: number;
}

const user: Person = {
  name: "John",
  age: 25,
};
Here, Person enforces that user must have a name (string) and an age (number).
*/

/*
Types in TypeScript
type in TypeScript allows you to define custom types, similar to interface, 
but with more flexibility.
types let you aggregate data together

1. Basic Type Alias
You can create a type alias for objects, primitives, and more.

type User = {
  name: string;
  age: number;
};
const user: User = { name: "Alice", age: 30 };

types let us do many othe things such as

2.Unions
Let's say you want to print the id of a user which can be a number or a string

type ID = string | number;
let userID: ID = "abc123"; // ✅ Valid
userID = 101;              // ✅ Valid
// userID = true;         // ❌ Error: Type 'boolean' is not assignable

3. Intersection Types (&)
Combines multiple types into one.
i.e what if you want to creata type that has every  property of mulitple types/interfaces

type Employee = { name: string; age: number };
type Developer = { skills: string[] };

type FullStackDev = Employee & Developer;

const dev: FullStackDev = { name: "John", age: 25, skills: ["React", "Node.js"] };
*/

/*
Arrays in typescript
-----------------------
TypeScript provides strong typing for arrays, ensuring type safety while 
working with collections.

1. Basic Array Types
There are two ways to define an array:

a.)Using type[]
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob"];

b.)Using Array<type>
let numbers: Array<number> = [10, 20, 30];
let names: Array<string> = ["John", "Doe"];

Both methods are equivalent, but type[] is more commonly used.

2. Array of Objects

type User = { name: string; age: number };
const users: User[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];
*/