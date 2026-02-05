// https://scrimba.com/api
// THE ENDPOINT: https://prnt.sc/dv7q7MNhkCbF

// https://jsonplaceholder.typicode.com/posts

// Challenge
// Base URL: https://apis.scrimba.com/dog.ceo/api

// ENDPOINTS:
// /breeds/list/all
// /breedds/image/ramdom

/*
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));
*/

// async function fetchingData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();

//   console.log(data);
// }

// fetchingData();

// Promises
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("the operation completed"));
// try {
//   const response = await fetch(apiData);
//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }
//   const data = await response.json();
//   console.log(data);
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log("the operation completed");
// }

// const apiData = "https://jsonplaceholder.typicode.com/posts";
// try {
//   const response = await fetch(apiData, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       title: "foo",
//       body: "bar",
//       userID: 100,
//     }),
//   });
//   if (!response.ok) {
//     throw new Error("There was a promblem with the API");
//   }
//   const data = await response.json();
//   console.log(data);
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("the operation completed");
// }

// Promise constructor
// const apiData = "https://jsonplaceholder.typicode.com/posts";

// const promise = new Promise((resolve, reject) => {
//   const success = Math.random() > 0.5;

//   if (success) {
//     resolve("operation successful");
//   } else {
//     reject("operaation failed");
//   }
// });

// promise.then((response) => console.log(response));

// try {
//   const response = await promise;
//   console.log(response);
// } catch (error) {
//   console.log(error);
// }

// function preloadingState(data) {
//   return new Promise((resolve, reject) => {
//     if (data) {
//       resolve(data);
//     } else {
//       reject(new Error("No API URL provided"));
//     }
//   });
// }

// const apiData = "https://jsonplaceholder.typicode.com/posts";

// try {
//   const result = await preloadingState(apiData);
//   const response = await fetch(result);
//   const data = await response.json();
//   console.log(data);
// } catch (err) {
//   console.log(err);
// }

// function uploadFile() {
//   return new Promise((resolve, reject) => {
//     console.log("Step 1: uploading file...");
//     setTimeout(() => {
//       resolve();
//     }, 1000);
//   });
// }

// function processFile() {
//   return new Promise((resolve, reject) => {
//     console.log("Step 2: process file...");
//     setTimeout(() => {
//       resolve();
//     }, 1000);
//   });
// }

// function notifyFile() {
//   return new Promise((resolve, reject) => {
//     console.log("Step 3: notify file...");
//     setTimeout(() => {
//       resolve();
//     }, 1000);
//   });
// }

// try {
//   await uploadFile();
//   await processFile();
//   await notifyFile();
// } catch (err) {}

function createPromise() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;

    if (success) {
      resolve("Operation sucessful!");
    } else {
      reject("operation failed.");
    }
  });
}

try {
  const promise1 = createPromise();
  const promise2 = createPromise();
  const promise3 = createPromise();
  const result = await Promise.all([promise1, promise2, promise3]);
  console.log(result);
} catch (err) {
  console.log(err);
}
