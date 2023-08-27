const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const handlerNameInput = () => {
    if (nameInput.value !== "") {
        nameOutput.textContent = nameInput.value;
    } else {
        nameOutput.textContent = 'Anonymous';
    }
}

nameInput.addEventListener("input", handlerNameInput);
