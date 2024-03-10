// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected = document.getElementById("selectedColorId").value;

/**
 * @type {HTMLTableElement}
 */
let gridElement = document.getElementById("grid");

// Add a row
function addR() {
    numRows++;

    // adding the row to the DOM
    let newRow = gridElement.insertRow();

    // adding cells to the row
    for (let i = 0; i < numCols; i++) {
        let newCell = newRow.insertCell();
        initializeAttributes(newCell);
    }
}

// Add a column
function addC() {
    numCols++;

    // adding column to rows
    for (let i = 0; i < numRows; i++) {
        let newCell = gridElement.rows.item(i).insertCell();
        initializeAttributes(newCell);
    }
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU() {
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll() {
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll() {
    alert("Clicked Clear All"); // Replace this line with your code.
}

/**
 * Callback to handle coloring a cell
 * @param {Event} e The event of the cell being clicked on
 */
function colorCell(e) {
    alert("Cell clicked");
}

/**
 * Sets a cell's initial color and callback handler
 * @param {HTMLTableCellElement} cell Cell to set up
 */
function initializeAttributes(cell) {
    cell.style.backgroundColor = "white";
    cell.addEventListener("click", colorCell);
}