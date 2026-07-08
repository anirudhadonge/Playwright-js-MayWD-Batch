/**
 * Async/Await : action return a promise, we use async keyword before the function and await keyword before the promise,
 * it will wait for the promise to resolve and then move to the next line of code.
 *
 */

let flag = true;
function fun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (flag) {
        console.log("This is function 1");
        resolve();
      } else {
        reject("Failure");
      }
    }, 5000);
  });
}

function fun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("This is function 2");
      resolve("Success of fun2");
    }, 3000);
  });
}

function fun3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("This is function 3");
      resolve("Success of fun3");
    }, 1000);
  });
}
// await fun3();
// await fun1();
// await fun2();

async function main() {
   await fun1();
    await fun2();
   await fun3();
}


main();
