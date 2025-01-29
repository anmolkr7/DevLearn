const marvelheros=["thor","ironman","spiderman"]
const dcheros=["superman","flash","batman"]

// marvelheros.push(dcheros)//This actually doesnt join two  arrays. Rather whole dcheros becomes an element inside marvelheros.
// //So it becomes an array containing another array as its element
// console.log(marvelheros)
// const newhero=marvelheros.concat(dcheros)//combines two arrays and returns a new array
//So push does the work in existing array only and makes it as array inside array 
//  whereas concat returns a new array and most importantly the array returned contains all elements of other array in element form
// console.log(newhero)

//Spread Operator(...)
// const allheros=[...marvelheros,...dcheros] //Another way to concat two arrays . Benefit:-We can add third array and more arrays as well in parameter
// console.log(allheros)

//flat:-returns a new array with all subarray elements concatenated into it recursively upto a given depth as its parameter. Here we gave depth upto Infinity
const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const simplifiedarray=anotherarray.flat(Infinity)
console.log(simplifiedarray)

console.log(Array.isArray("Anmol"))//gives false
console.log(Array.from("Anmol"))//Creates an array from a iterable object
console.log(Array.from({name:"Anmol"}))//INTERESTING. IT RETURNS AN EMPTY ARRAY . SO WE HAVE TO SPECIFY WHETHER TO MAKE ARRAYS OF ONLY KEYS OR ONLY VALUES

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))//Returns a new array from a set of elements



