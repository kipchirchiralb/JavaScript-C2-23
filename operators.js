// arithmetic operators - + * / % ++ --

console.log(2 - 89);
console.log(2 * 89);
console.log(2 / 89);
console.log(2 + 89);
console.log(5 % 3); // modulus -- remianer

// console.log(2++); //post-increment
// console.log(++2); //pre-increment
console.log("increment operators");

let age = 90
console.log(++age); // add 1 to 90/age before using(logging) // 91
console.log(age++); // add 1 to age after the operation // 91
console.log(age); // 92
// let number = age++
// console.log(number)

// console.log(20--); // post-decrement
// console.log(--20);// pre-decrement

// Aginment operators = += -+ *= /=
// 

// Comparison operators  == === != > < >= <=
console.log("comparison operators");
console.log(3 == 3); // true
console.log(3 == "3"); // true -- loose equality check
console.log(3 === "3"); // false -- stict equality check(datatype check)
console.log(3 !== "3"); //false ! negation
console.log(4 >= 4); // true

// logical operators &&(AND) , ||(OR), !(NOT)
console.log("Logical operators");
console.log(!true); // false
console.log(!3 === "3"); // false

// TRUTH TABLE -- AND OR

// T && T - T
// T && F - F
// F && T - F
// F && F - F

// T || T - T
// T || F - T
// F || T - T
// F || F - F

// !T - F

// Ternary operator
// condition ? statement1 : statement2
34>=10 ? console.log("Condition true") : console.log('condition false'); 

