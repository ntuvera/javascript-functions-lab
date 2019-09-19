// Question 1
function maxOfTwoNumbers(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// test:
// console.log(maxOfTwoNumbers(2, 4));

// Question 2
function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

// test:
// console.log(maxOfThree(5, 4, 5));

// Question 3
function isCharacterAVowel(char) {
  let santizedInput = char.toLowerCase();
  if (
    santizedInput == 'a' ||
    santizedInput == 'e' ||
    santizedInput == 'i' ||
    santizedInput == 'o' ||
    santizedInput == 'u'
  ) {
    return true;
  }
  return false;
}

// test:
// console.log(isCharacterAVowel('t'));
// console.log(isCharacterAVowel('i'));

// Question 4: Part 1
function sumArray(arr) {
  let sum = 0;
  arr.map(number => (sum += number));
  return sum;
}

// test:
// console.log(sumArray([1, 2, 3, 4]));
// console.log(sumArray([5, 6, 7, 8]));

// Question 4: Part 2
function multiplyArray(arr) {
  let product = 1;
  arr.map(number => (product *= number));
  return product;
}
// test:
// console.log(multiplyArray([1, 2, 3, 4]));
// console.log(multiplyArray([1, 2, 3, 0]));

// Question 5
const numberOfArguments = function(...args) {
  // can i use process methods/details?
  return arguments.length;
};

// test:
// console.log(numberOfArguments('this', 'that', 3, '5'));
// console.log(numberOfArguments());

// Question 6
const reverseString = function(str) {
  return str
    .split('')
    .reverse()
    .join('');
};

// const altReverseString = function(str) {
//   return str;
// };

// test:
console.log(reverseString('happy'));
// console.log(alrReverseString('hangry'));

// Question 7
function findLongestWord(arr) {
  let longestLength = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestLength) {
      longestLength = arr[i].length;
    }
  }
  return longestLength;
}

// test:
const wordArray = ['happy', 'excited', 'sad'];
const wordArray2 = ['no', 'meh', 'sad'];
// console.log(findLongestWord(wordArray));
// console.log(findLongestWord(wordArray2));

// Question 8
function filterLongWords(arr, count) {
  let filteredArr = [];
  arr.map(item => {
    if (item.length > count) {
      filteredArr.push(item);
    }
  });
  return filteredArr;
}
function altFilterLongWords(arr, count) {
  return arr.filter(item => item.length > count);
}

// test:
// console.log(filterLongWords(wordArray, 4));
// console.log(altFilterLongWords(wordArray2, 4));

// Bonus 1
function charactersOccurencesCount(str) {
  let obj = {};
  str
    .toLowerCase()
    .split('')
    .map((x, y) => (obj[x] = y));

  // console.log(str.split());
  return obj;
}

console.log(charactersOccurencesCount('GeneralAssembly'));
