// 🍂HTTP request example from class🍃

console.log("Hewo world");

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function getFile(myCallback) {
  let req = new XMLHttpRequest();

  req.open("GET", "https://kevinrollins.com/helloclass/hello.php");

  req.onreadystatechange = function () {
    if (req.status == 200) {
      console.log("State changed");
      console.log(this);
      myCallback(this.responseText);
    } else {
      myCallback("Error: " + req.status);
    }
  };
  console.log("Before send:");
  console.log(req);
  req.send();
}

getFile(myDisplayer);

// 🍂Bold example🍃
function makeBold(query) {
  query.style.fontWeight = "bold";
  console.log(query);
}
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
  var tee = document.getElementById("t1");
  makeBold(tee);
}

// 🍂Change color🍃

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// function randomColor() {
//   const color =
//     "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
//   console.log(color);
// }

// document.querySelector(form) = form;
// form.addEventListener("submit", )

// 🍂Form example
// slide 22🍃
// let form = document.querySelector("form");

// form.onsubmit = function (submitEvent) {
//   // var name = document.querySelector("input").value;
//   let name = "Jane Smith";

//   request(
//     {
//       uri: "https://kevinrollins.com/helloclass/hello.php",
//       body: name,
//       method: "POST",
//     },
//     function (err, response, body) {
//       var statusMessage = document.querySelector(".status");

//       if (err) return (statusMessage.value = err);

//       statusMessage.value = body;
//     }
//   );
// };
