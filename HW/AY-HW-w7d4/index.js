console.log(
  "🍂w7d4 homework: https://github.com/Ai-Yukino/F21-TTS-Public/tree/main/HW/AY-HW-w7d4🍃"
);

// 🍂"Write an asynchronous function and call it with async/await"🍃
function getRandomNumber(upperBound, seconds) {
  return new Promise((resolve) =>
    setTimeout(
      () => resolve(Math.floor(Math.random() * upperBound)),
      seconds * 1000
    )
  );
}

async function asynFunction(upperBound, delay) {
  const randomNumber = await getRandomNumber(upperBound, delay);
  console.log(
    `Delay: ${delay}s\nRandom number from [0, ${upperBound}]: ${randomNumber}`
  );
}

asynFunction((upperbound = 100), (delay = 0.5));

// 🍂"Fetch remote data using async/await"🍃
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#making_functions_return_a_promise
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

// 🌿Need to keep refreshing🌿
async function f(cityName) {
  let response = await fetch(`https://geocode.xyz/${cityName}?json=1`);
  cityData = await response.json();
  console.log(`Latitute: ${cityData.latt}\nLongitude: ${cityData.longt}`);
}

f("beijing");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 🍂Class exercise 1🍃
// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }

// loadJson("http://httpstat.us/500").catch(alert); // Error: 500

// async function loadJson(url) {
//   let response = await fetch(url);
//   if (response.status === 200) {
//     return response.json();
//   } else {
//     alert("http-error: " + response.status);
//   }
// }

// loadJson("http://httpstat.us/500");

// 🍂Class exercise 2🍃
// async function wait() {
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   return 10;
// }

// function f() {
//   // ...what should you write here?
//   // we need to call async wait() and wait to get 10
//   // remember, we can't use "await"
//   wait().then(console.log);
// }

// f();

// 🍂Extra content🍃
// 🍂Test example🍃
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#making_functions_return_a_promise
// Need to look at how executor function works
// function wait(ms) {
//   return new Promise((resolve) => {
//     const randomNumber = Math.floor(Math.random() * 100);
//     setTimeout(() => resolve(Math.floor(Math.random() * 100)), ms);
//   });
// }

// function saySomething(string) {
//   console.log(string);
// }

// async function asynFunction() {
//   const x = 1;
//   const y = await wait(x * 1000);
//   saySomething(`${x} seconds: ${y}`);
// }

// asynFunction();

// 🍂First attempt🍃
// function getRandomNumber() {
//   return new Promise(() => setTimeout(Math.floor(Math.random(10)), 0.5 * 1000));
// }

// function test() {
//   //   return new Promise(() => setTimeout(console.log("message: test"), 10 * 1000));
//   setTimeout(console.log("message: test"), 10 * 1000);
// }

// async function asyncFunction() {
//   //   const randomNumber = await getRandomNumber();
//   await test();
// }
