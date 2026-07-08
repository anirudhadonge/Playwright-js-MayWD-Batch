/**
 * Map: It is a collection of key value pairs. It is similar to object but it has some differences.
 * Keys of map can be any thing.
 * Map is iterable. next()
 * Sequence of map is same as the sequence of insertion.
 */

/**
 * Object: It is a collecion of key value pairs.
 * keys of object are string or a symbol.
 * Object is not iterable.
 * Sequence of object is not same as the sequence of insertion.
 */

/**
 * Syntax of Map: new Map()
 * Some Inbuild methods of Map;
 * set(): to add key value pair in map.
 * get(): to get the value of a key.
 * has(): to check if a key is present in map or not.
 * delete(): to delete a key value pair from map.
 * clear(): to delete all the key value pairs from map.
 * size: to get the number of key value pairs in map.
 * entries(): to get an iterator of key value pairs in map.
 * foreach(): to execute a function for each key value pair in map.
 */

let myFirstMap = new Map([["Name", "Aditya"], ["Age", 25], ["City", "Pune"]]);

// console.log(typeof(myFirstMap));
console.log(myFirstMap);

myFirstMap.set("Country", "India");


myFirstMap.set(5, "Engineer");
console.log(myFirstMap.size);

//console.log(myfristMap.has("Name")); // true
// console.log(myFirstMap);
// console.log(myFirstMap.get("Name"));
// console.log(myFirstMap.delete(5));
// console.log(myFirstMap);
// myFirstMap.clear();
// console.log(myFirstMap);
/**
 * [Name, Aditya]
 * [Age, 25]
 * [City, Pune]
 * [Country, India]
 * [5, Engineer]
 */

// for(let [key,value] of myFirstMap.entries()){
//     console.log(`Key: ${key} and Value: ${value}`);
// }

myFirstMap.forEach((value, key) => {
    console.log(`Key: ${key} and Value: ${value}`);
});








