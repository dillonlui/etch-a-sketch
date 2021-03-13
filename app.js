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
    clearGrid(container);
    for (let r = 0; r < num; r++) {
        makeRow();
    }
    for (let c = 0; c < num; c++) {
        makeColumn();
    }
}

container.addEventListener('mouseover', function (e) {
    if (e.target && e.target.className == 'column') {
        e.target.style.backgroundColor = rainbowColor();
    }})

function rainbowColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

btnChange.addEventListener('click', function () {
    let userInput = parseInt(prompt('Please enter new grid dimensions'))
    if (userInput > 0 && userInput <= 64) {
        makeGrid(userInput);
    } else if (userInput <= 0 || userInput > 64) {
        alert('Plese enter a number between 1-64');
    } else { return }
})
btnReset.addEventListener('click', () => makeGrid(container.childElementCount));

// Generates initial 16x16 grid
makeGrid(16);