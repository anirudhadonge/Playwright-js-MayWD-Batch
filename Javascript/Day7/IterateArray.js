/**
 * Iterating Array 
 * 1. ForeEach
 * 2. map
 * 3. filter
 * 4. For loop
 */
// syntax array[index]
// Operators ++ and -- 
/**
 * ++  the value is incremented by 1
 * -- the value is decremented by 1
 */
/** let / const */
// you can reassing a value to a variable.
const fruits = ["Apple", "Banana", "Mango", "Grapes", 23, false, null, undefined, {"name": "Anirudha"}];

//fruits=[1,3,4,5,6]


console.log(fruits[2]); // Output: "Mango"

// for(let Indexvalue; condition; increment/decrement){
//     // code to be executed
// }

// for(let i=0 ; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// fruits.forEach((v1,index, fruits)=>{
//     console.log(`${index}: ${v1} in ${fruits}`);
// })

let newNumber = [1,2,3,4,5,6,7,8,9,10];

// let doubledNumbers = newNumber.map((value)=>{
//     return value*2;
// })

// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]


let filteredNumbers = newNumber.filter((value)=>{
    return value>=5;
})

console.log(filteredNumbers); // Output: [5, 6, 7, 8, 9, 10]
console.log(newNumber.indexOf(4)); // Output: 3