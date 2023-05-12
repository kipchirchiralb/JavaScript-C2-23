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
squareNumber(5);
squareNumber("string arg");
squareNumber(54);

// create an object called logger that has a method called log that takes in a string then uses conole.log() to print out the string
const logger = {
  // anonymous function
  log: function (statement) {
    console.log(statement);
  },
};

logger.log("this is me here!!!!!!!!!!!!!!!!!!!!!!");
