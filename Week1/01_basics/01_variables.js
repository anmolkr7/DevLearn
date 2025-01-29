const accountId=13546  //cannot be changed.Preferred for constants or variables that should not be reassigned.
/*
i.e accountId=12390  this is not allowed i.e immutable
Block-scoped (like let).
Re-declaration: Not allowed within the same scope.
*/


let accountemail="anmol@gmail.com" //prefer using this
/*
Preferred for mutable variables in modern JavaScript
Block-scoped.
i.e Variables declared with let are accessible only within the block (e.g., {}) they are defined in.
Re-declaration: Not allowed within the same scope.
*/

var accountpassword="1234"//Dont' use this because of issue in block scope and functional scope
/*
Function-scoped
Re-declaration: Allowed within the same scope
Considered outdated and prone to bugs due to its scoping rules.
*/


accountcity="sbg" //variable can be declared in js without const,let,var
console.table([accountId,accountemail,accountpassword,accountcity])

let accountstate;
console.log(accountstate)  //this will result in undefined because we havent initialised the variable.

/*
Hoisting is a JavaScript mechanism where variable, function, or class declarations are moved ("hoisted") 
to the top of their scope during the compilation phase, before the code is executed. 
This means you can reference variables or functions before they are declared in the code.
*/

//Declarations are hoisted, but initializations are not.