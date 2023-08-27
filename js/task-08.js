const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
        alert("Мають бути заповненні всі поля.");
    } else {
        const dataLogin = { email, password};
        console.log(dataLogin);
        form.reset();
    }        
}

