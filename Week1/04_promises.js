/*
WEEK 1.5
A Promise in JavaScript is an object that represents the eventual 
completion (or failure) of an asynchronous operation and its resulting
 value. Promises provide a cleaner way to work with asynchronous 
 operations compared to callbacks, helping avoid "callback hell."
*/


/*Creating a Promise
To create a promise, use the PROMISE CONSTRUCTOR, which takes a 
CALLBACK FUNCTION WITH TWO PARAMETERS:
1.resolve: Call this when the operation succeeds.
2.reject: Call this when the operation fails.
It will work even if we just five one parameter resolve
We can name resolve, reject to another name . IT doesnt matter
*/

/* HOW RESOLVE AND REJECT WORK
When you create a promise using the new Promise constructor, you pass
a function (called the "executor function") that takes two 
parameters: resolve and reject.

resolve(value): This is a function you call when the asynchronous operation
succeeds. It transitions the promise to the fulfilled state and
optionally passes a value to the .then() handler.\
reject(value): This is a function you call when the asynchronous 
operation fails. It transitions the promise to the rejected state and 
optionally passes an error to the .catch() handler.

To handle the resolution or rejection of the promise, you need to call .then() or 
.catch() on the promise object variable respectively

Further more,The .then() and .catch() methods in JavaScript promises take callback 
function or multiple callback functions as their arguments. These callback functions handle the resolved value or the 
rejection reason of the promise, respectively.

The callbacks inside .then() get called automatically when the Promise resolves
 (fulfills) or rejects. 

A Promise object can either:
1.Be stored in a variable.
2.Be returned from a function
*/


/*
Earlier we discussed about reading a file using fs.readfile,
we can combine this task with promises. In the example below we are returning the promise object
on function anmolreadfile()
*/
// const fs=require('fs')
// function anmolreadfile(){
//     return new Promise(function(resolve,reject){
//         fs.readFile("a.txt","utf-8", function(err,data){
//             resolve(data);
//         })
//     })  
// }
// function onDone(data){
//     console.log(data)
// }
// anmolreadfile().then(onDone);
//Above single line can be replaced as
// const promise=anmolreadfile();
// promise.then(onDone)  




/*So we can place asyn function in resolve section and wait for it 
 to do its task and once its resolved .then() gets called*/

// function anmolasyncfunction(){
//     let p= new Promise((resolve)=>{
//         // do some async logic heree then it makes sense of using promises
//         //or else it becomes similar to sync as here our promise gets resolved immediately
//         resolve("hi there")
//     })
//     return p;
// }
// function main(){
//     anmolasyncfunction().then(function(value){
//         console.log(value)
//     })
// }
// main();

/* FOCUSSSSS ANMOLLLL  */
// INTRODUCING ASYNC AND AWAIT 
/*
async:-The async keyword is used to declare a function as asynchronous. It tells 
JavaScript that the function will return a Promise. Even if you explicitly return a 
non-promise value, it will automatically be wrapped in a Promise.

await:-The await keyword can only be used inside an async function. It pauses the 
execution of the function until the Promise resolves. This allows you to write 
asynchronous code in a more readable, synchronous style.

They are built on top of Promises but allow you to write asynchronous 
code in a synchronous-looking manner.
Q.How async Works
A function declared with the async keyword always returns a Promise.
You can use the await keyword inside an async function to pause its
execution until the Promise is resolved or rejected.


Q.How await Works
The await keyword can only be used inside async functions.
It pauses the execution of the async function until the Promise is
resolved or rejected.
IMPORTANT:-Await Pauses the Execution Inside the async Function
It waits for the associated Promise to resolve or reject before 
continuing with the next lines of code INSIDE the async function.
The rest of the code OUTSIDE the async function 
(after the async function call) continues executing without
 waiting for the await to finish
*/


//Now lets make some changes in code step by step
//we made main as async and removed then part and just logged the value that 
// function anmolasyncfunction(){
//     let p= new Promise((resolve)=>{
//         resolve("hi there")
//     })
//     return p;
// }
// async function main(){
//     let value=anmolasyncfunction()
//     console.log(value)
// }
// main();
//The above code gives:  Promise {'hi there'}   i.e promise object along with its value

//Now we introduced setTimeout for 1sec
// function anmolasyncfunction(){
//     let p= new Promise((resolve)=>{
//         setTimeout(()=>{resolve("hi there")},3000)
//     })
//     return p;
// }
// async function main(){
//     let value=anmolasyncfunction()
//     console.log(value)
// }
// main();
// console.log("after main")
//We got output: Promise {pending} followed by after main
/*Reason:-When let value = anmolasyncfunction(); is executed, it immediately returns the 
Promise object (because the Promise is still pending for 3 seconds).
Since you didn't use await, console.log(value) prints the Promise object itself 
(something like Promise { <pending> }) instead of the resolved value.
The resolved value ("hi there") is never logged because you didn't wait for the 
Promise to resolve.
*/

//But if we put await infront of the call of the async function then
// function anmolasyncfunction(){
//     let p= new Promise((resolve)=>{
//         setTimeout(()=>{resolve("hi there")},3000)
//     })
//     return p;
// }
// async function main(){
//     console.log("Fetching data")
//     const value=await anmolasyncfunction();
//     //execution of below TWO lines will be paused until promise is resolved
//     //If we had used .then() statement implementation instead of async await then below two lines would be
//     //executed synchronously
//     console.log("inside async main after await ")
//     console.log(value)
    
// }
// main();
// console.log("after main")//Its execution isnt paused
// //we got output : fetching data followed by after main followed by inside async main after await followed by hi there


/*So, two keywords async and await got me rid of all those . then
syntax that we had to write. Even though it is asynchronous function
we dont need to use callbacks.
Conclusion:-If a function is returning you a promise then you can put await infront that function
when calling it.
async/await allows you to write asynchronous code that looks
synchronous, making it easier to follow and debug.
.then and async-await ,produce the same output, but async/await gives
a cleaner, synchronous-like flow
When you use await, the execution of the surrounding async function 
is paused until the Promise resolves. While it’s paused, the event 
loop can process other tasks.
With .then(), THE THEN CALLBACK IS QUEUED as a microtask and is
executed after all synchronous code in the current task is completed.

Q.How .then() Works with Execution Flow
The .then() method Schedules the callback (the function you pass to
.then()) to run after the Promise is resolved or rejected.
However, the rest of the code just after the .then()/.then() chain 
continues executing immediately, without waiting for the Promise
to resolve and finally atlast then callback is done
*/



