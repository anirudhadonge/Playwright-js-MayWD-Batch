/**
 * ES Modules : After ECMA 2015
 * Keyword: 
 * 1. Export 
 *     a. Default export : 
 *         1. Whenever we are exporting a module with a default keyword
 *         2. you can import that module with any name. 
 *         3. Importing the modules outside {}
 *         4. A file can have only one Default export
 *     b. Named Export 
 *       1. Exporting the module with only "export" keyword
 *       2. A file can have multiple names exports
 *       3. You need import with the same name as you have exported.
 *       4. Import need to declared inside the {}
 * 2. Import
 */
//import {add,a,substract} from './Student.js'
//import Std from './Student.js';
import Stud , {substract, a, add} from './Student.js';

console.log(add(5,4));
console.log(substract(6,5));
console.log(a);
let student1 = new Stud("Anirudha",123);

console.log(student1);