/**
 * Loops in JavaScript
 * 1. For Loop
 * 2. While Loop
 * 3. Do-While Loop
 * 4. For-In Loop
 * 5. For-Of Loop
 */

/**
 * For Loop
 * for(initialization; condition; increment/decrement){
 *  // action to be performed
 * operators: ++(increment by 1), --(decrement by 1)
 */

// let fruits = ["apple", "banana", "orange", "grapes"];

// for(let i=fruits.length-1 ; i >=0;i--){
//     console.log(fruits[i]);
// }


// While loop
/**
 * while(condition){
 *  // action to be performed
 * }
 */

// let myNumber = 20;

// while(myNumber <20){
//     console.log(myNumber);
//     myNumber++;
// }

// Do-While Loop
/**
 * do{
 *  // action to be performed
 * }while(condition)
 */

// do{
//     console.log(myNumber);
//     myNumber++;
// } while(myNumber <20);
// list, iterable objects: array, string, set, map, object
// foreach ( one by one element in the list)

let fruits = ["apple", "banana", "orange", "grapes"];
let student ={
    name: "John",
    age: 25,
    city: "New York"
}
// for in loop // it takes key of the object  
// for of loop // it takes value of the object

// for(let index in fruits){
//     console.log(fruits[index]);
// }
// 
// for(let key in student){
//     console.log(key);
// }

for(let value of fruits) {
    console.log(value);
}