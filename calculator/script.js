const calculator = {
    displayNumber: "0",
    firstOperand: "",
    SecondOperand: "",
    operator: null,
    result:""
}

const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".keys");
const operators = document.querySelectorAll(".operator");

numbers.forEach(function(number) {
    number.addEventListener("click", function() {
        addNumber(number.innerHTML);
    });
});

operators.forEach(function(operator) {
    operator.addEventListener("click", function () {
        addOpertor(operator.innerHTML);
    });
});

function displayValue(value) {
    display.innerHTML = value;
}

function addNumber(number) {
    if (calculator.result != "") {
        calculator.firstOperand = calculator.result;
        calculator.SecondOperand += number;
        displayValue(calculator.SecondOperand);
    } else if ((calculator.firstOperand == "") & (calculator.SecondOperand == "") & (calculator.operator != null)) {
        calculator.firstOperand += "-";
        displayValue(calculator.firstOperand);
    } else if ((calculator.firstOperand == "") | (calculator.operator == null)) {
        calculator.firstOperand += number;
        displayValue(calculator.firstOperand);
    } else if((calculator.SecondOperand == "") | (calculator.operator != null)) {
        calculator.SecondOperand += number;
        displayValue(calculator.SecondOperand);
    }
}

function addOpertor(value) {
    calculator.operator = value;
    displayValue(value);
}

function performCalCulation () {
    if ((calculator.firstOperand != "") & (calculator.SecondOperand != "")) {
        switch(calculator.operator) {
            case "+":
                calculator.result = parseFloat(calculator.firstOperand) + parseFloat(calculator.SecondOperand);
                break;
            case "-":
                calculator.result = parseFloat(calculator.firstOperand) - parseFloat(calculator.SecondOperand);
                break;
            case "*":
                calculator.result = parseFloat(calculator.firstOperand) * parseFloat(calculator.SecondOperand);
                break;
            case "/":
                calculator.result = parseFloat(calculator.firstOperand) / parseFloat(calculator.SecondOperand);
                break
            default:
                break;
        }
    } else {
        clears();
    }
    displayValue(calculator.result);
    calculator.firstOperand = "";
    calculator.SecondOperand = "";
}

function clears() {
    calculator.firstOperand = "";
    calculator.SecondOperand = "";
    calculator.operator = null;
    calculator.result = "";
    displayValue(calculator.firstOperand);
}