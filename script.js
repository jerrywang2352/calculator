const numbers = document.querySelectorAll("#number");
const operators = document.querySelectorAll("#operator");  
const AC = document.querySelector(".AC"); 
const C = document.querySelector(".C"); 
const equal = document.querySelector(".equal"); 
const input = document.querySelector(".input"); 
const results = document.querySelector(".results"); 

let expression = [];
let currNum = ""; 

//show user number input  
numbers.forEach((button) => {
    button.addEventListener("click",(e) => {
        currNum += e.target.innerText;
        input.innerText = expression.join(" ") + " "+ currNum; 
        console.log(expression.join(" "));  
    });
}); 

//show user basic math operator input 
operators.forEach((button) => {
    button.addEventListener("click",(e) => {
        if (currNum.length != 0) {
            expression.push(currNum); 
            currNum = ""; 
        }
        if ("+−×÷".split("").includes(expression[expression.length-1])) {
            expression[expression.length-1] = e.target.innerText;
        } else {
            expression.push(e.target.innerText); 
        }
        input.innerText = expression.join(" ");
        console.log(expression.join(" ")); 
    });
}); 

//Reset currNum 
C.addEventListener("click",() => {
    currNum = ""; 
});

//Reset Calculator 
AC.addEventListener("click",() => {
    currNum = "";
    expression = []; 
    input.innerText = "0"; 
    results.innerText = ""; 
})


function operate(a,b,operator) {
    if(operator === "add") {
        return add(a,b);
    } else if(operator === "subtract") {
        return subtract(a,b);
    } else if(operator === "multiply") {
        return multiply(a,b);
    } else if(operator === "divide") {
        return divide(a,b); 
    }
}

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
} 

function multiply(a,b) {
    return a*b;
} 

function divide(a,b) {
    return a/b; 
}
