const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const makeListIngredients = ingredients => {
  return ingredients.map((ingredient) => {
    const itemListEl = document.createElement('li');
    itemListEl.textContent = ingredient;
    return itemListEl;
  });
}

const elements = makeListIngredients(ingredients);

const listEl = document.querySelector('ul#ingredients');
listEl.append(...elements);