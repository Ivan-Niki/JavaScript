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






