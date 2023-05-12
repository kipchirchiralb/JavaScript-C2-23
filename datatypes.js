// primitive and non-primitive data types

// primitive -- string, number, boolean, null, undefined

let str = "kjfjugsi'bw'wda++_+#$%$^T&";
// heloo there "albert".
let quote = ' heloo there "albert". ';
// console.log(str);
// console.log(quote);
// syntax rules - govern how we write code
let num1 = 13;
let num2 = 45.09;

// checking type of data -- typeof keyword
console.log(typeof num1); // number
console.log(typeof quote); // string

// boolean - true , false

const isAdmin = true;
const isBlack = false;
console.log(isAdmin); // true
console.log(isBlack); // false

// null
let favColor; // undefined

let favColor2 = null; // null
console.log(favColor2);

// non-primitives -- object, array, function()

//  object
const user = {
  username: "albert",
  age: 36,
  isAmerican: true,
};

// JSON

console.log(user.isAmerican); // dot notaton -- false

// array -- zero indexed
const names = ["albert", "raymond", "victor", "beatrice", "sharon"];

console.log(names[2]); // victor
console.log(names[9]); // undefined

// keywords
// console.log(something); // reference error -- something is not defined

const data = {
  employees: [
    {
      id: 1,
      name: "John Doe",
      position: "Manager",
      salary: 5000,
      skills: ["JavaScript", "React", "Node.js"],
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Developer",
      salary: 4000,
      skills: ["Leadership", "Problem solving", "Project management"],
    },
  ],

  companyName: "Eldohub",
};
// console.log(data.employees[0]);
// log the word Manager from this dataset
console.log(data.employees[0].position); //Manager
// log the salary of the second employee
let employeesArray = data.employees;
let secondEmployee = employeesArray[1];

console.log(secondEmployee.salary); // 4000
// get the last skill for the employee Joh Doe

console.log(data.employees[0].skills[2]); // Node js

// arrays methods  and string methods --objects

// function
function multiplyValueByTen(value) {
  console.log(value * 10);
}
console.log(typeof multiplyValueByTen);

// Assignment

// Rules of naming variables
/**
 * Can only start with an underscore _ or a letter (not allowed to start with number or other speciall characters $%^&*)
 * Variables are case-sensitive i.e.  num is not the same as  Num
 * Cannot contain spaces
 * You can not use js keywords a variables -- e.g. let , const,var, function, console,...
 * */

// passing by value vs passing by refference

// arrays and Objects
