let form = document.querySelector("form");
let list = document.querySelector("ul");
let input = document.querySelector("#to-Do-Item");
let items = list.querySelectorAll("li");
let itemsArray = Array.from(items);

function removeItem(e) {
  e.target.style.textDecoration = "line-through";
  e.target.style.backgroundColor = "pink";
  setTimeout(function () {
    e.target.remove();
  }, 1000);
}

function addItem(e) {
  e.preventDefault();
  let newToDo = document.createElement("li");
  newToDo.innerHTML = input.value;
  list.appendChild(newToDo);
  newToDo.addEventListener("click", removeItem);
  input.value = "";
}

for (i = 0; i < itemsArray.length; i++) {
  itemsArray[i].addEventListener("click", removeItem);
}

form.addEventListener("submit", addItem);
