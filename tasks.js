// write a function that logs the square of a number passed as a argument

// isNaN() -- return a boolean

// prompt user for a number
function squareNumber(num) {
  if (isNaN(num)) {
    console.log("Argument passed is not a number");
  } else {
    console.log(num ** 2);
  }
  // alert the result
}

// squareNumber(5);
// squareNumber("string arg");
// squareNumber(54);

// create an object called logger that has a method called log that takes in a string then uses conole.log() to print out the string
const logger = {
  // anonymous function
  log: function (statement) {
    console.log(statement);
  },
};

// logger.log("this is me here!!!!!!!!!!!!!!!!!!!!!!");

// Create a function that takes in a number as argument and  determines the day of the week based on a given number. The numbers 1-7 represent the days of the week, where 1 is Monday, 2 is Tuesday, and so on. If the given number is not in the range of 1-7, display an error message.

function getDayOFWeek(number) {
  if (number === 1) {
    console.log("Monday");
  } else if (number === 2) {
    console.log("Tuesday");
  } else if (number === 3) {
    console.log("Wedneday");
  } else if (number === 4) {
    console.log("Thursday");
  } else if (number === 5) {
    console.log("Friday");
  } else if (number === 6) {
    console.log("Saturday");
  } else if (number === 7) {
    console.log("Friday");
  } else {
    console.log("Provide a valid number(1-7)");
  }
}
// getDayOFWeek(70)

// average of array element
// Pure functions
let numbers = [1, 2, 3, 4, 34, 345353, 3434, 5]; // 3

function getAverage(arr) {
  let total = 0;
  let count = arr.length;

  for (let i = 0; i < count; i++) {
    total = total + arr[i];
  }
  console.log(total / count);
  return total / count;
}

getAverage(numbers); // 43604.3
getAverage([90, 23, 45]); // 52.22..
