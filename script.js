let display = document.getElementById('display');
let currentInput = '0';

function updateDisplay() {
  display.textContent = currentInput;
}

function appendNumber(num) {
  if (currentInput === '0' && num !== '.') {
    currentInput = num;
  } else if (num === '.' && currentInput.includes('.')) {
    return;
  } else {
    currentInput += num;
  }
  updateDisplay();
}

function appendOperator(op) {
  let lastChar = currentInput[currentInput.length - 1];
  if (['+', '-', '*', '/', '%'].includes(lastChar)) {
    currentInput = currentInput.slice(0, -1) + op;
  } else {
    currentInput += op;
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = '0';
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.length > 1 ? currentInput.slice(0, -1) : '0';
  updateDisplay();
}

function calculate() {
  try {
    let result = eval(currentInput);
    currentInput = String(result);
  } catch (error) {
    currentInput = 'Error';
  }
  updateDisplay();
}