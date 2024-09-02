const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const isREquired = [...document.querySelectorAll(".login-form input")].some(
        (input) => input.value === ""
    );

    if (isREquired) {
        alert("All form fields must be filled in");
        return;
    }

    const values = {
        email: form.elements.email.value.trim(),
        password: form.elements.password.value.trim(),
    };

    console.log(values);
    form.reset();
});
