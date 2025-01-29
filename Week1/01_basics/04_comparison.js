// console.log(2>1)
// console.log(2>=1)

//************* 
// Above stuff is okay and pretty normal . Problem comes when we compare two different data types

//console.log("2" > 1); //gives true. So js converts String 2 into number 2 and then compares




// console.log(null>0) //false
// console.log(null==0)//false
// console.log(null>=0)//true
//***The reason is that an equality check == and comparisons > < >= <= work differently.
// ***Comparisons convert null to a number treating it as 0

//=== STRICT CHECK. IT CHECKS VALUES AND DATA TYPES AS WELL. DOES NOT DO CONVERSION
//console.log("2"===2) //false
