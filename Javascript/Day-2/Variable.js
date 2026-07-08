/**
 * Variable declaration and assignment
 * In JavaScript, you can declare variables using var, let, or const.
 * - var: function-scoped variable (not recommended for modern JavaScript) 
 * // recommended to avoid using var due to its function-scoping and hoisting behavior
 * - let: block-scoped variable (recommended for most cases)
 * - const: block-scoped constant variable (cannot be reassigned)
 */

// Javascript is dynamically typed, so you can assign any type of value to a variable

var name ; // Using var (not recommended)
let age ; // let <variableName> ; // Using let
// const <variableName> =<value>; // This will throw an error because const variables must be initialized at the time of declaration

name = "Alice"; // Assigning a string value to name
age = 30; // Assigning a number value to age


name = 40;
// scope  : space where a variable is defined and can be accessed {}

if(true){
    var city = "New York"; // var is function-scoped, so it will be accessible outside the block 
    let country = "USA";

    console.log(city); // Output: New York
    console.log(country); // Output: USA

}

    // console.log(city); // Output: New York
    // console.log(country); // Output: USA


// Constant variable
const PI =3.14;
let radius = 5;

console.log(radius); // Output: 5
radius = 10; // Reassigning a new value to radius
console.log(radius); // Output: 10

//PI= 3.15; // Assigning a value to a constant variable
console.log(PI); // Output: 3.14

function calculateArea() {
    
    return PI * radius * radius;
}

console.log(calculateArea()); // Output: 314.1592653589793