// function is a keyword in javascript
// function greeting(userInput) {
//   console.log(userInput);
// }

// greeting(5);

// Creating the function
// function add(number1, number2) {
//   // tell it what we want it to do
//   return number1 + number2;
// }

// // calling the function with the correct set of params
// let sum = add(1, 2);
// console.log(sum);

// // other approach
// // not as readable
// function add2(x, y) {
//   console.log(x + y);
// }

// add2(-1, 45);

// Arrow function
// const add = (num1, num2) => {
//   return num1 + num2;
// };

// let sum = add(9, -2);
// console.log(sum);

// // not readable
// const add = (num1, num 2) => {
//     return num1 + num2;
// }

// let sum = add(9, -2);
// console.log(sum);

// ES6: initialize arguments
// function add(num1 = 3, num2 = 5) {
//   return num1 + num2;
// }

// let sum = add();
// console.log(sum);

// unknown number of arguments
// function add() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// let sum = add(1, 3, 4, 5, 6, 54, 4, 4, 4);
// console.log(sum);

// rest or spread operator
// function subtract(num, str, ...arr) {
//   let sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     sum -= arr[i];
//   }
//   return sum;
// }

// let diff = subtract(1, 3, 4, 5, 6, 54, 4, 4, 4);
// console.log(diff);

// hoisting functions (up)
// popular in interviews
// can be done with pure functions
// hoisted();
// function hoisted() {
//   console.log("sure");
// }

// add(2, 3);
// // variable function
// // created as an anoymous function
// // which is never initialized?
// let add = function (a, b) {
//   return a + b;
// };

// anonymoun functions
// Use case: cleaner code, closures,
// scope management, privacy,
// let calculator = {
//   add: function (a, b) {
//     return a + b;
//   },
//   add2: (a, b) => {
//     return a + b;
//   },
// };

// // this is an object
// result = calculator.add2(3, 4);
// console.log(result);

// scope
// variables created out of
// the function have "global scope"
// function getGreeting(name) {
//   // local scope
//   let greeting = "Hello ";
//   return greeting + name;
// }
// let hello = getGreeting("Bob");
// console.log(hello);

// // greeting out of scope
// console.log(greeting);

// Calling anonymous functions
// immediately invoked function expression
// iffe
// (function () {
//   let myStr = "Some string";
//   console.log(myStr);
// })();

// Scope
// let city = "NOLA";
// let greet = function () {
//   console.log("Hello " + city);
// };

// greet();

// More scope
// How the browser compiles javascript into bytecode
// Inner function has access to outer function scope
// function outer() {
//   let x = "x";
//   function inner() {
//     let y = "y";
//     console.log("x");
//   }
//   console.log(y);
//   inner();
// }

// outer();

// Scope example
// let landscape = function () {
//   let result = "";
//   let flat = function (size) {
//     for (let count = 0; count < size; count++) {
//       result += " _ ";
//     }
//   };
//   let mountain = function (size) {
//     result += "/";
//     for (let count = 0; count < size; count++) {
//       result += " '";
//       result += "\\";
//     }
//   };
//   flat(3);
//   mountain(4);
//   flat(6);
//   mountain(1);
//   flat(1);
//   return result;
// };

// console.log(landscape());

// Global scope example
// closure?
// let name = "John";
// let greet = function (name) {
//   name = "Dave";
//   console.log(name);
// };
// greet("Ann");
// // console.log(name);

// this keyword
// let teacher = {
//   name: "Ada",
//   sayName: function () {
//     console.log(this.name);
//   },
// };
//
// teacher.sayName();

// Another this keyword example
// function sayName() {
//   console.log(this.name);
// }

// let teacher1 = {
//   name: "Aikawa",
//   speak: sayName,
// };

// let teacher2 = {
//   name: "Shane",
//   speak: sayName,
// };

// teacher1.speak();
// teacher2.speak();

let car = {
  brand: "Ford",
  getBrand: function () {
    return this.brand;
  },
};

let bike = {
  brand: "Shimura Seiki",
};

let brand = car.getBrand.bind(bike);
// let firstCar = car.getBrand();
console.log(brand());
