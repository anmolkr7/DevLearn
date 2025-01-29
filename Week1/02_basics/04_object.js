const tinderUser =new Object() //Ye ek Singleton Object hai
tinderUser.id="123abc"
tinderUser.name="sammy"

// There are varioius Object methods at our disposal.
function objectmethods(obj){
    // console.log(obj)
    // console.log(Object.keys(obj))        //returns an array of keys only
    // console.log(Object.values(obj))      //returns an array of values only
    console.log(Object.entries(obj))//returns an array of array of keys and values
    console.log(Object.hasOwn(obj,"name"))//True   Checks whether object has mentioned property or not
    console.log(Object.assign(obj,{roll:2201153}))
}
const ob={
    name:"Anmol",
    age:22
}
objectmethods(ob)


