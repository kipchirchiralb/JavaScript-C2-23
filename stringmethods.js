let text = "Hello World!! I am Albert";

console.log(text.length); // property
console.log(text.toUpperCase()); // method--function  -- String
console.log(text.charAt(10));
console.log(text.substring(11, 15)); /// last four character in the string
console.log(text.substring(0, 1)); /// first character of the arr

// split method used to convert a string to an arr
let resultArray = text.split("e");
console.log(resultArray);
