//Array of objects can also be implemented
const allusers=[{
name:"Anmol",
gender:"male"
},{
name:"Shreyash",
gender:"male"
},{
name:"Vikash",
gender:"female",
metadata:{
age:5
}
}]
console.log(allusers[2]["metadata"]["age"])
// so it can keep on going to be nested as much we want