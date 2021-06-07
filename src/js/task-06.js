const refs = {
    input:document.querySelector('input#validation-input'),
}

refs.input.addEventListener('blur', onInputBlur); //потеря фокуса
//refs.input.addEventListener('focus', onInputBlur); //определение фокуса

function onInputBlur(event) {
    refs.input.textContent  = event.currentTarget.value;
    
    if (refs.input.textContent.length === Number(refs.input.getAttribute('data-length'))) {
        refs.input.classList.remove('invalid')
        refs.input.classList.add('valid');
    }
    else
    { refs.input.classList.add('invalid') };
    
}
