const valueEl = document.querySelector('span#value');
const counterValue = valueEl.textContent;
console.log(counterValue);

const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.addEventListener('click', increment);

const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener('click', decrement);

function increment  ()  {
    const valueEl = document.querySelector('span#value');
    valueEl.textContent = Number(valueEl.textContent) + 1;
    console.log(valueEl.textContent);
    return valueEl.textContent;
}

function decrement ()  {
    const valueEl = document.querySelector('span#value');
    valueEl.textContent = Number(valueEl.textContent) - 1;
    console.log(valueEl.textContent);
    return valueEl.textContent;
}

