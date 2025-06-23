/*
const answerDisplay = document.getElementById("ans");

let firstNumber = null;
let secondNumber = null;
let operator = null;


for (let i = 1; i <= 9; i++) {
    document.getElementById(`btn${i}`).addEventListener("click", () => {
      if (firstNumber === null) {
        firstNumber = i;
      } else if (operator && secondNumber === null) {
        secondNumber = i;
      }
      updateDisplay();
    });
  }
  



  document.getElementById("btn10").addEventListener("click", () => {
    operator = "+";
    updateDisplay();
  });
   document.getElementById("btn11").addEventListener("click", () => {
    operator = "-";
    updateDisplay();
  });
  document.getElementById("btn12").addEventListener("click", () => {
    operator = "*";
    updateDisplay();
  });
  

  function updateDisplay() {
    if (firstNumber !== null && operator && secondNumber !== null) {
      let result = 0;
      switch (operator) {
        case "+":
          result = firstNumber + secondNumber;
          break;
        case "-":
          result = firstNumber - secondNumber;
          break;
        case "*":
          result = firstNumber * secondNumber;
          break;
      }
      answerDisplay.textContent = `The answer is: ${result}`;
    




firstNumber = null;
    secondNumber = null;
    operator = null;
  } else {
    answerDisplay.textContent = `Selected: ${firstNumber ?? ""} ${operator ?? ""} ${secondNumber ?? ""}`;
  }
}
*/

const answerDisplay = document.getElementById("ans");

let firstNumber = "";
let secondNumber = "";
let operator = null;
let isSecondNumber = false;

// Handle number button clicks (btn1 to btn9)
for (let i = 1; i <= 9; i++) {
  document.getElementById(`btn${i}`).addEventListener("click", () => {
    if (!isSecondNumber) {
      firstNumber += i.toString();
    } else {
      secondNumber += i.toString();
    }
    updateDisplay();
  });
}

// Handle operator buttons
document.getElementById("btn10").addEventListener("click", () => {
  operator = "+";
  isSecondNumber = true;
  updateDisplay();
});
document.getElementById("btn11").addEventListener("click", () => {
  operator = "-";
  isSecondNumber = true;
  updateDisplay();
});
document.getElementById("btn12").addEventListener("click", () => {
  operator = "*";
  isSecondNumber = true;
  updateDisplay();
});

// Optional: Add "=" button if needed
document.getElementById("equalsBtn")?.addEventListener("click", () => {
  calculate();
});

function calculate() {
  if (firstNumber && operator && secondNumber) {
    let result = 0;
    switch (operator) {
      case "+":
        result = parseInt(firstNumber) + parseInt(secondNumber);
        break;
      case "-":
        result = parseInt(firstNumber) - parseInt(secondNumber);
        break;
      case "*":
        result = parseInt(firstNumber) * parseInt(secondNumber);
        break;
    }
    answerDisplay.textContent = `The answer is: ${result}`;
    // Reset for next calculation
    firstNumber = "";
    secondNumber = "";
    operator = null;
    isSecondNumber = false;
  }
}

function updateDisplay() {
  if (firstNumber && operator && secondNumber) {
    answerDisplay.textContent = `${firstNumber} ${operator} ${secondNumber}`;
    calculate();
  } else {
    answerDisplay.textContent = `Selected: ${firstNumber} ${operator ?? ""} ${secondNumber}`;
  }
}
