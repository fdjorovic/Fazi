class DropdownSearchCheckbox extends HTMLElement {
    constructor() {
        super();
        var container = document.createElement('div');
        container.classList.add('dropdown');

        var button = document.createElement('div');

        button.setAttribute('onclick', 'selectCategory()');
        button.classList.add('dropbtn');

        var span = document.createElement('span');
        span.classList.add('pr-20');
        span.classList.add('pl-15');
        span.innerText = "Dropdown";

        button.appendChild(span);
        var arrow = document.createElement('div');
        arrow.classList.add('arrow-down');
        var icon = document.createElement('i');
        icon.classList.add('fa');
        icon.classList.add('fa-arrow-down');

        arrow.appendChild(icon);
        button.appendChild(arrow);
        container.appendChild(button);

        var dropdown = document.createElement('div');
        dropdown.setAttribute('id', 'dropdown');
        dropdown.classList.add('dropdown-content');


        var input = document.createElement('div');
        input.classList.add('display-inline');


        var inpt = document.createElement('input');
        inpt.setAttribute('type', 'text');
        inpt.setAttribute('placeholder', 'Search..');
        inpt.setAttribute('id', 'sliderInput');
        inpt.setAttribute('onkeyup', 'filterFunction()');
        inpt.classList.add('sliderInput');

        input.appendChild(inpt);

        dropdown.appendChild(input);

        var selectAll = document.createElement('div');
        selectAll.classList.add('display-inline');
        selectAll.classList.add('pl-10');
        selectAll.classList.add('color-white');

        var labelSelectAll = document.createElement('label');
        labelSelectAll.classList.add('container');

        var checkboxAll = document.createElement('input');
        checkboxAll.setAttribute('type', 'checkbox');
        checkboxAll.setAttribute('checked', 'checked');

        var spanSelectAll = document.createElement('span');
        spanSelectAll.classList.add('checkmark');


        labelSelectAll.appendChild(checkboxAll);
        labelSelectAll.appendChild(spanSelectAll);

        selectAll.appendChild(labelSelectAll);
        var text = document.createTextNode("Select All");
        selectAll.appendChild(text);
        //selectAll.innerHTML = "Select All";
        dropdown.appendChild(selectAll);

        if (this.hasAttribute('parentId')) {
            var parentId = this.getAttribute('parentId');
            var parent = document.getElementById(parentId);
        }
        if (this.hasAttribute('categoryClick')) {
            var categoryClick = this.getAttribute('categoryClick');
        }
        if (this.hasAttribute('checboxClick')) {
            var checboxClick = this.getAttribute('checboxClick');
        }

        if (this.hasAttribute('categories')) {
            var stringCategories = this.getAttribute('categories').split(',');
            stringCategories.forEach(element => {
                let a = document.createElement('a');


                var text = document.createTextNode(element);

                let checkboxLabel = document.createElement('label');
                checkboxLabel.classList.add('container')
                var checkbox = document.createElement('input');
                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('checked', 'checked');
                checkbox.setAttribute('style', 'display:inline');
                checkbox.onclick = (ev) => checboxClick(element);
                //checkbox.setAttribute('onclick', 'checkBoxSelected(' + element.toString() + ')')
                // checkbox.addEventListener("click", checboxClick);

                let span = document.createElement('span');
                span.classList.add('checkmark');
                checkboxLabel.appendChild(checkbox);
                checkboxLabel.appendChild(span);
                a.appendChild(checkboxLabel);
                //a.innerHTML = element;
                a.appendChild(text);
                a.setAttribute('href', '#');
                //a.setAttribute('onclick', 'selectCategoryFilter(' + element + ',' + parentId + ')');
                dropdown.appendChild(a);
            });
        }
        container.appendChild(dropdown);
        parent.appendChild(container);
    }

}
customElements.define('dropdown-checkbox', DropdownSearchCheckbox);

function selectCategory() {
    document.getElementById("dropdown").classList.toggle("show");
}

function selectCategoryFilter(value, parentId) {
    document.getElementById(parentId.id).setAttribute('value', value)
}

function checkBoxSelected(text) {
    alert(text)
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("sliderInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("dropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}