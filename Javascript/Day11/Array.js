/**
 * slice(): you are creating sub array from the original array. It does not change the original array. start index and end index
 *  return type is an array
 * splice() : used for adding or removing the element from the array. in between the original array.
 */

let fruits = ["apple", "banana", "orange", "grapes"];    // when then index is negative it starts from the end of the array
// let subArray = fruits.slice(-1,1);  // start index 1 and end index -1 (not included)
// console.log(subArray);

// removing the element from the array
//splice(start index, number of elements to be removed)
// splice (start index, number of elements to be removed, list ofelements to be added )


// let removedFruits = fruits.splice(2,5); ///
// console.log(fruits); // Output: ["apple", "banana", "grapes"]
// console.log(removedFruits); // Output: ["orange"]

// adding the element to the array
// console.log(fruits);
// let addedFruits = fruits.splice(2,0,"Strawberry"); // it will add the element at index 2 and remove 0 element
// fruits.splice(4,0,"Pineapple"); // it will add the element at index 4 and remove 0 element
// console.log(fruits);
// console.log(addedFruits);

// Replacing the element

  fruits.splice(2,2,"Strawberry","Mango"); // it will replace the element at index 2 and remove 1 element

//  console.log(fruits);


let myArray = [10, 'Anirudha',true , {"name": "Anirudha "}]; // Array literal syntax

fruits.push(...myArray); // it will add the entire array as a single element at the end of the fruits array
console.log(fruits);
console.log(fruits[4]);

/**
 * [
  'apple',
  'banana',
  'orange',
  'grapes',
  10, 
  'Anirudha', 
  true, 
  { name: 'Anirudha ' } 
]
 */

