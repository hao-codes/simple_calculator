/* 
-so start by creating functions for the following items and testing them in your browser’s console.
add,subtract, multiply, divide

-Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
-Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key. */

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1/num2;
};

function operate(operator, num1, num2) {
    return operator == "+" ? add(num1, num2)
            : operator == "-" ? subtract(num1, num2)
            : operator == "*" ? multiply(num1, num2)
            : operator == "/" ? divide(num1, num2)
            : "invalid operator"
};

