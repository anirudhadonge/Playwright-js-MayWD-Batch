/**
 * Any value which is enclosed in single quotes, double quotes, or backticks is a string in JavaScript.
 * string also stores value in a key-value pair format, where the key is the index of the character in the string, and the value is the character itself.
 * {
 * 0: 'H',
 * 1: 'e',
 * 2: 'l',
 * 3: 'l',
 * 4: 'o'
 *
 * }
 */

// let name = "A lice"; // Using double quotes
// let city = 'New York'; // Using single quotes
// let message = `Hello, ${name}! Welcome to ${city}.`; // Using backticks for template literals

// console.log(typeof(name)); // Output: string
// console.log(typeof(city)); // Output: string
// console.log(typeof(message)); // Output: string

/** Properties and Methods
 * 1. length: Returns the number of characters in a string.
 * 2. toUpperCase(): Converts a string to uppercase letters.
 * 3. toLowerCase(): Converts a string to lowercase letters.
 * 4. indexOf(substring): Returns the index of the first occurrence of a specified substring within the string, or -1 if not found.
 * 5. slice(start, end): Extracts a section of a string and returns it as a new string, without modifying the original string.
 * 6. replace(searchValue, newValue): Returns a new string with the first occurrence of a specified value replaced by another value.
 * 7. split(separator): Splits a string into an array of substrings based on a specified separator.
 * 8. trim(): Removes whitespace from both ends of a string.
 *      a. trimStart() or trimLeft(): Removes whitespace from the beginning of a string.
 *     b. trimEnd() or trimRight(): Removes whitespace from the end of a string.
 *     c. trim(): Removes whitespace from both ends of a string.
 * 9. concat(string1, string2, ...): Combines two or more strings and returns a new string.
 */

// console.log(name.length); // Output: 5

// console.log(name.toUpperCase()); // Output: ALICE
// console.log(name.toLowerCase ()); // Output: alice
// console.log(name.indexOf("e")); // Output: 2

// let myString = " I am learning JavaScript. ";

// // // console.log(myString.slice(5, 13))  ; // Output: "learning"

// // console.log(myString.replace(" " ,"&"));
// // console.log(myString.replaceAll(" ","&")); // Output: ["", "I", "am", "learning", "JavaScript.", ""]

// // console.log(myString.split(" ")); // Output: ["", "I", "am", "learning", "JavaScript.", ""]

// console.log('&' + myString + '&'); // Output: "&I am learning JavaScript.&"

// console.log('&' + myString.trimStart() + '&'); // Output: "&I am learning JavaScript.&"

// console.log('&' + myString.trimEnd() + '&'); // Output: "& I am learning JavaScript.&"

// console.log('&' + myString.trim() + '&'); // Output: "&I am learning JavaScript.&"


let firstName = "John";
let lastName = "Doe";

// + operator
// concat method
// using bapticks and template literals


console.log(firstName  +" " + lastName); // Output: "John Doe"

console.log(firstName.concat(" ", lastName , 67)); // Output: "John Doe"

console.log(`${firstName} ${lastName}`); // Output: "John Doe"