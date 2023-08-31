//Basic Algorithm Scripting

//1. Convert Celsius to Fahrenheit
//The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

//You are given a variable celsius representing a temperature in Celsius. Use the formula mentioned above to help //convert the Celsius temperature to Fahrenheit.
function convertCtoF(celsius) {
  let fahrenheit = (celsius * 9/5 + 32);
  return fahrenheit;
}

convertCtoF(30);

//2. Reverse a String
//Reverse the provided string and return the reversed string.
function reverseString(str) {
  return [...str].reverse().join('');
}

reverseString("hello");

//3. Factorialize a Number
//Return the factorial of the provided integer.
//If the integer is represented with the letter n, a factorial is the product of all positive integers less than or //equal to n.
//Factorials are often represented with the shorthand notation n!
//For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
//Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
  if (num == 0) {
    return (1);
  }
  for (let i = num-1; i >=1; i--) {
    num = num * i
  }
  return num;
}

factorialize(5);


//4. Find the Longest Word in a String
//Return the length of the longest word in the provided sentence.
//Your response should be a number.

function findLongestWordLength(str) {
  let arr = str.split(' ');
  let longestWord = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord) {
      longestWord = arr[i].length;
    }
  }
  return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");


//5. Return Largest Numbers in Arrays
//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array //will contain exactly 4 sub-arrays.
//Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  let result = [];
  for (let i=0; i<arr.length; i++) {
    result.push(Math.max(...arr[i]))
  }
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//6. Confirm the Ending
//Check if a string (first argument, str) ends with the given target string (second argument, target).

//This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of //this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
 
}

confirmEnding("Bastian", "n");

//7. Repeat a String Repeat a String
//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a //positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
  let resultStr = "";
  if (num <= 0) {
    return resultStr;
  } else {
    for (let i=0; i < num; i++) {
      resultStr = resultStr + str;
    }
    return resultStr;
  }
}

repeatStringNumTimes("abc", 3);

//8. Truncate a String
//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return //the truncated string with a ... ending.

function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return (str.slice(0, num) + "...");
  }
  
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


//9. Finders Keepers
//Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. //This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, //return undefined.

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}
  
  
findElement([1, 2, 3, 4], num => num % 2 === 0);

//10. Boo who
//Check if a value is classified as a boolean primitive. Return true or false.
//Boolean primitives are true and false.

function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  }
  return false;
}

booWho(null);


//11. Title Case a Sentence
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in //lower case.
//For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
  let words = str.toLowerCase().split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
return words.join(' ');
}

titleCase("I'm a little tea pot");

//12.Slice and Splice
// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.
// frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5]
// frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"]

function frankenSplice(arr1, arr2, n) {
  let resArray = arr2.slice(0);
  resArray.splice(n, 0, ...arr1);
  return resArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);







