const gridContainer = document.querySelector("#container");
const maxWidth = 960;
const maxHeight = 960;
let defaultSize = 20;

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener('click', (e) => {
    promptUser();
})

function promptUser(){
    let gridSize = parseInt(prompt("Enter a number between 1-100 for grid size."));

    while (isNaN(gridSize) || gridSize < 1 || gridSize > 100){
        gridSize = parseInt(prompt("Enter a number between 1-100 for grid size."));
    }
    console.log("Compatable number entered!");
    initGrid(gridSize);
}

function initGrid(gridSize){
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
    addRows(gridSize);
}

function addRows(gridSize){
    for (let i = 0; i < gridSize; i++){
        
        let newRow = document.createElement("div");
        newRow.style = "background-color: lightgreen; height: " + maxHeight/gridSize + "px; border: 1px black solid; display: flex;";

        gridContainer.appendChild(newRow);
        addColumns(newRow, gridSize);  
    }
}

function addColumns(row, gridSize){
    for (let i = 0; i < gridSize; i++){
        let newColumn = document.createElement("div");
        newColumn.style = "background-color: black; width: " + maxWidth/gridSize + "px; border: 1px blue solid; margin: -1px;"
        newColumn.classList.toggle("grid");
        row.appendChild(newColumn);

        addColorEvent(newColumn);
    }
}

function addColorEvent(column){
    column.addEventListener("mouseover", (e) => {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let j = 0; j < 6; j++){
            color += letters[Math.floor(Math.random() * 16)];
        }

        column.style.backgroundColor = color;
        console.log(column.style.opacity);
    } )
}

initGrid(defaultSize);

