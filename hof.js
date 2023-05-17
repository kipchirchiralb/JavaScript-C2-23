function rectangleArea(x, y, units, arr, func) {
  let result = x * y + units + " squared";
  console.log(arr);
  func();
  return result;
}

console.log(
  rectangleArea(29, 15, "m", [1, 2, 3], function () {
    console.log("This is a callback function");
  })
);

// recursion
function recFunc() {
  console.log("I am recursive");
  recFunc();
}
// recFunc();
