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
*/
function sample(fn:()=>void){
    setTimeout(fn, 5000);
}
sample(()=>{console.log("Hello")})

