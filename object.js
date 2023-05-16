const objectone = {
  prop1: "value",
  prop2: "another value ",
  method1: function () {
    console.log("a function inside an object is called a method");
  },
}; // creating an instance/child of the global Object

// const keys = Object.keys(objectone);

// console.log(objectone);

const childobject = Object.create(objectone); // creating a child object of objectone

childobject.prop2 = "a new value";
childobject.prop3 = "child only property";

// console.log(childobject);

let newArray = [
  "name",
  "age",
  9000,
  ["red", "blue"],
  { val: "value", color: "yellow" },
  68373,
  6262,
];
//  yellow ---- newArray[4].color

console.log(newArray.length);
let name = "Albert";

console.log(name);
console.log(newArray);

// array methods, and string methods
