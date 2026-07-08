/**
 * Promise : Object which represent the eventual completion of failure of a asynchronous operation.
 * States of Promise : pending, fulfilled, rejected
 *
 * syntax : new Promise((resolve,reject)=>{Action you want to perform})
 * .Then(): if the action is successfull.
 * .catch(): if the action is failed.
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

fun1().then((res) => {
  console.log(res);
  fun2().then((res) => {
    console.log(res);
    fun3().then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }).catch((err) => {
    console.log(err);
  });
}).catch((err) => {
    console.log(err);
});
