"use strict";

const VALIDATE_FORM = formSelector => {
    const FORM_ELEMENT = document.querySelector(formSelector);

        const VALIDATE_OPTIONS = [
            {
                attribute: "pattern",
                isValid: INPUT => {
                    const PATTERN_REGEX = new RegExp(INPUT.pattern);
                    return PATTERN_REGEX.test(INPUT.value);
                },
                errorMessage: (INPUT) => `Looks like this is not an ${INPUT.placeholder}`,
            },
            {
                attribute: "required",
                isValid: INPUT => INPUT.value.trim() !== "",
                errorMessage: (INPUT) => `${INPUT.placeholder} cannot be empty`
            },
        ];
    
        const VALIDATE_SINGLE_FORM_GROUP = formGroup => {
            const INPUT = formGroup.querySelector("input");
            const ERROR_CONTAINER = formGroup.querySelector(".error-text");
            const ERROR_ICON = formGroup.querySelector(".error-icon");

            let formGroupError = false;
            for(const OPTION of VALIDATE_OPTIONS) {
                if(INPUT.hasAttribute(OPTION.attribute) && !OPTION.isValid(INPUT)) {
                    ERROR_CONTAINER.textContent = OPTION.errorMessage(INPUT);
                    ERROR_ICON.classList.remove("hidden");
                    ERROR_CONTAINER.classList.remove("hidden");
                    formGroupError = true;
                }
            }
            if(!formGroupError) {
                // ERROR_CONTAINER.textContent = "";
                ERROR_ICON.classList.add("hidden");
                ERROR_CONTAINER.classList.add("hidden");
            }
        };

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
