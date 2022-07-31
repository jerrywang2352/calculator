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

//show user number input  
numbers.forEach((button) => {
    button.addEventListener("click",(e) => {
        currNum += e.target.innerText;
        input.innerText = expression.join(" ") + " "+ currNum; 
    });
}); 

//show user basic math operator input 
operators.forEach((button) => {
    button.addEventListener("click",(e) => {
        if (currNum.length != 0) {
            expression.push(currNum); 
            currNum = ""; 
        }
        if ("+−×÷".split("").includes(expression[expression.length-1])) { //last input was an operator 
            expression[expression.length-1] = e.target.innerText; //change operator 
        } else if (expression.length != 0) {
            expression.push(e.target.innerText); //add operator to expression
        }
        input.innerText = expression.join(" ");
    });
}); 

//decimal point input 
dot.addEventListener("click",() => {
    if (currNum.length === 0) {
        currNum += "0."; 
    } else if (currNum.charAt(currNum.length-1) != "." && !currNum.includes(".")) {
        currNum += "."; 
    }
    input.innerText = expression.join(" ") + " "+ currNum;
})


//Reset current number input  
C.addEventListener("click",() => {
    currNum = ""; 
    if (!"+−×÷".split("").includes(expression[expression.length-1])){ //last input was a number
        expression.pop(); 
    } 
    input.innerText = expression.join(" "); 
});

//Reset Calculator 
AC.addEventListener("click",() => {
    currNum = "";
    expression = []; 
    input.innerText = "0"; 
    results.innerText = ""; 
})

// //Displays solved expression 
// equal.addEventListener("click",()=> {
//     results.innerText = solve(expression); 
// })


// function solve(arr) {
// }

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
