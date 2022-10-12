import './style.css';

const equalOperator = document.getElementById('equalOperator');
const clearOperandEl = document.getElementById('clearOperands');
const operand = document.querySelector('#operands');
const finalResult = document.querySelector('#result');
const allNumbers = document.querySelectorAll('[data-operand]');
const allOperands = document.querySelectorAll('[data-operation]');

const appendText = (numbers) => {
  operand.innerText += numbers;
};

const getOnlyNumbersAndOperands = (e) => {
  if (
    (e.which >= 48 && e.which <= 57) ||
    (e.keyCode >= 96 && e.keyCode <= 111) ||
    e.keyCode === 13
  ) {
    if (e.keyCode === 13) evaluate();
    else appendText(e.key);
  } else {
    return false;
  }
};

const appendTextFunc = (e) => {
  if (e.type === 'click') {
    appendText(e.target.innerText);
  } else if (e.type === 'keydown') {
    getOnlyNumbersAndOperands(e);
  }
};

const setNumberClickListeners = (numEl) => {
  numEl.addEventListener('click', appendTextFunc);
};

allNumbers.forEach((numEl) => setNumberClickListeners(numEl));

allOperands.forEach((operationEl) => {
  operationEl.addEventListener('click', appendTextFunc);
});

equalOperator.addEventListener('click', () => {
  evaluate();
});

const clearData = (e) => {
  operand.innerText = '';
  finalResult.innerText = '0';
};

clearOperandEl.addEventListener('click', clearData);

document.body.addEventListener('keydown', appendTextFunc);
document.body.addEventListener('keydown', (e) => {
  if (e.key === 'Delete') {
    clearData();
  }
});

document.body.addEventListener('keydown', (e) => {
  if (e.key === 'Backspace') {
    const sliced = operand.innerText.slice(0, -1);
    operand.innerText = sliced;
  }
});

function evaluate() {
  const result = eval(operand.innerText);
  finalResult.innerText = result;
}
