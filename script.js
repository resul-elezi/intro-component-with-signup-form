'use strict';

const FORM = document.getElementById("form");
const FIRST_NAME = document.getElementById("first-name");
const LAST_NAME = document.getElementById("last-name");
const E_MAIL = document.getElementById("e-mail");
const PASS_W = document.getElementById("password");
const SUBMIT = document.getElementById("submit");

FORM.addEventListener("submit", e => {
    e.preventDefault();

    let firstName = FIRST_NAME.value.trim();
    let lastName = LAST_NAME.value.trim();
    let eMail = E_MAIL.value.trim();
    let passWord = PASS_W.value.trim();
    let passValPat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (firstName === '') {
        errorFunc(FIRST_NAME, "First Name cannot be empty");
        FIRST_NAME.placeholder = ""; // Entferne das Placeholder-Attribut
    } else {
        removeError(FIRST_NAME);
    }

    if (lastName === '') {
        errorFunc(LAST_NAME, "Last Name cannot be empty");
        LAST_NAME.placeholder = ""; // Entferne das Placeholder-Attribut
    } else {
        removeError(LAST_NAME);
    }

    if (eMail === '') {
        errorFunc(E_MAIL, "E-Mail cannot be empty");
        E_MAIL.placeholder = ""; // Entferne das Placeholder-Attribut
    } else {
        if (!eMail.match(passValPat)) {
            errorFunc(E_MAIL, "Looks like this is not an email");
            E_MAIL.style.color = "hsl(0, 100%, 74%)"; // Ändere die Textfarbe
        } else {
            removeError(E_MAIL);
        }
    }

    if (passWord === '') {
        errorFunc(PASS_W, "Password cannot be empty");
        PASS_W.placeholder = ""; // Entferne das Placeholder-Attribut
    } else {
        removeError(PASS_W);
    }
});

function errorFunc(inputElement, message) {
    const FORM_CONTROL = inputElement.parentElement;
    const SPAN = FORM_CONTROL.querySelector("span");
    SPAN.innerText = message;
    inputElement.className += " error-icon";
    SPAN.className += " error-text";
}

function removeError(inputElement) {
    const FORM_CONTROL = inputElement.parentElement;
    const SPAN = FORM_CONTROL.querySelector("span");
    SPAN.innerText = "";
    inputElement.classList.remove("error-icon");
    SPAN.classList.remove("error-text");
}
