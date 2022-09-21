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


/* Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step. */

let operation;
let num1 = document.querySelectorAll(".digit");

let display = document.getElementById('display');



for(key in num1) {
    console.log(num1[key].innerHTML)
    num1[key].addEventListener('click', fillDisplay(num1[key]));
};



console.log(num1);
console.log(num1["0"])
console.log(typeof num1);
let num2;

let input;



function fillDisplay(button) {
    display.innerHTML = button.innerHTML;
};

/* function saveOperation {

} */



