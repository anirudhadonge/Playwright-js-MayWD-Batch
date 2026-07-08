/**
 * Variable in JavaScript
 * There are three ways to declare variables in JavaScript: var(old keyword that was used to declare variables)), let, and const.
 */
/**
 * <var|let|const> <variableName> [= value];
 */
// Javascript is dynamically typed, so you can assign any type of value to a variable.
// A declared variable can store any type of value, and the type can change during the program execution.
var name;
let age;

name = "Alice";
age = 30;

name= 40; // Reassigning a new value to name, which is now a number instead of a string
age = "Thirty"; // Reassigning a new value to age, which is now a string instead of a number


//scope : space where a variable is defined and can be accessed {<scope>}


// if(true){
//     var city = "New York"; // var is function-scoped, so it will be accessible outside the block // globally scoped variable
//     let country = "USA"; // let is block-scoped, so it will only be accessible within this block // locally scoped variable
//     console.log(city); // Output: New York
//     console.log(country); // Output: USA
// }

//     // console.log(city); // Output: New York
//     // console.log(country); // Output: USA

// Constant variable
const PI =3.14; ;

PI=3.15;