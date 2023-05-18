// a callback is a function that is passed as an argument to another function

// =
function completeOperation(x, y, operation) {
  // read the screeen data
  operation(x, y); // calling a function that has been passed as an argument
}
// console.log(x);//not defined
function add(a, b) {
  console.log(a + b);
}
function multiply(a, b) {
  console.log(a * b);
}
function subtract(a, b) {
  console.log(a - b);
}
function divide(a, b) {
  console.log(a / b);
}
completeOperation(12, 1, add);
completeOperation(123, 45, divide);
completeOperation(212, 34, subtract);
