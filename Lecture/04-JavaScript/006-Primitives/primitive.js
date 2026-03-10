
let Balance = 120
let AnotherBalance = new Number(120) //not recommended to use this way

console.log(typeof Balance);
console.log(typeof AnotherBalance);

// Boolean
let isLoggedIn = true;
let isAdmin = new Boolean(false) //not recommended to use this way

console.log(typeof isLoggedIn);
console.log(typeof isAdmin);


// String

let myString = "Hello"
let myStringOne = 'Hola'
let username = "nitesh"

let oldGreet = myString + " nitesh";
console.log(oldGreet);

let newGreet = `Hello ${username} !`;
console.log(newGreet);

let demoOne = `The sum of 2 and 3 is ${2 + 3}`;
console.log(demoOne);

// Null and Undefined
let emptyValue = null;
let notAssigned;

console.log(typeof emptyValue); // object (this is a quirk in JavaScript)
console.log(typeof notAssigned); // undefined

// Symbol
let sym1 = Symbol("unique");
let sym2 = Symbol("unique");

let sym3 = Symbol()
let sym4 = Symbol()

console.log(typeof sym1)
console.log(sym1)
console.log(typeof sym3)

console.log(sym1 === sym2); // false, each symbol is unique