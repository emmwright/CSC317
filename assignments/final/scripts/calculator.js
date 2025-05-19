
let calculated = false;

console.log("Javascript is connected");

const numButtons = document.getElementsByClassName('num');
const display = document.getElementById('display');
const clearButton = document.getElementsByClassName('AC')[0]; //get first element with AC class name
const operatorButtons = document.querySelectorAll('.plus, .minus, .multiply, .divide');
const percentButton = document.querySelector('.percentage');
const equalButton = document.querySelector('.equals');
const decimalButton = document.querySelector('.decimal');
const plusMinusButton = document.querySelector('.plus-minus');



for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener('click', () => {
    if (display.textContent === "0" || calculated) {
      display.textContent = numButtons[i].textContent;
      calculated = false; //reset after
    } else {
      display.textContent += numButtons[i].textContent;
    }
  });
}


// clear input
clearButton.addEventListener('click', () => {
  display.textContent = 0;
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    display.textContent += button.textContent;
  });
});

percentButton.addEventListener('click', () => {
  display.textContent += '%';
});




equalButton.addEventListener('click', () => {
  try {
    let expression = display.textContent
      .replace(/x/g, '*')    // replace x with * to times
      .replace(/%/g, '/100'); // replace % with /100 to get percentage

    display.textContent = eval(expression);
    calculated = true;
  } catch {
    display.textContent = "Error";
  }
});


decimalButton.addEventListener('click', () => {
  const lastChar = display.textContent.slice(-1);
  if (lastChar !== ".") { //cannot have two decimals after each other
    display.textContent += ".";
  }
});

plusMinusButton.addEventListener('click', () => {
  if (display.textContent.startsWith("-")) {
    display.textContent = display.textContent.slice(1);
  } else {
    display.textContent = "-" + display.textContent;
  }
});



