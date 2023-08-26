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




