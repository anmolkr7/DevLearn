/*
Asynchronous: Code can start an operation and continue executing
without waiting for the operation to finish. Once the operation 
completes, a callback or promise resolves. 
*/

// console.log("Start");
// setTimeout(() => console.log("Async operation complete"), 1000);
// console.log("End");

// function fetchData(callback) {
//     setTimeout(() => {
//       console.log("Data fetched");
//       callback();
//     }, 1000);
//   }
//   console.log("Start");
//   fetchData(() => console.log("Callback executed"));
//   console.log("End");



// console.log("hi there")
// setTimeout(()=>{
//     console.log("Mai pehle tha but jyada time lga isliye baad m aaya")
// },5000)
// setTimeout(()=>{
//     console.log("Mai tere baad tha but mere pehle hogya")
// },1000)
// console.log("Start")
//So basically there is a concept of callback queue. So 1000ms one is written after 5000ms but
//since it gets completed therefore it goes and stands first in line in callback queue
  




//Some Other Asynchronous functions are Promises,Asyn Await, fetch, fs.readfile,...

//****** READING A FILE IN JAVASCRIPT */
 //this is just requiring an external library fs called filesystem. Lets us reading and wrting from a file
//Syntax:-fs.readFile(path, options, callback)
/*
1.path: The path to the file (can be a string, Buffer, or URL).
2.options (optional):
    Encoding (e.g., 'utf8', 'ascii').
    Flags (e.g., 'r' for read-only).
3.callback: A function to handle the result. It takes two arguments:
    err: Error object if an error occurs (otherwise null).
    data: The file content (Buffer or string, depending on the encoding).
*/

// const fs=require("fs");
// fs.readFile("hello.txt","utf-8",function(err,data){
//     console.log(data);
// })




