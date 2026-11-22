// Select paragraph and button using DOM selection methods
const messageParagraph = document.getElementById("message");
const changeButton = document.getElementById("changeBtn");

// Define function to replace paragraph text
function changeMessage() {
  messageParagraph.textContent = "Hello there!";
}

// Attach event listener to the button
changeButton.addEventListener("click", changeMessage);