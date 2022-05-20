const form = document.getElementById('form-register')
const username = document.getElementById('username-reg')
const email = document.getElementById('emailReg')
const emailConfirm = document.getElementById('confirmEmailReg')
const password = document.getElementById('choicePass')
const passConfirm = document.getElementById('confirmPass')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value
    const emailValue = email.value
    const emailConfirmValue = emailConfirm.value
    const passwordValue = password.value
    const passConfirmValue = passConfirm.value

    if (usernameValue === '') {
        setErrorFor(username, "O nome de usuário é obrigatório.");
    } else {
        setsuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, "O E-mail é obrigatório");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Insira um E-mail válido");
    } else {
        setsuccessFor(email);
    }

    if (emailConfirmValue === '') {
        setErrorFor(emailConfirm, "A confirmação é obrigatória");
    } else if (emailConfirmValue !== emailValue) {
        setErrorFor(emailConfirm, "Os E-mails são diferentes");
    } else {
        setsuccessFor(emailConfirm);
    }

    if (passwordValue === '') {
        setErrorFor(password, "A senha é obrigatória");

    } else if (!checkPassword(passwordValue)) {
        setErrorFor(password, "Senha fraca");
    } else {
        setsuccessFor(password);
    }

    if (passConfirmValue === '') {
        setErrorFor(passConfirm, "A confirmação é obrigatória");
    } else if (passConfirmValue !== passwordValue) {
        setErrorFor(passConfirm, "As senhas são diferentes");
    } else {
        setsuccessFor(passConfirm);
    }

    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
        return (formControl.className === "form-control success");
    });

    if (formIsValid) {
        document.getElementById('form-register').submit();
        return true;
    } else {
        console.log("o form n é válido")
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    //adiciona msg
    small.innerText = message;

    //adiciona classe de erro


    formControl.className = "form-control error"

}

function setsuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = "form-control success"
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email);
}

function checkPassword(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
}

