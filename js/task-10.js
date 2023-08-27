function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inpNumber = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxMain = document.querySelector('#boxes');

let countBoxes = 0;

btnCreate.addEventListener("click", handlerCreateBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function handlerCreateBoxes() {
  createBoxes(inpNumber.value);
  inpNumber.value = "";
}

function createBoxes(amount) {
  const insertArr = [];

  for (let i = 1; i <= amount; i++){
    const len = 30 + countBoxes * 10;
    const div = `<div style="background-color:${getRandomHexColor()}; width:${len}px; height:${len}px;"></div>`
    insertArr.push(div);
    countBoxes++;
  }
  inpNumber.value = "";

  boxMain.insertAdjacentHTML("beforeend", insertArr.join(" "));
}

function destroyBoxes() {
  boxMain.innerHTML = "";
  countBoxes = 0;
  inpNumber.value = "";
}


