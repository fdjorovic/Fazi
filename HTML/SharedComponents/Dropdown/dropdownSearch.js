class DropdownSearch extends HTMLElement {
    constructor() {
        super();
        debugger
        var dropdown = document.createElement('div');
        dropdown.classList.add('dropdown');
        var pera = document.createElement('div');
        var img = document.createElement('img');
        img.setAttribute('src', 'dropdown-arrow.png');
        pera.appendChild(img);
        var button = document.createElement('button');
        button.setAttribute('onclick', 'myFunction()');
        button.classList.add('dropbtn');
        button.innerHTML = 'Dropdown';

        dropdown.appendChild(button);

        var mainDiv = document.createElement('div');
        mainDiv.setAttribute('id', 'myDropdown');
        mainDiv.classList.add('dropdown-content');

        var input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'test');
        input.setAttribute('id', 'myInput');
        input.setAttribute('onkeyup', 'filterFunction()');
        mainDiv.appendChild(input);

        var a = document.createElement('a');
        a.setAttribute('href', '#about');
        a.innerHTML = "choose";
        var a1 = document.createElement('a');
        a1.setAttribute('href', '#no');
        a1.innerHTML = "choose1";

        mainDiv.appendChild(a);
        mainDiv.appendChild(a1);
        dropdown.appendChild(mainDiv);
        dropdown.appendChild(pera);
        var testFazi = document.getElementById('fazi');
        testFazi.appendChild(dropdown);
    }
}
customElements.define('dropdown-search', DropdownSearch);

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
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