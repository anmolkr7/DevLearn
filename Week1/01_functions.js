// function findsum(a,b){
//     return a+b;
// }
// console.log(findsum(3,4))


//Functions can take other functions as input in form of parameter(CALLBACKS)
//i.e passing function inside another function
// function sum(num1,num2,Fntocall){
//     let result=num1+num2;
//     Fntocall(result)
// }
// function displayresult(data){
//     console.log(`Result of the sum is ${data}`)
// }
// //You are allowed to call one function after this to displayresult of sum
// sum(3,4,displayresult)



//setTimeout- schedules execution of a one time CALLBACK after delay in milliseconds
//Two parameters :- function , time in ms
//If callback is not a function then a type error will be thrown

// function greet(){
//     console.log("Hello")
// }
// setTimeout(greet,2000);//NOTE:- just write name of the function don't put braces because it would mean that you are calling it

//OR
// setTimeout(function greet(){
//     console.log("Hello")
// },2000)

//OR
// setTimeout(()=>{
//     console.log("Hello")
// },4000)





//setInterval:-schedules REPEATED execution of callback EVERY delay milliseconds
// setInterval(()=>{
//     console.log("Hello")
// },1000)

//TO STOP setInvertal:-When you create a setInterval, it returns an ID that 
// uniquely identifies the interval.
//You pass this ID to the clearInterval() function to 
// stop the interval from running.

// let a=5
// const intervalId=setInterval(()=>{
//     console.log(a)
//     a=a-1
//     if(a<0){
//         clearInterval(intervalId)
//     }
// },1000)


const newarr=[1,2,3,4]
function naambolo(){
    console.log(`Anmol ${this.email}`)
}
// newarr.forEach(naambolo) //for each element of the array perform the specified operation
//It takes a callback function as a parameter and an optional parameter which is an
//object which this keyword can refer to inside callback function
// newarr.forEach(naambolo,{email:"anmol@952"})

 

