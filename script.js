let display = document.getElementById('display');
let currentInput = '';
let currentOperation = '';
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function setOperation(operation) {
    if (currentInput === '') return;
    if (firstOperand !== null) calculateResult();
    firstOperand = parseFloat(currentInput);
    currentOperation = operation;
    currentInput = '';
}

function calculateResult() {
    if (firstOperand === null || currentInput === '') return;
    let secondOperand = parseFloat(currentInput);
    let result;
    switch (currentOperation) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    display.value = result;
    firstOperand = null;
    currentInput = result.toString();
}

function clearDisplay() {
    display.value = '';
    currentInput = '';
    firstOperand = null;
    currentOperation = '';
}
