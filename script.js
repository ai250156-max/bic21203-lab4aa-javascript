const userInput = document.getElementById("userInput");
const checkButton = document.getElementById("checkBtn");
const resultDisplay = document.getElementById("result");

function checkInput() {
  const rawValue = userInput.value.trim();

  // Check for empty/whitespace-only input or non-numeric string
  if (rawValue === "" || Number.isNaN(Number(rawValue))) {
    resultDisplay.textContent = "Please enter a valid number!";
    return;
  }

  const num = Number(rawValue);

  if (num < 10) {
    resultDisplay.textContent = "The number is lower than 10";
  } else if (num > 10) {
    resultDisplay.textContent = "The number is higher than 10";
  } else {
    resultDisplay.textContent = "The number is equal to 10";
  }
}

checkButton.addEventListener("click", checkInput);