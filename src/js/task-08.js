const refs = {
    input:document.querySelector('#controls input'),
    createBtn:document.querySelector('button[data-action="render"]'),
    clearBtn: document.querySelector('button[data-action="destroy"]'),
    boxes:document.querySelector('#boxes'),
}
refs.input.addEventListener('input', onInputNumber);
refs.createBtn.addEventListeneer('click', onCreateBoxes)
refs.clearBtn.addEventListeneer('click', onClearBoxes)

for (i = 1 to i = 8) {
    fff
}

const amount = 0;
function onInputNumber(event) {
    
    amount = event.currentTarget.value;
}

function onCreateBoxes(amount) {
    //  for (i = 1 to i = amount) {
    //const divEl = document.createElement('div');
    
    //divEl.width = 30;
    //divEl.height = 30;
    // divEl.style.backgroundColor = 20;
    
  
    //return divEl;
//}
  //})
    //refs.boxes.append(...elements); 
}

function onClearBoxes() {
    
}

//const makeGallery = images => {
  //return images.map((image) => {
    //const divEl = document.createElement('div');
    
    //divEl.width = 30;
    //divEl.height = 30;
   // divEl.style.backgroundColor = 20;
    
  
    //return divEl;
  //})
//}
//refs.boxes.append(...elements); 