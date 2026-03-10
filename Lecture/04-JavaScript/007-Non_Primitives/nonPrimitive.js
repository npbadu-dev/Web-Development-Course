// Lecture part

let username = {
    firstname: "Nitesh",
    isLoggedIn: true,
};
// console.log("Initial username:", username);

username.firstname = "Nitesh Prasad";
// console.log("Before adding lastname:", username);
username.lastname = "Badu";
// console.log("After adding lastname:", username);

// console.log(username.firstname);
// console.log(username.lastname);
// console.log(typeof username);


// another way to access the properties of an object

// let username = {
//   "first name": "Nitesh",
//   isLoggedOut: true,
// };
// console.log(username["first name"]); // Nitesh
// console.log(username["isLoggedOut"]); // true

// Array
let fruits = ["apple", "banana", "mango"];
// console.log(fruits[0]); // apple
// console.log(fruits[1]); // banana
// console.log(fruits[2]); // mango

let anotherUser = ["nitesh", true]
// console.log(anotherUser[0]); // nitesh

let isValue ='2abc';
console.log(typeof Number(isValue)); // number
console.log(Number(isValue)); // NaN

console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0


/* *********************************
const data = {
  // Object
  person: {
    name: "Ram",
    age: 25,
  },

  // Array
  fruits: ["apple", "banana", "mango"],

  // Function
  greet: function (name) {
    return "Hello " + name;
  },

  // Date
  today: new Date(),

  // RegExp
  pattern: /hello/i,

  // Map
  mapData: new Map([
    ["name", "Ram"],
    ["age", 25],
  ]),

  // Set
  uniqueNumbers: new Set([1, 2, 3, 3, 4]),

  // WeakMap
  weakMapData: new WeakMap(),

  // WeakSet
  weakSetData: new WeakSet(),
};

// Using the values
console.log(data.person.name); // Ram
console.log(data.fruits[1]); // banana
console.log(data.greet("Sita")); // Hello Sita
console.log(data.today.getFullYear());
console.log(data.pattern.test("Hello World")); // true
console.log(data.mapData.get("name")); // Ram
console.log(data.uniqueNumbers);

*/