const myarr=[0,1,2,3,4]
//So array can be of same types and as well as different. It will still be an array
//Arrays in javascript are resizable and can contain  a mix of different data types.
//JS array copy operations create shallow copies. i.e They share the same reference point

const myarr2=new Array(1,2,3,4)//NOTE:- Yha square brackets nhi dete hain

// ARRAY METHODS
// myarr.push(6) //adds the element at the end of the array
// myarr.pop()//removes last value in array

// myarr.unshift(9) //Adds element to the first of array and then shifts others accordingly
// myarr.shift()//removes first element
// console.log(myarr.includes(9))
// console.log(myarr.indexOf(9))

// const newarr=myarr.join()//Adds all the elements of an array into a string. So newarr is of String type

//slice-returns COPY of section of an array
//splice-it removes the section of array and this change is done in ORIGINAL ARRAY
console.log("A",myarr)
const myn1=myarr.slice(1,3)//parameters are indexes (inclusive,exclusive)
console.log(myn1)
console.log("B",myarr)
const myn2=myarr.splice(1,3)
console.log("C",myarr)
console.log(myn2)



