const refs = {
    input:document.querySelector('#controls input'),
    createBtn:document.querySelector('button[data-action="render"]'),
    clearBtn: document.querySelector('button[data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),
    
}

refs.input.addEventListener('input', onInputNumber);
refs.createBtn.addEventListener('click', onCreateBoxes);
refs.clearBtn.addEventListener('click', onClearBoxes);

let amount = 0;

function onInputNumber(event) {
    amount = event.currentTarget.value;
}

function onCreateBoxes() {
    createBoxes(amount);
 };

function createBoxes(amount) {
    const array = [];
    for (let i = 0; i <amount; i += 1) {
        const divEl = document.createElement('div');

        divEl.style.width = 30 + i*10 + 'px';
        divEl.style.height = 30 + i * 10 + 'px';
        divEl.style.marginTop = 5 + "px";
        divEl.style.marginBottom = 5 + "px";
        divEl.style.backgroundColor = randomBackgroundColor();
        array.push(divEl);
    }
    refs.boxes.append(...array); 
}

function randomBackgroundColor() {
    let r = Math.floor(Math.random() * (256));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
   
    return "rgb(" + r + "," + g +"," + b +")";
}

function onClearBoxes() {
    refs.boxes.innerHTML = '';
}
