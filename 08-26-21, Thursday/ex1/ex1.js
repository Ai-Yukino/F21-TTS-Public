// 🍂
// let header = document.querySelector("header");
// console.log(header);

// let sections = document.querySelectorAll("section");
// console.log(sections);

// let sectionsCurrent = document.querySelector("section.current");
// console.log(sectionsCurrent);

// let nextSectionCurrent =
//   document.querySelector("section.current").nextElementSibling;
// console.log(nextSectionCurrent);

// let h2Before = document
//   .querySelector("section.current")
//   .previousElementSibling.querySelector("h2");
// console.log(h2Before);

// let divHighlight =
//   document.querySelector("h2.highlight").parentElement.parentElement;
// console.log(divHighlight);

// Incomplete solution:
// Need to individually apply parentElement to each h2 we obtain
// See Erik's solution
// let divH2 = document.querySelectorAll("section h2");
// console.log(divH2);

// 🍂 Erik's solution
// let q = document.querySelector.bind(document);

// let qa = document.querySelectorAll.bind(document);

// // 🍃 Get the header element
// let first = q("header");

// // 🍃 Get all the section elements
// let second = qa("section");

// // 🍃 Get the section element with class="current"
// let three = q("section.current");
// // document.getElementsByClassName("current");

// // 🍃 Get the section that comes after the current section
// let four = q("section.current").nextElementSibling;

// // 🍃 Get the h2 node from the section before the 'current' section
// let five = q("section.current").previousElementSibling.children[0];

// // 🍃 Get the div that contains the section that has an h2 with a class of 'highlight'
// let six = q("h2.highlight").parentElement.parentElement;

// // 🍃 Get all the sections that contain an H2 (using a single statement);
// let seven = Array.from(qa("section h2")).map(function (el) {
//   return el.parentElement;
// });

// console.log(seven);
