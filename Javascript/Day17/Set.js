/**
 * Set: It is a collection of unique values. It is similar to array but it has some differences.
 */
/**
 * Method and Propeties of Set:
 * add(): to add a value in set.
 * delete(): to delete a value from set.
 * has(): to check if a value is present in set or not.
 * clear(): to delete all the values from set.
 * size: to get the number of values in set.
 * values(): to get an iterator of values in set.
 * foreach(): to execute a function for each value in set.
 * set.entries(): to get an iterator of values in set. It is same as values() method.
 */

let fruits = ["Apple", "Banana", "Orange", "Apple", "Mango", "Banana"];

// fruits.forEach((fruit) => {
//     console.log(fruit);
// });

let myFruitSet = new Set(fruits);

// console.log(myFruitSet);
// console.log(myFruitSet.size);
// myFruitSet.add(5);
// console.log(myFruitSet);

// myFruitSet.add("Apple");
// console.log(myFruitSet);


// console.log(myFruitSet.delete("Banana"));
// console.log(myFruitSet.delete("Grapes"));
// console.log(myFruitSet);

// myFruitSet.clear();
// console.log(myFruitSet);

// for(let fruit of myFruitSet.values()){
//     console.log(fruit);
// }


// myFruitSet.forEach((value) => {
//     console.log(value);
// })

// In Selenium Every windows has a window handle and it is unique and is stored in Sets