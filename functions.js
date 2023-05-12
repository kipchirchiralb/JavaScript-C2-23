// function are resuable blocks of code {}

function sayName() {
  let name = prompt("What is your name?");
  console.log("Hello " + name);
}

// console.log(typeof sayName);
// call / invoke a function

// sayName();
// sayName();
// sayName();

// area of acirle

// arguments are variables only available inside the function block e.g. radius
function areaOfACircle(radius) {
  console.log("Area of the circle is : " + 3.142 * radius ** 2);
  return 3.142 * radius ** 2;
}

let rad = prompt("Give me a radius of a circle");

alert("The area of that circle of radius " + rad + " is " + areaOfACircle(rad));

// global functions
// alert()
// prompt()
// confirm()

// methods -- a fucntion attached to an object
const user = {
  email: "albert@gmail.com",
  age: 36,
  speak: function speaking() {
    console.log("Hello world, I am Albert and I am 36");
  },
};

// calling the speak method
user.speak();

console.log("somethng");

// everything in js is an object except the primitive datatypes

// write a function that logs the square of a number passed as a argument

// create an object called logger that has a method called log that takes in astring then uses conole.log() to print out the string
