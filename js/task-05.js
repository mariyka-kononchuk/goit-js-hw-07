const refs = {
    input:document.querySelector('input#name-input'),
    output:document.querySelector('span#name-output'),
}

refs.input.addEventListener('input', onInputText);

function onInputText(event) {
    
    refs.output.textContent = event.currentTarget.value;
    if (refs.output.textContent.length === 0) {
        refs.output.textContent ='незнакомец';
    } 
}



