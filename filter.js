const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
function callbackFnc(word) {
  return word.length > 6;
}
const longWordsOver6Chars = words.filter(callbackFnc);

// console.log(longWordsOver6Chars);
// console.log(words);

// Given an array of numbers, write a function that filters out the even numbers and returns a new array containing only the odd numbers
let numbers = [23, 4, 54, 75, 4, 55, 6, 7, 2];

let oddNumbers = numbers.filter(function (elem) {
  return elem % 2 == 1;
});

let newOddNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 1) {
    newOddNumbers.push(numbers[i]);
  }
}
console.log(oddNumbers);
console.log(newOddNumbers);
