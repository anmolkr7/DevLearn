//classes are a way to create reusable objects and define their structure and behavior.
/*
1.Constructor Method
The constructor is a special method for creating and initializing an object instance of a class.
It gets called automatically when a new object is created using the new keyword.
2. Instance Methods
Methods defined inside the class (e.g., greet()) become part of the prototype and are shared among all instances.
3. Static Methods
Static methods are called on the class itself and not on instances.
class MathUtils {
  static add(a, b){
    return a + b;
  }
}
console.log(MathUtils.add(3, 5)); // 8 Here we used class name itself to call a function inside it
instead of creating object of class and then calling through it.
*/

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    // Method
    greet() {
      console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person1 = new Person("Alice", 25); //creating new object for person class
person1.greet(); // Hi, my name is Alice and I am 25 years old.
  