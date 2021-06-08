const refs = {
    input:document.querySelector('#controls input'),
    createBtn:document.querySelector('button[data-action="render"]'),
    clearBtn: document.querySelector('button[data-action="destroy"]'),
    boxes:document.querySelector('#boxes'),
}

refs.input.addEventListener('input', onInputNumber);
refs.createBtn.addEventListener('click', onCreateBoxes);
refs.clearBtn.addEventListener('click', onClearBoxes);

function onInputNumber(event) {
   amount = Number(event.currentTarget.value);
}
let amount = 0;

function onCreateBoxes() {
   
    const array = [];
   
    for (let i = 0; i < 4; i += 1) {
        const divEl = document.createElement('div');

        divEl.style.width = 30 + i*10 + 'px';
        divEl.style.height = 30 + i * 10 + 'px';
        divEl.style.marginTop = 5 + "px";
        divEl.style.marginBottom = 5 + "px";
        divEl.style.backgroundColor = randomBackgroundColor();
        array.push(divEl);
        console.log(divEl);
    }
    console.log(array);
    refs.boxes.append(...array); 
}

function onClearBoxes() {
    refs.boxes.innerHTML = '';
}

function randomBackgroundColor() {
    let r = Math.floor(Math.random() * (256));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
   
    return "rgb(" + r + "," + g +"," + b +")";
}
