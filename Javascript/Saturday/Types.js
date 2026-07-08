/***
 * Types
 * 1. Primitive Types
 *      a. string
 *      b. number
 *      c. boolean
 *      d. null
 *      e. undefined
 *      f. BigInt
 * 2. Non-Primitive Types
 *    a. Object
 *    b. Arrays
 *    c. Functions
 */


// string : A sequence of characters enclosed in single quotes, double quotes, or backticks.

// let name = "Alice"; // Using double quotes
// let city = 'New York'; // Using single quotes
// let message = `Hello, ${name}! Welcome to ${city}.`; // Using backticks for template literals
// console.log(typeof(name)); // Output: string
// console.log(typeof(city)); // Output: string
// console.log(typeof(message)); // Output: string
// // number : Represents both integer and floating-point numbers.

// let age = 30; // Integer
// let price = 19.99; // Floating-point number
// console.log(typeof(age)); // Output: number
// console.log(typeof(price)); // Output: number


// // boolean : Represents a logical entity that can have two values: true or false.

// let flag = true; // Boolean value true
// flag = false; // Boolean value false
// console.log(typeof(flag)); // Output: boolean


// //Undefined : Represents a variable that has been declared but has not been assigned a value.

// let myVariable; // Declared but not assigned a value
// console.log(myVariable + "Vijay"); // Output: undefinedVijay
// console.log(typeof(myVariable)); // Output: undefined



// function myFunction(myVariable  ) {
//    console.log(myVariable); // Output: undefined
// }

// let result;
// myFunction(result); // Calling the function without passing an argument, so myVariable will be undefined



// Null: standalone value;


// let myNullVariable ;
// console.log(myNullVariable); // Output: undefined
// console.log(typeof(myNullVariable)); // Output: undefined
// myNullVariable = null; // Assigning null to the variable
// console.log(myNullVariable); // Output: null
// console.log(typeof(myNullVariable)); // Output: object (this is a quirk in JavaScript, null is considered an object type)

// BigInt: Represents integers with arbitrary precision, allowing you to work with numbers larger than the maximum safe integer in JavaScript.


// 2^53 -1  number type will not be able to work with.

let bigIntValue = 9007199254740991n; // Using the 'n' suffix to denote a BigInt literal
console.log(typeof(bigIntValue)); // Output: bigint