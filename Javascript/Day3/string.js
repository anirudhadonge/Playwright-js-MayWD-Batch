/**
 * any value enclosed within single quotes ('') or double quotes ("") is considered a string in JavaScript.
 * JavaScript also supports template literals, which are enclosed in backticks (``) and can contain placeholders for variables and expressions.
 * Template literals allow for easier string interpolation and multi-line strings.
 */

/**
 * length property: The length property of a string returns the number of characters in the string, including spaces and special characters.
 * toUpperCase() method: This method converts all characters in a string to uppercase and returns a new string.
 * toLowerCase() method: This method converts all characters in a string to lowercase and returns a new string
 * chatAt() method: This method returns the character at a specified index in a string.
 * indexOf()
 * includes(): This method checks if a string contains a specified substring and returns true or false.
 * slice(): This method extracts a section of a string and returns it as a new string.
 * split(): This method splits a string into an array of substrings based on a specified separator.
 * trim(): This method removes whitespace from both ends of a string and returns a new string.
 *  trimStart(): This method removes whitespace from the beginning of a string and returns a new string.
 *  trimEnd(): This method removes whitespace from the end of a string and returns a new string.
 *  trim(): This method removes whitespace from both ends of a string and returns a new string.
 * replace(): This method searches for a specified value in a string and replaces it with another value, returning a new string.
 * concat(): This method concatenates two or more strings and returns a new string.
 */
/**
 * string is a collection of characters, Characters are stored in key value pair format.
 */

/**
 * 0 : h
 * 1 : e
 * 2 : l
 * 3 : l
 * 4 : o
 * 5 : (space)  
 */

let myString = " hello world written in javascript ";
// console.log(myString.length); // Output: 11

// console.log(myString.toUpperCase()); // Output: HELLO WORLD
// console.log(myString.toLowerCase()); // Output: hello world

// console.log(myString.charAt(4)); // Output: (space)

// console.log(myString.indexOf('o')); // Output: 4

// // includes is used for validation
// console.log(myString.includes('eat')); // Output: true

// console.log(myString.slice(0, 5)); // Output: hello

// let splitstring = myString.split('&');
// console.log(splitstring); // Output: [ 'hello', 'world' ]

// let replacedString = myString.replace('w','&');
// let replaceAllstring = myString.replaceAll('w','&');

// console.log(replacedString); // Output: hello &orld written in javascript
// console.log(replaceAllstring); // Output: hello &orld &ritten in javascript

// console.log(myString); // Output: hello world written in javascript

// console.log('&'+myString+'&'); // Output: &hello world written in javascript&
// console.log('&'+myString.trimStart()+'&'); // Output: &hello world written in javascript &
// console.log('&'+myString.trimEnd()+'&'); // Output: & hello world written in javascript&
// console.log('&'+myString.trim()+'&'); // Output: &hello world written in javascript&


/**
 * Concatenation: You can concatenate strings using the + operator or the concat() method.
 * 1. + operator
 * 2. concat() method
 * 3. using bapticks and template literals
 */

let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName+" is learning JavaScript.";
console.log(fullName); // Output: John Doe
let contactStrings = [" ", lastName, " is learning JavaScript."];
let fullName2 = firstName.concat(...contactStrings);
console.log(fullName2); // Output: John Doe is learning JavaScript.

//Syntax  :  `${Stringvalue} ${variable} ${expression} `

let fullName3 = `${firstName} ${lastName} is learning JavaScript.`;
console.log(fullName3); // Output: John Doe is learning JavaScript.

let fullName4 = `${firstName}${contactStrings[0]}${contactStrings[1]}${contactStrings[2]}`;
console.log(fullName4); // Output: John Doe is learning JavaScript.