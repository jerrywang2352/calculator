/*
VARIABLE INITIALIZATIONS  
*/
const numbers = document.querySelectorAll("#number");
const operators = document.querySelectorAll("#operator");  
const AC = document.querySelector(".AC"); 
const C = document.querySelector(".C"); 
const equal = document.querySelector(".equal"); 
const input = document.querySelector(".input"); 
const results = document.querySelector(".results"); 
const dot = document.querySelector(".dot"); 

let expression = [];
let currNum = ""; 

/*
EVENT LISTENERS  
*/
//activates decimal, numbers, delete buttons
activateButtons(); 

//Reset Calculator 
AC.addEventListener("click",reset)

//Displays solved expression 
equal.addEventListener("click",equalEvent);

/*
FUNCTIONS 
*/
function reset() {
    currNum = "";
    expression = []; 
    input.innerText = "0"; 
    results.innerText = ""; 
    activateButtons(); 
}

function equalEvent() {
    if (currNum.length != 0) {
        expression.push(currNum); 
        currNum = ""; 
    }
    for (let i = 0; i < expression.length-1; i ++) {
        if (expression[i] === "−") {expression[i] = "-";}
        else if (expression[i] === "×") {expression[i] = "*";}
        else if (expression[i] === "÷") {expression[i] = "/";}
    }
    if ("+−×÷".split("").includes(expression[expression.length-1])) { //last input was an operator
        expression.pop(); //delete trailing operator
    }
    input.innerText = ""; 
    results.innerText = parse(expression.join(" "));
    deactivateButtons(); 
}

//activates decimal, numbers, delete buttons
function activateButtons() {
    //show user number input  
    numbers.forEach((button) => {
        button.addEventListener("click",numEvent);
    }); 

    //show user basic math operator input 
    operators.forEach((button) => {
        button.addEventListener("click",operatorEvent);
    }); 

    //decimal point input 
    dot.addEventListener("click",decimalEvent);


    //Reset current number input  
    C.addEventListener("click",clearEvent);
}

//deactivates decimal, numbers, delete buttons
function deactivateButtons() {
    numbers.forEach((button) => {
        button.removeEventListener("click",numEvent);
    }); 

    operators.forEach((button) => {
        button.removeEventListener("click",operatorEvent);
    }); 

    dot.removeEventListener("click",decimalEvent);

    C.removeEventListener("click",clearEvent);
}

function numEvent(e) {
    currNum += e.target.innerText;
    input.innerText = expression.join(" ") + " "+ currNum; 
}

function operatorEvent(e) {
    if (currNum.length != 0) {
        expression.push(currNum); 
        currNum = ""; 
    } else {
        expression.push("0"); 
    }
    if ("+−×÷".split("").includes(expression[expression.length-1])) { //last input was an operator 
        expression[expression.length-1] = e.target.innerText; //change operator 
    } else if (expression.length != 0) {
        expression.push(e.target.innerText); //add operator to expression
    }
    input.innerText = expression.join(" ");
}

function decimalEvent() {
    if (currNum.length === 0) {
        currNum += "0."; 
    } else if (currNum.charAt(currNum.length-1) != "." && !currNum.includes(".")) {
        currNum += "."; 
    }
    input.innerText = expression.join(" ") + " "+ currNum;
}

function clearEvent() {
    currNum = ""; 
    if (!"+−×÷".split("").includes(expression[expression.length-1])){ //last input was a number
        expression.pop(); 
    } 
    input.innerText = expression.join(" "); 
}

//solve expression 
function parse(str) {
    return Function(`'use strict'; return (${str})`)();
}