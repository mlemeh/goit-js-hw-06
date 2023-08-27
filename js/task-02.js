const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listLi = ingredients.map(item => {
  const li = document.createElement("li");
  li.textContent = item;
  li.classList.add("ietm");
  return li;
})

document.querySelector("#ingredients").append(...listLi)

