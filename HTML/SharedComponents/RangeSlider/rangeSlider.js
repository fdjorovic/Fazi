class RangeSlider extends HTMLElement {
    constructor() {
        super();

        const container = document.createElement('div');
        container.classList.add('border');

        container.classList.add('slidecontainer');
        var label = document.createElement('label');

        if (this.hasAttribute('label')) {
            label.innerHTML = this.getAttribute('label');
        } else {
            label.innerHTML = "Value: "
        }
        container.appendChild(label);
        const slider = document.createElement('input');
        if (this.hasAttribute('min')) {
            slider.setAttribute('min', this.getAttribute('min'));
        } else {
            slider.setAttribute('min', "0");
        }
        if (this.hasAttribute('max')) {
            slider.setAttribute('max', this.getAttribute('max'));
        } else {
            slider.setAttribute('max', "100");
        }
        if (this.hasAttribute('step')) {
            slider.setAttribute('step', this.getAttribute('step'));
        } else {
            slider.setAttribute('step', "00.01");
        }
        if (this.hasAttribute('value')) {
            slider.setAttribute('value', this.getAttribute('value'));
        } else {
            slider.setAttribute('value', "0");
        }
        if (this.hasAttribute('id')) {
            slider.setAttribute('id', this.getAttribute('id'));
        } else {
            slider.setAttribute('id', "1");
        }
        slider.setAttribute('type', 'range');
        var id = slider.getAttribute('id');
        slider.setAttribute('onchange', 'showValue(' + id + ')');

        slider.classList.add('slider');
        container.appendChild(slider);
        var labelValue = document.createElement('label');
        labelValue.innerHTML = slider.getAttribute('value') + '%';
        labelValue.classList.add('result')

        labelValue.setAttribute('id', id + 'label');
        container.appendChild(labelValue);

        var parentId = "fazi";
        if (this.hasAttribute('parentId')) {
            parentId = this.getAttribute('parentId');
        }

        var parentDiv = document.getElementById(parentId);
        parentDiv.appendChild(container);
    }
}
customElements.define('range-slider', RangeSlider);

function showValue(id) {
    var slider = id[1];
    var id = id[1].id;
    var output = document.getElementById(id + 'label');
    output.innerHTML = slider.value + '%';
    slider.oninput = function() {
        output.innerHTML = this.value;
    }
}