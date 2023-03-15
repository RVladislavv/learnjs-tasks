function sortTable(table, column, dataType) {
    let tbody = table.querySelector('tbody');
    let rows = [].slice.call(tbody.rows);

    let compare;

    if (dataType === 'number') {
        compare = function (rowA, rowB) {
            return rowA.cells[column].innerHTML - rowB.cells[column].innerHTML;
        };
    } else if (dataType === 'string') {
        compare = function (rowA, rowB) {
            return rowA.cells[column].innerHTML.localeCompare(rowB.cells[column].innerHTML);
        };
    }

    rows.sort(compare);

    rows.forEach(function (row) {
        tbody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    let table = document.getElementById('grid');
    let ths = table.querySelectorAll('thead th');

    ths.forEach(function (th) {
        th.addEventListener('click', function () {
            let column = this.cellIndex;
            let dataType = this.getAttribute('data-type');
            sortTable(table, column, dataType);
        });
    });
});