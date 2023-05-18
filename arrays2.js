let numbers = [22, 24, 1, 2, 89, 9, 14];

// mutation

// pop() - mutative/destructive -- changes the original array
// numbers.pop();
// console.log(numbers);

// reverse, includes, indexOf,some, every,reduce,filter,map,forEach -- non-mutative
let reversedNumbers = numbers.reverse();
let includes45 = numbers.includes(45);

console.log(numbers);
console.log(includes45); // false
