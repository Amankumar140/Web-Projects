// // 3 states of promises
// const promiseOne = new Promise(function (resolve, reject) {
//   // Do your task
//   // DB calls ,cryptography

//   setTimeout(() => {
//     console.log("Async task is completed");
//     resolve();
//   }, 1000);
// });

// // resolve connected to the then function...
// promiseOne.then(function () {
//   console.log("Promise consumed");
// });

// // another way

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async task  2");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("Async 2 resolved");
// });

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ username: "Chai", email: "chai@example." }); //// it takes object datatype
//   }, 1000);
// });

// promiseThree.then((user) => {
//   console.log(user);
// });

// promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "Aman", password: "123" });
//     } else {
//       reject("ERROR");
//     }
//   },1000);
// });

// there is chaining of then occurs and now you the return from one then goes to second then this is way to handle the database..
// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => console.log("error"))
//   .finally(() => console.log("the promise is either resolved or rejected"));

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "javaScript", password: "1234" });
//     } else {
//       reject("JS went wrong");
//     }
//   }, 1000);
// });

// during database you have to use another way 
// async await...... not handle catch..

// async function consumePromiseFive() {
//     try {
//         const response=await promiseFive
//     console.log(response);
//     } catch (error) {
//         console.log(error)
//     }
// }

//consumePromiseFive();

async function getAllUser(params) {
  try {
    const response= await fetch("https://jsonplaceholder.typicode.com/users")
    const data= await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: ",error)
  }

}

getAllUser();