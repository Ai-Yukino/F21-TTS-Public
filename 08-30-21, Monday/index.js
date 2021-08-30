// const userOne = {
//   name: "Aikawa Kizuna",
//   age: 16,
//   email: "cherryblossomgirl@gmail.com",
// };

// const userTwo = {
//   name: "Makito Maki",
//   age: 15,
//   email: "Makito.Maki@gmail.com",
// };

// 🍂Making new objects from a functions🍃
// function User(name, age, email) {
//   this.name = name;
//   this.age = age;
//   this.email = email;
// }

// // Use the "new" keyword
// const AK = new User("Aikawa Kizuna", 16, "cherryblossomgirl@gmail.com");
// const MM = new User("Makito Maki", 15, "Makito.Maki@gmail.com");
// // console.log(AK);
// // console.log(MM);

// // Access specific property values with dot notation
// console.log(AK.email);

// 🍂ES6 classes🍃

// This entire entity is considered a whole object
// class User {
//   constructor(name, age, email) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
//   }
//   ageByOne() {
//     this.age += 1;
//   }
//   static staticMethod() {
//     console.log("hello");
//   }
// }

// // Creating instances, i.e. instantiation
// const AK = new User("Aikawa Kizuna", 16, "cherryblossomgirl@gmail.com");
// const MM = new User("Makito Maki", 15, "Makito.Maki@gmail.com");

// // Using methods on instances
// console.log(AK);
// AK.ageByOne();
// console.log(AK);

// Static method are bound to the class
// instead of the individual instantiations/objects

// Won't work
// console.log(AK.staticMethod());

// Works
// console.log(User.staticMethod());

// 🍂Getters and setters🍃
// Do not name get and set methods
// identically to key names
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  get getName() {
    return this.name;
  }
  //   does not work
  //   get name() {
  //     return this.name;
  //   }
  set another(newName) {
    this.name = newName;
  }
}

const AK = new User("Aikawa Kizuna", 16, "cherryblossomgirl@gmail.com");
const MM = new User("Makito Maki", 15, "Makito.Maki@gmail.com");

//
console.log(AK.getName);
