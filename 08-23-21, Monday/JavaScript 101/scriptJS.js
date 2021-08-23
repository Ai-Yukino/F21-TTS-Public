// Arrays
// let studentArray = ["John", "Kim", "Steve"];
// let numberList = [1, 2, 3, 4, 5];
// let booleanArray = [true, false];

// console.log(booleanArray);
// Arrays are numbered starting with 0 by default

// Choosing particular values in an array
// let studentArray = ["John", "Kim", "Steve"];
// console.log(studentArray[1]);

// Modifying arrays
// let studentArray = ["John", "Kim", "Steve"];
// console.log(studentArray);

// to add an item to the array
// studentArray.push("Zack");

// pop: remvoes the last element from the array
// let studentArray = ["John", "Kim", "Steve"];
// console.log(studentArray);
// studentArray.pop();
// console.log(studentArray);

// unshift: Add element to the front of the array
// let studentArray = ["John", "Kim", "Steve"];
// studentArray.unshift("Shane");
// console.log(studentArray);

// shift: removes element from the front of the array
// let studentArray = ["John", "Kim", "Steve"];
// studentArray.unshift("Shane");
// console.log(studentArray);
// let rmStudent = studentArray.shift();
// console.log(studentArray);

// Add item into array and creates empty space
// let studentArray = ["John", "Kim", "Steve"];
// studentArray[4] = "James";
// console.log(studentArray);
// // Can replace items in the array as well
// studentArray[2] = "Tom";
// console.log(studentArray);

// let num = [10, 100, 50, 2];
// console.log(num);
// // indexOf: Find position/index of element inside an array
// console.log(num.indexOf(50));
// // if value is not present, we'll get -1 as an output
// console.log(num.indexOf(60));

// slice: returns a shallow copy of a portion of an array into a new array object
// selected from start to end (end not included) where start and end represent the
// index of items in that array.
// The original array will not be modified.
// let num = [1, 2, 3, 4, 5];
// let items = num.slice(0, 2);
// console.log(items);
// console.log(num);

// splice: changes the contents of an array by removing or replacing existing
// elements and/or adding new elements in place
// let num = [1, 2, 3, 4, 5];
// console.log(num);
// items = num.splice(1, 2, 8, 10);
// console.log(items);
// console.log(num);

//Print elements from array using length method and for loop
// let studentArray = ["John", "Kim", "Tom", "James"];
// console.log(studentArray.length);
// for (let i = 0; i < studentArray.length; i++) {
//   console.log(i + ": " + studentArray[i]);
// }

// For each loop
// let studentArray = ["John", "Kim", "Tom", "James"];
// // studentArray.forEach(function (item, index) {
// //   console.log(item, index);
// // });
// // arrow function syntax works as well
// studentArray.forEach((item, index) => console.log(item, index));

// join:
// let names = ["Joe", "Ann"];
// names.toString();
// let newNames = names.join("&");
// console.log(newNames);

// sort:
// let a = [5, 2, 8];
// console.log(a.sort());
// console.log(a.reverse());

//
// Objects
//
// let course = {
//   name: "Java Script",
//   computerLg: true,
//   students: ["Rob", "Kate"],
//   instructor: {
//     name: "Dave",
//     favLang: "java script",
//   },
// };
// console.log(course);

// let course = {
//   name: "JavaScript Applications",
//   awesome: true,
//   teachers: ["Assaf", "Shane"],
//   students: [
//     {
//       name: "Steve",
//       computer: {
//         OS: "Linux",
//         type: "laptop",
//       },
//     },
//   ],
// };
// // dot notation:
// // console.log(course.students[0].computer.OS);
// // bracket notation:
// // console.log(course["students"][0]["computer"]["OS"]);

// // We can modify objects
// course.name = "JS 101";
// console.log(course);
// delete course.awesome;
// console.log(course);

// Exercise
let course = {
  name: "JavaScript Applications",
  awesome: true,
  teachers: ["Assaf", "Shane"],
  students: [
    {
      name: "Steve",
      computer: {
        OS: "Linux",
        type: "laptop",
      },
    },
    {
      name: "Katy",
      computer: {
        OS: "OSX",
        type: "macbook",
      },
    },
    {
      name: "Chuck",
      computer: {
        OS: "OSX",
        type: "macbook",
      },
    },
  ],
  preReqs: {
    skills: ["html", "css", "git"],
    equipment: {
      laptop: true,
      OSOptions: ["linux", "osx"],
    },
  },
};

console.log(course.name);
console.log(course.teachers[1]);
console.log(course.students[0].name);
console.log(course.students[1].computer.type);
console.log(course.preReqs.equipment);
console.log(course.preReqs.equipment.OSOptions[1]);
console.log(course.preReqs.equipment.OSOptions.join(" or "));
console.log([
  course.students.slice(1, 3)[0].name,
  course.students.slice(1, 3)[1].name,
]);
