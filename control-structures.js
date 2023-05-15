// control structures -- sequence , conditional statments and loops

// conditional statements

// if else
let age = 40;

if (age > 65) {
  console.log("You should be retired");
} else if (age > 18) {
  console.log("Your  should be working");
} else if (age > 4) {
  console.log("You should be at school ");
} else {
  console.log("You should be at home");
}

let age2 = 90;
if (age2 > 65) {
  console.log("You should be retired");
} else if (age2 < 18) {
  if (age2 < 4) {
    console.log("Your  should be at home/daycare ");
  } else {
    console.log("Your  should be at school");
  }
} else {
  console.log("You are working");
}

// switch statement
let category = "C";

switch (category) {
  case "A":
    console.log("Retired");
    break;
  case "B":
    console.log("Working");
    break;
  case "C":
    console.log("School");
    break;
  default:
    console.log("Daycare");
    break;
}

// loops/iteration
let cars = ["CX-5", "Honda Fit", "T Probox", "Imprezza"];

// for loop

for (let start = 0; start < 900; start += 50) {
  console.log("Start is at " + start);
}

// for elem in arr/object -- looping throuhg elements of an array/object

for (let car in cars) {
  console.log("Execute!!");
  console.log(cars[car]); // car names
}

// while loop

let number = 5;
while (number < 10) {
  console.log("Excecuting !!!!!!!!");
  number++;
}
console.log("Other code");

//do while loop
