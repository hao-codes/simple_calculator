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
    return num1 / num2;
};

function operate(operator, num1, num2) {
    return operator == "+" ? add(num1, num2)
        : operator == "-" ? subtract(num1, num2)
            : operator == "×" ? multiply(num1, num2)
                : operator == "÷" ? divide(num1, num2)
                    : "invalid operator"
};


/* Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step. */

let operation;
let num1 = document.querySelectorAll(".digit");

let display = document.getElementById('display');

let num2;

let input;
console.log("----")
let test = "2 + 3";
let op = test.replace(' ', '').match(/\D/g);
console.log(op);


let allButtons = document.querySelectorAll('button')

let currentDisplay;
let lastElement;
let number1;
let number2;
allButtons.forEach(function (e) {

    e.addEventListener('click', function () {

        console.log(e.innerHTML);
        let currentButton = e.className;

        console.log(currentButton);
        if (e.id == "clear-btn") {
            display.innerHTML = "";
            // clear display if clear button is clicked
            
        }
        // add clicked number button to display 
        else if (currentButton == "digit") {
            if (display.innerHTML == "") {
                lastElement = e.innerHTML;
                display.innerHTML = e.innerHTML;
                currentDisplay = display.innerHTML;


            } else {
                lastElement = e.innerHTML;

                display.innerHTML += e.innerHTML;
                currentDisplay = display.innerHTML;
            }
        } else if (currentButton == "operator" && display.innerHTML != "") {
            number1 = currentDisplay;
            operation = e.innerHTML;
            display.innerHTML += e.innerHTML;
            currentDisplay = display.innerHTML;
        } else if (e.id == "getResult") {

            console.log("last element: ", lastElement.toString());
            console.log("number 1: ", number1.toString());
            console.log("operation:", operation.toString());
            let result = operate(operation.trim(),Number(number1), Number(lastElement));
            currentDisplay = result;
            display.innerHTML = currentDisplay;
            console.log("result: ", result.toString());
        }
        console.log(currentDisplay);


    });
});





function fillDisplay() {
    let digits = document.body.getElementsByClassName('digit')
    console.log(typeof digits);
    console.log(digits);
    console.log(digits[0]);
    console.log(digits[0].innerHTML);

    //    display.innerHTML = button.innerHTML;
};

/* function saveOperation { */

// code for delete button - for later use
/* else if (e.id == 'delete-btn') {
    console.log(display.innerHTML)
    currentDisplay = (display.innerHTML).split(" ");
    console.log(currentDisplay);
    console.log("delete");
    currentDisplay.pop()
    console.log("last");
    console.log(currentDisplay[currentDisplay.length - 1]);
    if (["+", "-", "×", "÷"].includes(currentDisplay[currentDisplay.length - 1])) {
        currentDisplay = currentDisplay.join(" ");
        //currentDisplay = currentDisplay+ ' '; 
        currentDisplay = currentDisplay.padEnd(1, ' ');
        console.log(currentDisplay);

    } else {
        console.log(currentDisplay);
        currentDisplay = currentDisplay.join(" ");
    };
    console.log(currentDisplay);
    console.log("last element");
    console.log(lastElement);
    display.innerHTML = currentDisplay; */