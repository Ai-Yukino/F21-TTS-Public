// π
// let el = document.getElementById("username");
// let inputs = document.getElementsByTagName("input");
// let inError = document.getElementsByClassName("error");

// console.log(inputs.length);
// console.log(inError.length);

// π
// let firstButton = document.querySelector("button");
// let inError = document.querySelectorAll("input.error");

// console.log(firstButton);
// console.log(inError);

// π convert queries to arrays
// let links = document.querySelectorAll("a");
// let arrayOfLinks = Array.from(links);

// let linkCount = links.length;
// let firstLink = links[0];

// links.forEach(function (link) {});

// π traversing the DOM

// π just the "top" of the node
// let listItems = document.querySelector("ul");

// console.log(listItems.length); // undefined

// π
// let listItems = document.querySelector("ul").children;

// console.log(listItems.length); // number

//π
// let selectedItem = document.querySelector("li.selected");
// console.log(selectedItem);

// let first = selectedItem.previousElementSibling;
// console.log(first);

// let last = selectedItem.nextElementSibling;
// console.log(last);

// let list = selectedItem.parentElement;
// console.log(list);

// let header = selectedItem.parentElement.parentElement;
// console.log(header);

// let section = selectedItem.parentElement.parentElement.nextElementSibling;
// console.log(section);

// π sledgehamemr way to modify element content
// let div = document.querySelector("div");

// let a = document.querySelector("a");

// console.log(a.innerHTML);
// console.log(div.innerHTML);

// a.innerHTML = "Updated link text";

// π
// let a = document.querySelector("a");

// console.log(a.href);
// a.name = "new link name";
// a.target = "_blank";

// π removing nodes
// document.querySelector(".first").remove();

// πRemember this for the homework!π
// let newLi = document.createElement("li");
// newLi.innerHTML = "item 2";

// π select the area to attatch the tag
// let list = document.querySelector("ul");

// π add the tag to the selected child tag to the parent tag
// list.appendChild(newLi);

// πClick eventsπ
// let el = document.getElementById("myEl");

// el.addEventListener("click", function (event) {
//   console.log("Clicked");
// });

// el.addEventListener("mouseover", function (event) {
//   el.innerHTML = "π";
// });

// el.addEventListener("mouseout", function (event) {
//   el.innerHTML = "π";
// });

// πBubbling eventsπ
document.querySelector(".outer").addEventListener("click", function (event) {
  console.log("target", event.target);
  console.log("current target", event.currentTarget);
});