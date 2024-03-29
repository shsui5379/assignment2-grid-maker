// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected = document.getElementById("selectedColorId").value;

const DEFAULT_COLOR = "white";
const COLOR_NOT_SET = "SELECT";

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
    if (numRows === 0) return alert("No more rows to remove");

    numRows--;

    gridElement.deleteRow(-1);
}

// Remove a column
function removeC() {
    if (numCols === 0) return alert("No more columns to remove");

    numCols--;

    for (let i = 0; i < numRows; i++) {
        gridElement.rows.item(i).deleteCell(-1);
    }
}

// Set global variable for selected color
function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU() {
    if (colorSelected === COLOR_NOT_SET) return alert("Please pick a color from the dropdown menu");

    paintGrid(colorSelected, function (cell) { return cell.style.backgroundColor === DEFAULT_COLOR; });
}

// Fill all cells
function fillAll() {
    if (colorSelected === COLOR_NOT_SET) return alert("Please pick a color from the dropdown menu");

    paintGrid(colorSelected);
}

// Clear all cells
function clearAll() {
    paintGrid(DEFAULT_COLOR);
}

/**
 * Callback to handle coloring a cell
 * @param {Event} e The event of the cell being clicked on
 */
function colorCell(e) {
    if (colorSelected === COLOR_NOT_SET) return alert("Please pick a color from the dropdown menu");

    e.target.style.backgroundColor = colorSelected;
}

/**
 * Sets a cell's initial color and callback handler
 * @param {HTMLTableCellElement} cell Cell to set up
 */
function initializeAttributes(cell) {
    cell.style.backgroundColor = DEFAULT_COLOR;
    cell.addEventListener("click", colorCell);
}

/**
 * Colors all cells in the grid with a given color, based on an optionally defined condition.
 * @param {String} targetColor Target color to paint the whole grid
 * @param {(cell: HTMLTableCellElement) => boolean} condition Function that determines whether a given cell should be colored
 */
function paintGrid(targetColor, condition = function (cell) { return true; }) {
    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
        let row = gridElement.rows.item(rowIndex);

        for (let columnIndex = 0; columnIndex < numCols; columnIndex++) {
            let cell = row.cells.item(columnIndex);

            if (condition(cell)) {
                cell.style.backgroundColor = targetColor;
            }
        }
    }
}