let counterValue = 0

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');

const handlerDecrement = () =>  {
    counter.textContent = --counterValue;
}

const handlerIncrement = () =>  {
    counter.textContent = ++counterValue;
}

btnDecrement.addEventListener("click", handlerDecrement);
btnIncrement.addEventListener("click", handlerIncrement);


