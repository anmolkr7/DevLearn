//Two ways to declare:-literal and constructor
//Singleton:-constructor se bnate hai toh singleton object bnta hai(i.e ek hee)
//Dusre tarah se object bnate hai toh uske multiple instances bnte hain


//Object Literals

const JsUser={
    name:1,
    age:22,
    location:"BGP",
    email:"anmol@google.com",
    isLoggedIn:false,
    lastlogindays:["MONDAY","SATURDAY"],
    2:"Hello",
    "full name":"Anmol Kumar Ojha" , // cannot be accessed using dot operator
    
}
//NOTE:- The KEYS (irrespective of the value they contain) are treated according to their type so name is String type and 2 is number type. Therefore to access their
//values when using [] we have to treat them accordingly
//PREFER THIS WAY TO ACCESS 
// console.log(JsUser[2])
// console.log(JsUser["name"]) //Double quotes used

//If using dot(.) operator then above such identification is not required
// console.log(JsUser.name)//Double quotes not required
// console.log(JsUser["full name"])

//USING SYMBOL AS KEY OF AN OBJECT
// const mysym=Symbol("key1")
// const newuser={
//     mysym:"mykey1"
// }
// console.log(typeof newuser.mysym)//gives string but we cleared Symbol and are trying to access it that way


//CORRECT WAY TO USE SYMBOL AS KEY IN AN OBJECT
const mysym=Symbol("mykey1")
const newuser={
    [mysym]:"key1"
}
// console.log(newuser[mysym])//we will have to use square bracket for accessing without quotes
// console.log(newuser)

//Making changes to object values
JsUser.email="anmol@hello.com"
// console.log(JsUser["email"])


//To stop making any changes to object value we freeze it. So after freezing even if we assign new value it wont be reflected/assigned
// Object.freeze(JsUser)
JsUser.email="anmol@yaahoo"
// console.log(JsUser.email)// will still print anmol@hello.com

//Adding function to object. So in JS we can say functions are treated as variables
JsUser.greeting=function(){
    console.log("Hello anmol")
}
// console.log(JsUser.greeting) //IMPORTANT:- GIVES FUNCTION ANONYNMOUS 
//Since we are referring to a key that contains a function. So we need to use brackets
// console.log(JsUser.greeting())

//this keyword: used to reference the keys of the same object within
// JsUser.greetingtwo=function(){
//     console.log(`hello ${this.email}`)
// }
// console.log(JsUser.greetingtwo())


