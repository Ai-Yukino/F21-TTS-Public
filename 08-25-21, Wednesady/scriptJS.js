// Passing functions
// functions are objects
// function add(num1, num2) {
//   return num1 + num2;
// }

// // High order function
// // look into callback functions
// function doMath(operation, num1, num2) {
//   return operation(num1, num2);
// }

// let sum = doMath(add, 3, 7);

// console.log(sum);

//

// filter, find (not), map, reduce

// filter
// no returning array
// let students = [
//   { name: "John", average: 90 },
//   { name: "Ringo", average: 58 },
//   { name: "Paul", average: 82 },
// ];

// let passingStudents = students.filter(function (student) {
//   return student.average > 60;
// });

// console.log(passingStudents);

// find
// let students = [
//   { name: "John", average: 90 },
//   { name: "Ringo", average: 58 },
//   { name: "Paul", average: 82 },
// ];

// let passingStudents = students.find(function (student) {
//   return student.average > 50;
// });

// console.log(passingStudents);

// map
// let students = [
//   { firstName: "Cam", lastName: "Newton" },
//   { firstName: "Ted", lastName: "Ginn" },
//   { firstName: "Greg", lastName: "Olson" },
// ];

// let fullNames = students.map(function (student) {
//   return `${student.firstName} ${student.lastName}`;
// });

// console.log(fullNames);

// reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// basically computing recurrence relation
// let students = [
//   { name: "Cam Newton", assignmentsCompleted: 6 },
//   { name: "Ted Ginn", assignmentsCompleted: 10 },
//   { name: "Greg Olson", assignmentsCompleted: 8 },
// ];

// let total = students.reduce(function (prevIdx, currIdx) {
//   return prevIdx + currIdx.assignmentsCompleted;
// }, 0);

// console.log(total);

// Challenge 1
// let superHeroes = [
//   ["Batman", "Bruce Wayne"],

//   ["Spiderman", "Peter Parker"],

//   ["The Flash", "Barry Allen"],
// ];

// let secretIdentity = superHeroes.map(function (revealArray) {
//   //   return revealArray[0] + " is " + revealArray[1];
//   return revealArray.join(" is ");
// });

// console.log(
//   //   secretIdentity[0] + "\n" + secretIdentity[1] + "\n" + secretIdentity[2]
//   secretIdentity.join("\n");
// );

// Challenge 2
// find, filter, map, filter, stretch goal for last two
// let players = [
//   { firstName: "Cam", lastName: "Newton", position: "QB", touchdowns: 32 },
//   { firstName: "Derek", lastName: "Anderson", position: "QB", touchdowns: 0 },
//   {
//     firstName: "Jonathan",
//     lastName: "Stewart",
//     position: "RB",
//     touchdowns: 12,
//   },
//   { firstName: "Mike", lastName: "Tolbert", position: "RB", touchdowns: 8 },
//   { firstName: "Fozzy", lastName: "Whittaker", position: "RB", touchdowns: 3 },
//   { firstName: "Ted", lastName: "Ginn", position: "WR", touchdowns: 9 },
//   { firstName: "Devin", lastName: "Funchess", position: "WR", touchdowns: 2 },
// ];

// let mike = players.find(function (player) {
//   return player.firstName === "Mike";
// });
// console.log(mike);

// let RB = players.filter(function (player) {
//   return player.position === "RB";
// });
// console.log(RB);

// let lastNames = players.map(function (player) {
//   //   return `${player.lastName}`;
//   return player.lastName;
// });
// console.log(lastNames);

// // Incorrect: forgot to filter for "RB" position
// // let plus5TouchDowns = players
// //   .filter(function (player) {
// //     return player.touchdowns > 5;
// //   })
// //   .map(function (player) {
// //     return `${player.firstName} ${player.lastName}`;
// //   });
// // console.log(plus5TouchDowns);

// // simpler method
// let plus5TouchDownsRB = players
//   .filter(function (player) {
//     return player.touchdowns > 5 && player.position === "RB";
//   })
//   .map(function (player) {
//     return `${player.firstName} ${player.lastName}`;
//   });
// console.log(plus5TouchDownsRB);

// // Incorrect, need to filter to RB only
// // let TD = players.reduce(function (x, y) {
// //   return x + y.touchdowns;
// // }, 0);

// // console.log(TD);

// let TD_RB = players
//   .filter(function (player) {
//     return player.position === "RB";
//   })
//   .reduce(function (x, y) {
//     // return x + y.touchdowns;
//     return (x += y.touchdowns);
//   }, 0);

// console.log(TD_RB);

// javascript is synchronus?
// java is asynchronous?

// setTimeout

// setTimeout(function () {
//   console.log("later");
// }, 2000);

// console.log("now");

//???

// setTimeout(function () {
//   console.log("promise");
// }, 2000);

// console.log("call");

// let teacher = {
//   name: "Shane",

//   speak: function () {
//     //Maybe you're fetching data from an API, or getting user input

//     setTimeout(function () {
//       console.log("later my name is " + this.name);
//     }, 1000);

//     //Runs immediately

//     console.log("Now my name is " + this.name);
//   },
// };

// closure is a function within a function
// let teacher = {
//   name: "Shane",

//   speak: function () {
//     //Save this to a variable

//     // let self = this;
//     let myName = this.name;
//     //self is visible inside function because of closure

//     setTimeout(function () {
//       //   console.log("later my name is " + self.name);
//       console.log("later my name is " + myName);
//     }, 1000);
//   },
// };

// teacher.speak();
