let currentInput = '';
let operator = '';
let previousInput = '';
let resultDisplayed = false;

function appendNumber(num) {
  if (resultDisplayed) {
    currentInput = '';
    resultDisplayed = false;
  }
  if (num === '.' && currentInput.includes('.')) return;
  currentInput += num;
  updateDisplay();
}

function appendOperator(op) {
  if (currentInput === '') return;
  if (previousInput !== '') calculate();
  operator = op;
  previousInput = currentInput;
  currentInput = '';
  updateDisplay();
}

function calculate() {
  if (operator === '' || previousInput === '' || currentInput === '') return;
  let expression;
  switch (operator) {
    case '+': expression = parseFloat(previousInput) + parseFloat(currentInput); break;
    case '-': expression = parseFloat(previousInput) - parseFloat(currentInput); break;
    case '*': expression = parseFloat(previousInput) * parseFloat(currentInput); break;
    case '÷': expression = parseFloat(previousInput) / parseFloat(currentInput); break;
    default: return;
  }
  currentInput = expression.toString();
  operator = '';
  previousInput = '';
  resultDisplayed = true;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  previousInput = '';
  resultDisplayed = false;
  updateDisplay();
}

function updateDisplay() {
  let display = document.getElementById('display');
  display.textContent =
    (previousInput ? previousInput + ' ' : '') +
    (operator ? operator + ' ' : '') +
    currentInput;
  if (!display.textContent.trim()) display.textContent = '0';
}

// Initialize display
updateDisplay();