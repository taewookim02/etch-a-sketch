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
const gridCellArray = document.querySelectorAll(".grid-cell");
gridCellArray.forEach((cell) => {
  cell.addEventListener("mouseenter", (e) => {
    cell.style.backgroundColor = "#000";
  });
});

// Add a functionality that is used to configure the number of cells
const button = document.querySelector(".button");
// Limit the number of cells to 100
