// - Most Frequent Word: Identify the word(s) with the highest frequency in the paragraph. Display the word(s) and its frequency. If there are multiple words with the same highest frequency, display all of them.

// split the sence to an array
// remove symbols at the end of the words . : , ; ( )
// make all words lowercase
// compare each word with the rest of the words after it each time keeping its count ----- keep the counts in an array and get the largest count

// console.log("helo(g)".replace(")", "").replace());

let sentence =
  "Longest Word: Find and display the longest word in same the paragraph. In case of multiple words Longest with the same longest same length, display same the first one encountered.";
let sentenceArray = sentence.split(" ");

function cleanWords(arr) {
  let cleanArray = [];
  arr.forEach((word) => {
    [".", ":", ",", ";", ")", "("].forEach((symbol) => {
      if (word.includes(symbol)) {
        word = word.replace(symbol, "");
      }
    });
    word = word.toLowerCase();
    cleanArray.push(word);
  });
  return cleanArray;
}
// console.log(cleanWords(sentenceArray));
const cleanArray = cleanWords(sentenceArray);

let countedWords = [];
let wordCount = [];
cleanArray.forEach((word, index) => {
  if (!countedWords.includes(word)) {
    let count = 1;

    for (
      let nextWordIndex = index + 1;
      nextWordIndex < cleanArray.length;
      nextWordIndex++
    ) {
      if (word === cleanArray[nextWordIndex]) {
        count = count + 1;
      }
    }
    countedWords.push(word);
    wordCount.push(count);
  }
});

const largestCount = Math.max(...wordCount); // spread operator ...

const mostFrequentWord = countedWords[wordCount.indexOf(largestCount)];

console.log(mostFrequentWord, largestCount);
console.log(wordCount);
console.log(countedWords);

let indicesOfMostFrequentWords = [];
wordCount.forEach((count, index) => {
  if (count == largestCount) {
    indicesOfMostFrequentWords.push(index);
  }
});
indicesOfMostFrequentWords.forEach((num) => {
  console.log(countedWords[num]); // word that is appearing most frequently
});

//console.log(Math.max(21, 2, 34, 56, 3, 44, 56, 52));
