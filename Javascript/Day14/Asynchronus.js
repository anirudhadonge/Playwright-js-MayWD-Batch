/**
 * Asynchronus and Synchronous
 * 
 * Synch : we wait for the activity to complete then we proceed to the next activity
 * Asynchronous : We are just triggering the instructions.
 *1. callback --- Callback hell
  2. Promise 
  3. Async and Await
 */


function fun1(){
    setTimeout(() => {
        console.log("This is function 1");
    }, 5000);
}

function fun2(){
    setTimeout(() => {
        console.log("This is function 2");
    }, 3000);
}

function fun3(){
    setTimeout(() => {
        console.log("This is function 3");
    }, 1000);
}
// fun1()(execute completely) --> triggered fun2()---> wait for fun2() to complete ----> trigger fun3() ---> fun3() to completed
fun1();
fun2();
fun3();
