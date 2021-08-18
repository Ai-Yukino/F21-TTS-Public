console.log("Hello, from the JS file.");

// let stuff = 5
// console.log(stuff)
// // Semicolons are optional

// let stuff
// console.log(stuff)
// // Expected output: undefined

// let stuff
// stuff = 10
// console.log(stuff)
// Expected output: 10

// snake case
// let my_new_numer = 27
// console.log(my_new_numer)

// camel case
// let myFavoriteNum = 16
// console.log(myFavoriteNum)

// // pascal case
// let MyNewNum = 56
// console.log(MyNewNum)

// const num = 7;
// // num = 15; <- not allowed
// let myNum = 10;
// myNum = 8
// console.log('num: ', num)
// console.log(myNum, '<- myNum')

// const num = 7
// let myNum = 8

// let sum = num + 10
// let sub = num - 5
// let mult = myNum * 10
// let div = 5/10
// let mod = 17 % 3

// console.log('sum: ', sum)
// console.log('sub: ', sub)
// console.log('mult: ', mult)
// console.log('div: ', div)
// console.log('mod: ', mod)

// let str = 'hello'
// let str2 = "yo"
// let result = str + ' ' + str2

// console.log('str: ', str)
// console.log('str2:', str2)
// console.log('result: ', result)

// Boolean true or false
// let isTrue = false;
// let isFalse = true;

// console.log('isFalse: ', isFalse)
// console.log('isTrue: ', isTrue)

// let i = "something"
// i = 9 // let x = '9'

// console.log(typeof i)
// // console.log(typeof x)

// Type coercion
// let a = 7 == "7"
// let b = 7 === "7"

// console.log(a)
// console.log(b)

// let x = 7 + 7 + 7
// let y = 7 + 7 + '7'

// console.log(y)
// // Outputs 147 which is '14' + '7'

// let z = '7' + 7 + 7
// console.log(z)
// // Outputs 777 which is '7' + '7' + '7'

// Explicit type coercion
// let amountRaised = 1000
// let donation = prompt("What is your donation?")
// amountRaised = Number(donation) + amountRaised

// console.log(amountRaised)

// Type casting
// let x = parseInt("10")
// let y = parseFloat("10.5555")
// let z = Number("613423")

// let newStr = toString(4.99)

// console.log(typeof newStr)

// Templates literals from ES6
// let greeting = "Hi,"
// let myName = "Ai!"

// console.log(greeting + ' ' +  myName)
// console.log(`${greeting} ${myName}. How are you?`)

// Null
// let foo = null
// console.log(foo)

// if else statements
// let x = !true
// if(x) {
//     console.log(x)
// } else {
//     console.log("x is not true")
// }

// let isX = false
// if(isX) {
//     console.log(isX)
// } else if(isX == true) {
//     console.log("this shouldn't run")
// } else {
//     console.log(false)
// }

// let temp = 60;
// let temp = Number(prompt("How hot is it outside?"))

// if(temp > 45) {
//     console.log("go outside")
// } else {
//     console.log("Nope, calling in sick. It's too cold.")
// }

// let x = 10

// if(x == '10') {
//     console.log(true)
// }

// if(x === '10') {
//     console.log(true)
// } else {
//     console.log(false)
// }

// console.log(0 == '0')
// console.log(0 === '0')
// console.log('' === 0)
// console.log('' == 0)

// Truthy values
// if('abc') {
//     console.log('abc')
// }

// if(10 && 'abc' && true) {
//     console.log('combo')
// }

// let x
// if(!x) {
//     console.log(false)
// } else {
//     console.log(true)
// }

// Nothing is being evaluated?
// if (false || 0 || null) {
//     console.log(true)
// }

// || is inclusive or, && is and

// for loop
// for(start, end/condition, increment value)
// for(let i = 0; i <= 9; i++) {
//     console.log(i)
// }

// while loop
// let x = 0
// while(x < 10) {
//     // x = x + 1;
//     // x += 1;
//     x++
//     console.log(x)
// }

// do while loop
// it will always run once
// let x = 0

// do {
//     x++
//     console.log(x)
// } while (x > 10)

// while (x > 10) {
//     x++
//     console.log(x)
// }

// break

// for (let i = 0; i < 10; i++) {
//   console.log(i);

//   console.log("before break"); // will only print once

//   break; // exits the next loop

//   console.log("after break"); //never happens
// }

// continue
// for(let i = 0; i < 10; i++) {

// 	console.log(i);

// 	console.log('before continue'); // will print 10 times

// 	continue; // continues to the next iteration

// 	console.log('after continue'); //never happens

// }

// switch
// used with react redux
// let x = 1;

// switch (x) {
//   case 3:
//     console.log("three");

//   case 1:
//     console.log(1);

//   //break;

//   case 2:
//     console.log(2);

//     break;

//   default:
//     console.log("default");
// }