const name="anmol"
const repoCount= 0
//console.log(name + repoCount+" value"); //old technique syntax
//we will use backticks(``) along with string interpolation:- isme hum banate hain placeholders and unke andr jo bhi variable hain wo wha inject kr skte hain

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

//Another way to declare string
const myname=new String('Anmol')//creating String but as an Object HERE
console.log(myname)
//Now any important concept . We know that we created string as an object using new String. So the characters are indexed 0,1,2.. but dont confuse it with array
// rather it is key-value pair. So, 0:A ,1:n and so on
console.log(myname[0]);
console.log(myname.__proto__);//shows {}. i.e Object hain. Yahan empty show kr rha hai but browser k console m dekhne par key value pairs dikhjaenge

const anotherstring=name.slice(-8,3); //slice can take negative value but substring though it can take but it wont consider it
//The negative number selects from the end of the string
console.log(anotherstring)

const newString1="   hitesh   ";
console.log(newString1.trim());//removes starting and ending spaces from a string
// see other string functions like replace , includes, and many more from mdn documentation
//just type the function and hover over it to see what it does or what parameter it takes
const str="Anmol Kumar Ojha"
console.log(str.split("Kumar",2))//split strings into substring using specified separater and returns them as an array


