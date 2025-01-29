//Primitive(These facilitate call by value)
// 7 types: String, Number, Boolean, null(empty), undefined, Symbol, BigInt
const score=100
const scoreValue=100.3  //float k liye alag data type nhi hai its number only
const isLoggedIn=false  //boolean
const outsideTemp=null  //emtpy hai
let userEmail; //undefined hai since it is not initialized


//Symbol is used to achieve uniqueness
const id=Symbol('123')// return type bhi alag data type milta hai jisko symbol bolte hai
const anotherId=Symbol('123')
//upar dekhne m dono same hee hai but value jo return type m milti hai wo unique rehti hai
//console.log(id===anotherId) //gives false

//const bigNumber = 354894946; // for such big numbers BigInt data type behind the scenes





// **************************************
//Reference (Non Primitive)
// i.eArray, Objects, Functions
const heros=["shaktiman","naagraj","doga"]//Array

//Objects curly braces k andr hote hain in key value pair format
let myObj={
    name:"Anmol",
    age:22
}

//Functions can be treated as a variable in js
const myFunction=function(){
    console.log("Hello World")
}
//Upar inn sab ka return type is Object but if you check typeof myFunction it will show Function. Actually its function object.

// **************************************************************
//Memory
//Two types: Stack(Primitive), Heap(Non-Primitive)
//Stack memory jab use hoti toh joh bhi variable humne use kia hai uska hume ek copy milta h
//And jab bhi koi object ya kch heap m chala jata hai toh wha se hume uska reference milta h, so any changes made to it will be reflected in originally variable

let user={
    email:"user@google.com",
    upi:"user@ybl"
}
let usertwo= user
usertwo.email="anmol@.com"
//toh yaha humne user ko dia usertwo m and usertwo wale m email change krdia. So since it is reference type this change will also be done for user
console.log(user.email);
