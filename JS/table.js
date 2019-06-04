export class Table {
    constructor(parent, columnData, rowData, Data, rowClick, cellClick) {
        this.parent = parent;
        this.columnData = columnData;
        this.data = Data;
        this.rowClick = rowClick;
        this.rowData = rowData;
        this.cellClick = cellClick;
    }
    generateWithRow() {
        var array = [];

        for (var key in this.data) {
            for (var keyNew in this.data[key])
                array.push(this.data[key][keyNew]);
        }
        var thead = document.createElement('thead');
        var tr = document.createElement('tr');
        this.columnData.forEach(element => {
            let th = document.createElement('th');
            th.setAttribute('scope', 'col');
            th.innerHTML = element;
            tr.appendChild(th);
        });
        thead.appendChild(tr);
        var tbody = document.createElement('tbody');

        var j = 0;
        for (var i = 0; i < this.rowData.length; i++) {
            let tr = document.createElement('tr');
            for (var cellIndex = 0; cellIndex < this.columnData.length; cellIndex++) {
                let cell;
                if (cellIndex === 0) {
                    cell = document.createElement('td');
                    cell.innerHTML = this.rowData[i];
                } else {
                    cell = document.createElement('td');
                    if (this.cellClick) {
                        cell.name = j + i;
                        cell.onclick = (ev) => this.cellClick(cell.name);
                    }
                    cell.innerHTML = array[j + i];
                    j += 10;
                }
                if (this.rowClick) {
                    // tr.setAttribute('onclick', this.rowClick + '(' + i + ')');
                }
                tr.appendChild(cell);
            }
            j = 0;
            tbody.appendChild(tr);
        }
        this.parent.appendChild(tbody);
        this.parent.appendChild(thead);
    }
    generate() {

    }

}

function test(index) {
    alert(index)
}

function testCell(index) {
    alert(index)
}