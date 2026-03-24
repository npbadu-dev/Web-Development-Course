/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"];
let firstTea = teaFlavors[0];
console.log(firstTea); // Output: "green tea"

/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/
let cities = ["London", "Tokyo", "Paris", "New York"];
letfavoriteCity = cities[2];
console.log(favoriteCity); // Output: "Paris"

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/
let teaTypes =["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";
console.log(teaTypes); // Output: ["herbal tea", "jasmine tea", "masala chai"]

/* 
4. Declare an array named `citiesVisited` containing `"Mahendranagar"` and `"Dhangadhi"`. 
   Add `"Kathmandu"` to the array using the `push` method.
*/

let citiesVisited = ["Mahendranagar", "Dhangadhi"];

// if we know the length of the array, we can do:
citiesVisited[2] = "Kathmandu";

// if we don't know the length of the array, we can do:
console.log(citiesVisited.length); // Output: 2
citiesVisited[citiesVisited.length] = "Kathmandu";

// the above 2 are the fancy way to add new array element but according to challenges we will use push

citiesVisited.push("Kathmandu"); //add element to the end position

console.log(citiesVisited); // Output: ["Mahendranagar", "Dhangadhi", "Kathmandu"]


/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/
let teaOrders = ["chai", "iced tea","matcha", "earl gray"]
teaOrders.pop(); // remove last element, it does not realy matter that how big the array is, it will always remove the last element
const lastOrder = teaOrders.pop(); // store the removed element in a variable
console.log(lastOrder);

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/
let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop(); 
console.log(softCopyTeas); 
console.log(popularTeas); 

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/
let topCities = ["Berlin", "Singapore", "New York"];
// making a hard copy
let hardCopyCities = [...topCities];  //method 1
// let hardCopyCities2 = topCities.slice(); // method 2

topCities.pop();
console.log(hardCopyCities);

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities); // method 1 
// let worldCities = [...europeanCities, ...asianCities]; // method 2

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/
let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
let menuLength = teaMenu.length;
console.log(menuLength); // Output: 4

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/
let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList); // Output: true