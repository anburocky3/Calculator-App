import './style.css';

const equalOperator = document.getElementById('equalOperator');
const clearOperandEl = document.getElementById('clearOperands');
const operand = document.querySelector('#operands');
const finalResult = document.querySelector('#result');
const allNumbers = document.querySelectorAll('[data-operand]');
const allOperands = document.querySelectorAll('[data-operation]');

let currentOperator = '';
let firstOperand = '';

const appendText = (numbers) => {
  operand.innerText += numbers;
};

const setNumberClickListeners = (numEl) => {
  numEl.addEventListener('click', () => {
    appendText(parseInt(numEl.innerText));
  });
};

const setOperations = (operator) => {
  //   console.log(parseInt(finalResult.textContent));
  //   if (parseInt(finalResult.textContent) !== 0) {
  //     console.log('!=0');
  //     currentOperator = operator;
  //     firstOperand = parseInt(finalResult.textContent);
  //     appendText(operator);
  //     const res = operate(operator, firstOperand, 2);
  //     finalResult.innerText = res;
  //   }
};

allNumbers.forEach((numEl) => setNumberClickListeners(numEl));

allOperands.forEach((operationEl) => {
  operationEl.addEventListener('click', () =>
    // setOperations(operationEl.innerText)
    appendText(operationEl.innerText)
  );
});

equalOperator.addEventListener('click', () => {
  const result = eval(operand.innerText);
  finalResult.innerText = result;
});

clearOperandEl.addEventListener('click', () => {
  operand.innerText = '';
  finalResult.innerText = '0';
});

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    case '*':
      return a * b;
    default:
      return 'Not a number';
  }
}
