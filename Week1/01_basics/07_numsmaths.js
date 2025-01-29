// const balance=100;
// console.log(balance.toFixed(2)); //Gives 100.00 i.e used for precision  for 2 decimal places precision

// const num1=23.8966
// console.log(num1.toPrecision(3))//gives 23.9
// const num2=123.8977
// console.log(num2.toPrecision(3)) //gives 124
// //so parameter represents the number of digits and it does rounding off as well
// const num3=1123.8966
// console.log(num3.toPrecision(3)); //gives 1.12e+3 so still three digits precision with exponential value as well

// const hundreds=1000000
// console.log(hundreds.toLocaleString());// Adds commas between zeros according to American Standard
// console.log(hundreds.toLocaleString('en-IN'));


// *************** MATHS *******************
//THERE are some maths functions such as abs, round, ceil,floor,min,max

//console.log(Math.random()); //iski value humesa 0 se 1 k bich m hee aaegi
//Ab agar hume chiye value 1 se 10 k bich m then
//console.log(Math.random()*10) //but isme problem hai. Agar math.random se 0.01 mila then *10 krne pr bhi 0.1 hee milega. So we'll add 1 to keep value in our range
//console.log((Math.random()*10)+1) // isme bhi problem hai. Say. 0.9876*10+1 . gives 10.976 which is more than our required range. So
//console.log(Math.floor((Math.random()*10)+1))

//UNIVERSAL FORMULA FOR RANGE SAY 
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min) //formula
