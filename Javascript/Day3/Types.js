/**
 * Types in Javascript:
 * 1. Primitive Types:
 * - String: Represents textual data, enclosed in single quotes (' '), double quotes (" "), or backticks (` `).
 * - Number: Represents numeric values, including integers and floating-point numbers.
 * - Boolean: Represents a logical entity that can have two values: true or false.
 * - Null: Represents the intentional absence of any object value. It is a primitive value that represents "no value" or "empty value".
 * - Undefined: Represents a variable that has been declared but has not been assigned a value. It is a primitive value that indicates the absence of a value.
 * - BigInt: Represents integers with arbitrary precision. It is used for numbers larger than the maximum safe integer in JavaScript (2^53 - 1).
 * 2. Non-Primitive Types:
 * - Object: Represents a collection of properties, where each property is a key-value pair. Objects can be created using object literals, constructors, or classes.
 * - Array: Represents an ordered list of values, which can be of any type. Arrays are a special type of object and can be created using array literals or constructors.
 * - Function: Represents a reusable block of code that performs a specific task. Functions can be defined using function declarations, function expressions, or arrow functions.
 */


/**
 * Strings
 * Strings can be created using single quotes (' '), double quotes (" "), or backticks (` `).
 * Any value enclosed in quotes is treated as a string, even if it looks like a number or a boolean.
 */
// let name = "Alice"; // Using double quotes
// let city = 'New York'; // Using single quotes
// let message = `Hello, ${name}! Welcome to ${city}.`; // Using backticks for template literals

// console.log(typeof(name)); // Output: string
// console.log(typeof(city)); // Output: string
// console.log(typeof(message)); // Output: string

// let myNumber = "123"; // This is a string, not a number
// console.log(typeof(myNumber)); // Output: string

/**
 * Numbers
 * JavaScript has a single number type that can represent both integers and floating-point numbers.
 * You can perform various arithmetic operations on numbers, such as addition, subtraction, multiplication, and division.
 */
// let age = 30; // Integer
// let price = 19.99; // Floating-point number
// // console.log(typeof(age)); // Output: number
// // console.log(typeof(price)); // Output: number


// let a = 10;

// console.log(typeof(a)); // Output: number

// a = 5.12345;

// console.log(typeof(a)); // Output: number


// /**
//  * Booleans : true and false
//  */

// let flag = true;

// console.log(typeof(flag)); // Output: boolean

// flag = false;   
// console.log(typeof(flag)); // Output: boolean

/**
 * Undefined: A variable that has been declared but has not been assigned a value is of type undefined.
 */
// let value ;
// console.log(typeof(value)); // Output: undefined


// function myFunction(value) {
//     console.log(value); // Output: undefined
// }

// //myFunction(a);
// console.log('-------------------');

/**
 * Null: Represents a standalone value"
 */

let emptyValue;
// emptyValue= null;
// console.log(typeof(emptyValue)); // Output: object (this is a quirk in JavaScript, null is considered an object type)

// if(emptyValue === null) {
//     console.log("The variable is null"); // Output: The variable is null
// }

console.log(emptyValue);
console.log(typeof(emptyValue)); // Output: undefined

// if(flag ==   true){
// emptyValue = null;
// }

/**
 * BinInt: Represents integers with arbitrary precision. It is used for numbers larger than the maximum safe integer in JavaScript (2^53 - 1).
 */
//Number  = 2^53 - 1

let myBigInt = 10n;

console.log(typeof(myBigInt)); // Output: bigint
console.log(myBigInt); // Output: 90071992500000000n