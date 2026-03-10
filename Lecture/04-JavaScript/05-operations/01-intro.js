
// Arithmetic Operators in JavaScript
let a = 10;
let b = 5;

console.log("Addition:", a + b); // 15
console.log("Subtraction:", a - b); // 5
console.log("Multiplication:", a * b); // 50
console.log("Division:", a / b); // 2
console.log("Modulus:", a % b); // 0
console.log("Exponent:", a ** b); // 100000


// Assignment Operators
console.log("*******************")
console.log("Assignment Operators");

let x = 10;

x += 5;  // x = x + 5
console.log(x); // 15

x -= 3;  // x = x - 3
console.log(x); // 12

x *= 2;  // x = x * 2
console.log(x); // 24

x /= 4;  // x = x / 4
console.log(x); // 6


// Comparison Operators
console.log("*******************");
console.log("Comparison Operators");

let num1 = 10;
let num2 = "10";

console.log(num1 == num2);   // true (value comparison)
console.log(num1 === num2);  // false (value + type comparison)
console.log(num1 != num2);   // false
console.log(num1 !== num2);  // true
console.log(num1 > 5);    // true
console.log(num1 <= 10);  // true

// Logical Operators
console.log("*******************");
console.log("Logical Operators");
let age = 20;
let hasID = true;

console.log(age >= 18 && hasID); // true (AND)
console.log(age < 18 || hasID);  // true (OR)
console.log(!hasID);             // false (NOT)

// Bitwise Operators
console.log("*******************");
console.log("Bitwise Operators");
let k = 5;  // 0101
let l = 3;  // 0011

console.log(k & l); // 1 (AND)
console.log(k | l); // 7 (OR)
console.log(k ^ l); // 6 (XOR)
console.log(~k);    // -6 (NOT)
console.log(k << 1); // 10 (left shift)
console.log(k >> 1); // 2 (right shift)