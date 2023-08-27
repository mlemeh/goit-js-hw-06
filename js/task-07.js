const fontSize = document.querySelector("#font-size-control");
const changeText = document.querySelector("#text");

changeText.style.fontSize = `${fontSize.value}px`;

const handlerChangeFontSize = () => {
    changeText.style.fontSize = `${fontSize.value}px`;
}

fontSize.addEventListener("input", handlerChangeFontSize);

