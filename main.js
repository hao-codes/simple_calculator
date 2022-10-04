
// functions for  calculations
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

let display = document.getElementById('display');

console.log("----")
let test = "2 + 3";
let op = test.replace(/\s/g, '').match(/\D/g);
console.log(op[0]);


let allButtons = document.querySelectorAll('button')

let currentDisplay;
let lastElement;
/* let number1;
let number2; */
allButtons.forEach(function (e) {

    e.addEventListener('click', function () {

        //console.log(e.innerHTML);
        let currentButton = e.className;

        console.log(currentButton);
        if (e.id == "clear-btn") {
            display.innerHTML = "";
            currentDisplay = "";
            let number1 = "";
            let number2 = "";
            operation ="";
            // clear display if clear button is clicked
            // reset values

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

            // case for longer calculations
            if (currentDisplay.toString().split(' ').length > 1) {
                let temp = currentDisplay.split(' ');
                console.log("tem", temp);
                //calculate first operation and save result as new number1
                number1 = operate(temp[1], Number(temp[0]), Number(temp[2]));
                console.log(number1);
                // round result to 10 decimals
                display.innerHTML = Math.round(number1*100_000_0000)/100_000_0000;
                currentDisplay = number1;
                

            }
            number1 = currentDisplay;
            console.log("num1: again;",number1.toString());
            operation = e.innerHTML;
            display.innerHTML += e.innerHTML;
            currentDisplay = display.innerHTML;
            //console.log("number 1 now: ". number1.toString());
            console.log("currentDisplay: ", currentDisplay);


        } else if (e.id == "getResult") {
            if(display.innerHTML === '') {
                alert("No inputs give, please enter a valid calculation")
            } else {
                console.log("number 1 before: ", number1.toString());

            /*             if(isNaN(Number(number1))) {
                            console.log("is nan: ", number1);
                            let temp = number1.split(" ");
                            console.log("calculate this first", temp)
                            number1 = operate(temp[1], Number(temp[0]), Number(temp[2]));
                            display.innerHTML = number1;
                        } else {
                            console.log("not nan");
                        }; */

                number1 = Number(number1);
                number2 = Number(currentDisplay.split(" ").at(-1));


                console.log("number 1: ", number1.toString());
                console.log("number 2: ", number2.toString());

                let result = operate(operation.trim(), number1, number2);
                currentDisplay = result;
                display.innerHTML = Math.round(currentDisplay*100_000_0000)/100_000_0000;
                console.log("result: ", result.toString());
        }};
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