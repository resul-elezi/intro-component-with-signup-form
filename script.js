'use strict';

const FORM = document.getElementById("form");
const FIRST_NAME = document.getElementById("first-name");
const LAST_NAME = document.getElementById("last-name");
const E_MAIL = document.getElementById("e-mail");
const PASS_W = document.getElementById("password");
const SUBMIT = document.getElementById("submit");

FORM.addEventListener("SUBMIT", (e) => {
	e.preventDefault();
	
	let firstName = FIRST_NAME.value.trim();
	let lastName = LAST_NAME.value.trim();
	let eMail = E_MAIL.value.trim();
	let passWord = PASS_W.value.trim();
	let passValPat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	if(firstName === ""){
		errorFunc(FIRST_NAME, "First Name cannot be empty");
		document.getElementById("first-name").removeAttribute("placeholder");
	}

	if(lastName === ""){
		errorFunc(LAST_NAME, "Last Name cannot be empty");
		document.getElementById("last-name").removeAttribute("placeholder");
	}

	if(eMail === ""){
        errorFunc(E_MAIL, "E-Mail cannot be empty");
		document.getElementById("e-mail").removeAttribute("placeholder");
    } else if(!eMail.match(passValPat)){
        errorFunc(E_MAIL, "Looks like this is not an email")
    }

	if(passWord === ""){
		errorFunc(PASS_W, "Password cannot be empty");
		document.getElementById("password").removeAttribute("placeholder");
	}
})

function errorFunc(req, message){
	const FORM_CONTROL = req.parentElement;
	const SPAN = FORM_CONTROL.querySelector("span");
	SPAN.innerText = message;
	req.className += "error-icon";
	SPAN.className += "error-text";
	if(req !== E_MAIL){
	   req.value = "";
	} {
        req.style.color = "hsl(0, 100%, 74%)";
     } 
}