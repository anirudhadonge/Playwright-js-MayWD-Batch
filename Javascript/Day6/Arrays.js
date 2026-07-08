/**
 * Arrays : collection of values which might be of similar type or different type.
 * Heterogenouse collection of values.
 * object: an entity which stores the value in key value pair.
 * {index, value}
 * 
 */

let myNumber = 10;


/**
 * {
 * 0: 10,
 * 1: 'Anirudha',
 * 2: true,
 * 3: {"name": "Anirudha "
 * }
 */

// console.log(typeof(Array)); // Output: object
// console.log(typeof(fruits));

// const PI = 3.14;


// PI = 3.15; // This will throw an error because we cannot reassign a value to a constant variable
/**
 * Lengtht : count of the data stored in a array
 * push(): add a new element to the end of the array
 * pop() : remove the last element from the array
 * shift() : remove the first element from the array
 * unshift(): add a new element to the beginning of the array
 * indexOf()
 * includes()
 * slice()
 * splice()
 * join()
 * 
 * 
 * Iteration
 * for loop
 * forEach
 * map()
 * filter()
 */

let myArray = [10, 'Anirudha',true , {"name": "Anirudha "}]; // Array literal syntax
const fruits  = ["Apple", "Banana", "Mango", "Grapes"];
console.log(fruits);
console.log(fruits.length); // Output: 4

// Adding a new element to the end of the array
fruits.push("Orange");
console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Grapes", "Orange"]
console.log(fruits.length); // Output: 5

// removing the last element from the array
let removedFruit = fruits.pop();
console.log(removedFruit); // Output: "Orange"
console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Grapes"]
console.log(fruits.length); // Output: 4         

// Adding a new element to the beginning of the array
fruits.unshift(1,"Strawberry","Pineapple","Apple");
console.log(fruits); // Output: ["Strawberry", "Apple", "Banana", "Mango", "Grapes"]
console.log(fruits.length); // Output: 5

// Removing the first element from the array
let removedFirstFruit = fruits.shift();
console.log(removedFirstFruit);
console.log(typeof(removedFirstFruit));


// Find the index of an element in the array
console.log(fruits.indexOf('Mango')); // Output: 2


// validating if an element is present in the array or not
console.log(fruits.includes('Grapes1')); // Output: true

// converting an array to a string with a specified separator

console.log(fruits.join("&"));  
console.log(fruits);    


console.log(myArray.join("&")); // This will throw an error because join() method is not available for arrays that contain non-string elements
console.log(typeof(myArray.join("&")));
console.log(myArray); // Output: [10, 'Anirudha', true, {name: 'Anirudha '}]
console.log(myArray.length); // Output: 4