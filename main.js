const gridContainer = document.querySelector(".grid-container");

// Create 16x16 divs
for (let row = 0; row < 16; row++) {
  for (let col = 0; col < 16; col++) {
    const cell = document.createElement("div");
    cell.setAttribute("class", "grid-cell");
    gridContainer.appendChild(cell);
  }
}

// Selecting grid-cells and addEventListener
let gridCellArray = document.querySelectorAll(".grid-cell");
gridCellArray.forEach((cell) => {
  cell.addEventListener("mouseenter", (e) => {
    cell.style.backgroundColor = "#333";
  });
});

function validateUserInput(userInput) {
  // typeof number
  if (
    typeof userInput !== "number" ||
    Number.isNaN(userInput) ||
    typeof userInput === "undefined"
  )
    return false;
  // below 100, and positive number
  if (userInput > 100 || userInput < 1) return false;

  return true;
}

function resetGrid(userInput) {
  gridContainer.innerHTML = "";
  for (let i = 0; i < userInput; i++) {
    for (let j = 0; j < userInput; j++) {
      const cell = document.createElement("div");
      cell.setAttribute("class", "grid-cell");
      gridContainer.appendChild(cell);
    }
  }
  gridContainer.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
}

function addEventListenerToGridCells(cellArray) {
  cellArray.forEach((cell) => {
    cell.addEventListener(
      "mouseenter",
      (e) => (cell.style.backgroundColor = "#333")
    );
  });
}

// Add a functionality that is used to configure the number of cells
const button = document.querySelector(".button");
// Use prompt to get the value
button.addEventListener("click", (e) => {
  const userInput = +prompt("How many squares per side?\n(Maximum: 100)");
  // returns true if number is valid
  if (validateUserInput(userInput)) {
    resetGrid(userInput);
    gridCellArray = document.querySelectorAll(".grid-cell");
    addEventListenerToGridCells(gridCellArray);
  } else {
    alert("Enter a valid number from 1~100");
  }
});
