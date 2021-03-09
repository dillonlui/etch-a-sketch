const container = document.querySelector('#container');
const btnChange = document.querySelector('#btn');


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
makeGrid(16);

container.addEventListener('mouseover', function (e) {
    if (e.target && e.target.className == 'column') {
        e.target.style.backgroundColor = 'red';
    }
})

btnChange.addEventListener('click', function () {
    alert('you clicked me')
})