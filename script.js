let display = document.getElementById('display');
let currentInput = '';

function clearDisplay() {
    currentInput = '';
    display.innerText = currentInput;
}

function appendCharacter(char) {
    currentInput += char;
    display.innerText = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        display.innerText = currentInput;
    } catch {
        display.innerText = 'Error';
        currentInput = '';
    }
}

function calculateSquare() {
    try {
        currentInput = Math.pow(eval(currentInput), 2);
        display.innerText = currentInput;
    } catch {
        display.innerText = 'Error';
        currentInput = '';
    }
}
