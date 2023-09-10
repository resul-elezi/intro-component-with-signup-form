"use strict";

const VALITDATE_FORM = formSelector => {
    const FORM_ELEMENT = document.querySelector(formSelector);

        const VALIDATE_OPTIONS = [

        ]

        const VALIDATE_SINGLE_FORM_GROUP = formGroup => {
            const INPUT = formGroup.querySelector("input");
            const ERROR_CONTAINER = formGroup.querySelector(".error-text");
            const ERROR_ICON = formGroup.querySelector(".error-icon");
        }

    FORM_ELEMENT.setAttribute("novalidate", "");


    FORM_ELEMENT.addEventListener("submit", event => {
        event.preventDefault();
        VALIDATE_ALL_FORM_GROUPS(FORM_ELEMENT);
    });

    const VALIDATE_ALL_FORM_GROUPS = formToValidate => {
        const FORM_GROUPS = Array.from(formToValidate.querySelectorAll(".form-group"));

        FORM_GROUPS.forEach(formGroup => {
            VALIDATE_SINGLE_FORM_GROUP(formGroup);
        });
    }
};

VALIDATE_FORM("#form");
