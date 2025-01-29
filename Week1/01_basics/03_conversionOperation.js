// let score="33"
// console.log(typeof(score)); ///gives 'string'
// let valueInNumber=Number(score) //conversion
// console.log(typeof(valueInNumber)); //gives 'number'
// console.log(valueInNumber)//gives 33
 
// //NOW UNDERSTANDING DIFFERENT SCENARIOS OF CONVERSION
// // let score1="33abc"
// console.log(typeof(score1)); ///gives 'string' which is correct
// let valueInNumber1=Number(score1) //conversion
// console.log(typeof(valueInNumber1)); //gives 'number' which is NOT CORRECT IN REALITY AS 33abc is mixed
// console.log(valueInNumber1)// NOW IF WE CHECK TO WHAT IT GOT CONVERTED IT gives NaN i.e not a number
// //Similary if score=null then it gets converted to 0
// //undefined gets converted to NaN
// //boolean value gets converted to 1/0


//Converting values into boolean
/*
1 gets converted to true similarly 0 to false
"" =>false
"Anmol" =>true
*/

//************OPERATIONS*********

//  console.log("1"+2); //12
//  console.log(1+"2")//12
//  console.log("1"+2+2)//122
//  console.log(1+2+"2")//32
//i.e Agar String first m hai toh sabhi ko as string consider kia jaega
//aur agar string last m hai toh pehle jo opertions hai wo ho jaenge and then string consider hoga

console.log(+true)//gives 1. Basically '+' does the conversion to numeric value
console.log(+"");//gives 0.

let num1,num2,num3
num1=num2=num3=2+2;


