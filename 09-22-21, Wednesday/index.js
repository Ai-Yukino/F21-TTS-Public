console.log("Hewo world");

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function getFile(myCallback) {
  let req = new XMLHttpRequest();

  req.open("GET", "https://kevinrollins.com/helloclass/hello.php");

  req.onload = function () {
    if (req.status == 200) {
      console.log("After send");
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
