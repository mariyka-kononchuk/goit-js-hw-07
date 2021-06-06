
const messageCategories = 'В списке ' + document.querySelectorAll('li.item').length + ' категории.';
console.log(messageCategories);

const itemEl = document.querySelectorAll('li.item');

itemEl.forEach((item) => {
    console.log('Категория:', item.querySelector('h2').textContent);
    console.log('Количество элементов: ', item.querySelectorAll('li').length);
})

