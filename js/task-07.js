const refs = {
    input:document.querySelector('#font-size-control'),
    span:document.querySelector('span#text'),
}

refs.input.addEventListener('input', onInputText);

function onInputText(event) {
    refs.span.style.fontSize = event.currentTarget.value+'px';
}




