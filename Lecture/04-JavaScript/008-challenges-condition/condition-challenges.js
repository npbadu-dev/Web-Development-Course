// Checking if a number is greater than another number:
let num1 = 3;
let num2 = 5;

if (num1 > num2) {
  console.log(num1 +" is greatest")
} else {
  console.log(num2 +" is greatest");
}

// Checking if a string is equal to another string
let username = "codediary";
let anotherUsername = "codediary";
if (username == anotherUsername) {
  console.log("Pick another username");
} else {
  console.log("You can use this username");
}

// Checking if a variable is a number or not.
let score = 44;
if (typeof score === "number") {
  console.log("Yep! the variable is a number");
} else {
  console.log("Oh! The variable is not a number");
}

//Check whether the boolean value is true or false
let isVideoReady = false;

if (isVideoReady) {
  console.log("Video is Ready");
}
else{
    console.log("Video is NOT ready!");
}


//Check if array is empty or not
let items =[];
console.log(items.length)
if(items.length === 0){
console.log("Array is Empty")
}
else{
    console.log("Array is NOT Empty")
}