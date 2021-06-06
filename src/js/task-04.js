
const valueEl = document.querySelector('span#value');
const counterValue = valueEl.textContent;
console.log(counterValue);

//increment

//decrement
const increment = () => {
    const valueEl = document.querySelector('span#value');
    return valueEl.textContent=Number(valueEl.textContent) + 1;
}

const decrement = () => {
    const valueEl = document.querySelector('span#value');
    return valueEl.textContent=Number(valueEl.textContent) - 1;
}

const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.addEventListener('click', increment);

const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener('click', decrement);