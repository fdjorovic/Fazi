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
                    cell.setAttribute('scope', 'row');
                    cell.setAttribute('style', 'text-align:left')
                    cell.innerHTML = this.rowData[i];
                } else {
                    cell = document.createElement('td');
                    if (this.cellClick) {
                        cell.name = j + i;
                        cell.setAttribute('data-label', this.rowData[i]);
                        cell.setAttribute('style', 'text-align:right')
                        cell.onclick = (ev) => this.cellClick(cell.name);
                    }
                    if (cell.name > (array.length - this.rowData.length - 1)) {
                        cell.innerHTML = array[j + i];

                        if (+array[j + i] < 0) {
                            var icon = document.createElement('i');
                            icon.classList.add('fa');
                            icon.classList.add('fa-arrow-down');
                            icon.classList.add('pl-15');
                            cell.appendChild(icon);
                        } else if (+array[j + i] > 0) {
                            var icon = document.createElement('i');
                            icon.classList.add('fa');
                            icon.classList.add('fa-arrow-up');
                            icon.classList.add('pl-15');
                            cell.appendChild(icon);
                        } else {
                            var icon = document.createElement('i');
                            icon.classList.add('fa');
                            icon.classList.add('fa-minus');
                            icon.classList.add('pl-15');
                            icon.classList.add('text-error');
                            cell.appendChild(icon);
                        }

                    } else {

                        cell.innerHTML = array[j + i];
                    }
                    j += this.rowData.length;
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