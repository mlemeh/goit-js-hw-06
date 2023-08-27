const inputText = document.querySelector('#validation-input');
const validLength = Number(inputText.dataset.length);

inputText.classList.add("validation-input");

const handlerCheckValid = () => {
    
    inputText.classList.remove("valid");
    inputText.classList.remove("invalid");
    
    if (inputText.value.length === validLength) {
        inputText.classList.add("valid");
    } else {
        inputText.classList.add("invalid");
    }
}

inputText.addEventListener("blur", handlerCheckValid);


