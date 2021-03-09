const container = document.querySelector('#container');
const btnChange = document.querySelector('#btnChange');
const btnReset = document.querySelector('#btnReset')

function makeRow() {
    let row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
}

function makeColumn() {
    let rows = document.querySelectorAll('.row')

    for (let i = 0; i < rows.length; i++) {
        let column = document.createElement('div');
        column.className = 'column';
        rows[i].appendChild(column);
    }
}

function clearGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function makeGrid(num) {
    if (num > 0 && num <= 64) {
        clearGrid(container);
        for (let r = 0; r < num; r++) {
            makeRow();
        }
        for (let c = 0; c < num; c++) {
            makeColumn();
        }
    } else {
        alert('Please enter a number between 1-64')
    }
}

function rainbowColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
}

container.addEventListener('mouseover', function (e) {
    if (e.target && e.target.className == 'column') {
        e.target.style.backgroundColor = rainbowColor();
    }
})

btnChange.addEventListener('click', function () {
    let userInput = parseInt(prompt('Please enter new grid dimensions'))
    makeGrid(userInput);
})
btnReset.addEventListener('click', () => makeGrid(16));

// Generates 16x16 grid
makeGrid(16);