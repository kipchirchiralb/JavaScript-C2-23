const fruits = ["apple", "banana"];
console.log("********start*******");
console.log(fruits.length); // 2
console.log(fruits.push("mangoe", "kjsdks")); // 4 // add elements to the end of an array
console.log(fruits.length); // 4

console.log("*********end******");
fruits.unshift("pineapple"); // add elements to the bginnning of an array
fruits.shift(); // remove from beginning
fruits.pop(); // remove from end
console.log(fruits.indexOf("jnsdjdn"));
console.log(fruits);
console.log(fruits[67]); // undefined

// Destructive/Mutative methods - push,pop,shift,unshift,unshift,splice

// Non-Destructive/Non-Mutative methods - filter, map , reducce, slice

// Some methods have a return value some do have a return value
console.log("---------------------------------");
let numbersArray = [23, 32, 3, 4, 55, 669, 45];
let lenghtOfNewArray = numbersArray.push(100); // return lenght of new array, modifies/mutate/desctructures the original array

console.log(numbersArray);
console.log(lenghtOfNewArray);

// some methods like forEach() does not have a return value
let returnValue = numbersArray.forEach(function () {});
console.log(returnValue); // undefined

// some methods do not mutate/change the original array
console.log("=================================");
console.log(numbersArray);
numbersArray.indexOf(3);
console.log(numbersArray);

//always check return value && if it mutates the original array

// Higher Order Functions -- forEach, reduce, sort,map
