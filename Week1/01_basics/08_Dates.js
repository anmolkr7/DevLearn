//Date objects represent a single moment in time in a platform independent format.
//integral number that represents milliseconds since January 1,1970

// let myDate=new Date() //myDate is created as OBJECT TYPE
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// let myCreatedDate= new Date(2023,0,23)
// console.log(myCreatedDate.toDateString()) // Gives Mon Jan 23 2023. 
//NOTE:- AS YOU CAN SEE ABOVE THAT MONTH JO HAI JAVASCRIPT MEI 0 SE START HOTA HAI

// let myCreatedDate= new Date(2023,0,23,5,3)// FURTHER PARAMETER VALUES REPRESENT HOURS MINUTES SECONDS
// console.log(myCreatedDate.toLocaleString())
  
//ANOTHER WAY TO CREATE IN FORMATS YY-MM-DD
//HERE MONTH START FROM 01
// const myCreatedDate=new Date("2024-01-19")
const myCreatedDate=new Date("01-19-2025")  //MM-DD-YY
// console.log(myCreatedDate.toLocaleString())

//  **********TIME STAMPS *****************
//Used when designing polls, quizes,etc
let myTimeStamp=Date.now()  //ye milliseconds m dega
console.log(myTimeStamp)
console.log(myCreatedDate.getTime()) //this will convert date into milliseconds since 1970
//NOW ABOVE TWO CAN BE COMPARED AND USED AS NECESSARY

let newDate=new Date()
//we have many GET functions to get month only,day only, year only,etc
console.log(newDate.getFullYear())


//************* IMPORTANT ***********************
//.toLocaleString k ander object define krte hain jiske andr bohot properties available hain. toh isse pehle hum INTERNATIONLISATION KRTE HAIN WITHIN
//STRING TOH YAHA HUMNE USE DEFAULT KRDIA HAI AND THEN USKE BAAD HUMNE OBJECT DAALA HAI AS PARAMETER
//TO SEE THE LIST OF OBJECT PROPERTIES PRESS CTRL+SPACE WHEN INSIDE CURLY BRACES AND CHOOSE WHAT YOU NEED AND THEN GIVE COLON AND THEN AGAIN CHOOSE FROM SUGGESTIONS
console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))





