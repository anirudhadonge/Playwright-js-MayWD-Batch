/**
 * Call Back function
 * you are calling a function inside a function. function is as paramater
 *
 * fun1 ---> fun2 --- fun3
 * This is function 1
 * This is function 2
 * This is function 3
 */
/**
 *
 * 100 actions -- call back hell
 */

function fun1(fun) {
  setTimeout(() => {
    console.log("This is function 1");
    // console.log("This is a call back function");
    fun();
  }, 5000);
}

function fun2(fun) {
  setTimeout(() => {
    console.log("This is function 2");
    fun();
  }, 3000);
}

function fun3(fun) {
  setTimeout(() => {
    console.log("This is function 3");
    if (fun != undefined) {
      fun();
    }
  }, 1000);
}

fun1(() => {
  fun2(() => {
    fun3();
  });
});
// whenever a function is called with the () it would get executed at that place.
// Whenever we want to execute afunction add () in front of the function name . It would get executed.

// let add = function (a,b){
//     return a+b;
// }
// console.log(add)
// fun1(fun2(fun3))
