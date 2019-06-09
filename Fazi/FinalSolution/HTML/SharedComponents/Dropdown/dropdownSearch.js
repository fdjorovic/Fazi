class DropdownSearch extends HTMLElement {
    constructor() {
        super();
        if (this.hasAttribute('parentId')) {
            var parentId = this.getAttribute('parentId');
            var parent = document.getElementById(parentId);
        }
        var container = document.createElement('div');
        container.classList.add('dropdown');

        var button = document.createElement('div');

        button.setAttribute('onclick', 'selectCategorySearch(' + parentId + ')');
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
        dropdown.setAttribute('id', 'dropdown' + parentId);
        dropdown.classList.add('dropdown-content');

        var input = document.createElement('div');
        input.classList.add('display-inline');

        var inpt = document.createElement('input');
        inpt.setAttribute('type', 'text');
        inpt.setAttribute('placeholder', 'Search..');
        inpt.setAttribute('id', 'sliderInput' + parentId);
        inpt.setAttribute('onkeyup', 'filterFunctionSearch(' + parentId + ')');
        inpt.setAttribute('style', 'display:inline')

        inpt.classList.add('sliderInput');
        input.appendChild(inpt);
        dropdown.appendChild(input);


        if (this.hasAttribute('categories')) {
            var stringCategories = this.getAttribute('categories').split(',');
            stringCategories.forEach(element => {
                let a = document.createElement('a');
                a.classList.add('p-16');
                a.innerHTML = element;
                a.setAttribute('href', '#');
                a.setAttribute('onclick', 'selectCategoryFilter(' + element + ',' + parentId + ')');

                dropdown.appendChild(a);
            });
        }
        container.appendChild(dropdown);
        parent.appendChild(container);
    }

}
customElements.define('dropdown-search', DropdownSearch);

function selectCategorySearch(selectedId) {
    document.getElementById("dropdown" + selectedId.id).classList.toggle("show");
}

function selectCategoryFilter(value, parentId) {
    document.getElementById(parentId.id).setAttribute('value', value)
}

function filterFunctionSearch(parentId) {
    var input, filter, ul, li, a, i;
    input = document.getElementById("sliderInput" + parentId.id);
    filter = input.value.toUpperCase();
    div = document.getElementById("dropdown" + parentId.id);
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