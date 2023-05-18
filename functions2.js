// a funcion ais a block of code that can be reused
// - just perform an operation
// - sometimes have a return value/result
function greatPerson(name, time) {
  console.log("Good " + time + " " + name);
  return "Good " + time + " " + name;
}

let greeting = greatPerson("albert", "evening");

console.log(greeting);

const isBelowThreshold = (currentValue) => currentValue < 40;

function isAboveThreshold(currentValue) {
  return currentValue > 40;
}

const array1 = [100, 30, 390, 29, 10, 153];

// console.log(array1.every(isBelowThreshold));
// console.log(array1.find(isBelowThreshold)); //

for (let index = 0; index < array1.length; index++) {
  if (array1[index] < 40) {
    console.log("Element " + array1[index] + " is below Threshold");
  } else {
    console.log("Element " + array1[index] + " is above Threshold");
  }
}

array1.forEach(function (elem) {
  if (elem < 40) {
    console.log("Element " + elem + " is below Threshold");
  } else {
    console.log("Element " + elem + " is above Threshold");
  }
});

console.log(array1);
