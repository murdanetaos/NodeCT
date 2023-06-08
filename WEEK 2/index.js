// PROBLEM #1
// function fetchData() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const data = 'Fetched data';
//         resolve(data);
//       }, 2000);
//     });
//   }
  
//   fetchData()
//     .then((data) => {
//       console.log(data);
//       return data.toUpperCase();
//     })
//     .then((uppercasedData) => {
//       console.log(uppercasedData);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// A promise is an object in JavaScript that represents the eventual completion or failure of an asynchronous operation. It is a way to handle asynchronous operations and obtain their results when they become available.

// Promises are used to manage asynchronous code and provide a more organized and readable way to handle asynchronous operations. They help in avoiding callback hell, where callbacks are nested within each other, making the code difficult to understand and maintain.
// PROBLEM #2
// A callback is a function that is passed as an argument to another function and is executed when a certain event or task is completed. Callbacks are commonly used in JavaScript for handling asynchronous operations, allowing the code to continue running while waiting for a response from an asynchronous task.
// function fetchData(callback) {
//     setTimeout(() => {
//       const data = 'Fetched data';
  
//       // Simulating another asynchronous operation
//       setTimeout(() => {
//         const processedData = data.toUpperCase();
  
//         // Simulating yet another asynchronous operation
//         setTimeout(() => {
//           const finalData = processedData + ' - Processed';
//           callback(finalData);
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }
  
//   fetchData((result) => {
//     console.log(result);
//   });
  
// PROBLEM #3
// In regular functions, the value of this is determined by how the function is called. It refers to the object that is currently executing the function. The value of this can vary depending on the context in which the function is invoked.

// On the other hand, arrow functions do not bind their own this value. Instead, they inherit the this value from the enclosing lexical scope. In other words, the this value inside an arrow function is determined by the surrounding context where the arrow function is defined, not how it is called.
// Regular function
// const regularFunction = function () {
//     console.log(this);
//   };
  
//   const obj = {
//     name: 'John',
//     regularMethod: regularFunction,
//   };
  
//   obj.regularMethod(); // 'this' refers to 'obj'
  
//   // Arrow function
//   const arrowFunction = () => {
//     console.log(this);
//   };
  
//   const arrowObj = {
//     name: 'Jane',
//     arrowMethod: arrowFunction,
//   };
  
//   arrowObj.arrowMethod(); // 'this' refers to the surrounding lexical scope (e.g., global/window object)
//   PROBLEM#4
// const numbers = [48, 20, 18, 7, 12, 9, 8, 10, 12, 96, 3, 36, 51];

// function filterNumbers() {
//   return numbers.filter((number) => {
//     return number % 3 === 0 && number % 6 === 0 && number % 9 !== 0;
//   });
// }

// const filteredArray = filterNumbers();
// console.log(filteredArray); // Output: [48, 12, 96]
// PROBLEM#5
// Async Functions: An async function is a special type of function that allows the use of the await keyword inside it. The async keyword is added before the function declaration to indicate that it will contain asynchronous operations.

// Await: The await keyword can only be used inside an async function. It pauses the execution of the function until the awaited promise is resolved or rejected. While waiting, it doesn't block the execution of the whole program, allowing other tasks to continue.

// PROS
// Improved Readability: Async/await provides a more intuitive and synchronous-like way to write asynchronous code, making it easier to understand and debug.

// Error Handling: Error handling is simplified with try/catch blocks, allowing for more concise and centralized error handling.

// Sequential Execution: Async/await allows for writing asynchronous code in a sequential manner, which can be easier to reason about and debug.
// CONS
// Compatibility: Async/await requires modern versions of JavaScript. It may not be supported in older browsers or environments without transpilation or polyfills.

// Learning Curve: Understanding and working with async/await may require developers to be familiar with promises and asynchronous programming concepts.
// async function fetchData() {
//     try {
//       const response = await fetch('https://api.example.com/data');
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }
  
//   fetchData();
  