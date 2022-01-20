import throttle from "lodash.throttle";

const inputEl = document.querySelector('.feedback-form input')
const textareaEl = document.querySelector('.feedback-form textarea')
const formEl = document.querySelector('.feedback-form')
const parseData = JSON.parse(localStorage.getItem("feedback-form-state"))
let value = {};

if (localStorage.getItem("feedback-form-state")) { 
    value =  parseData;
    if (parseData.email)
    { inputEl.value = parseData.email };
    if (parseData.message)
    { textareaEl.value = parseData.message };
}


formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500) );

function onFormSubmit(evt) {
    evt.preventDefault();
    if (localStorage.getItem("feedback-form-state")) { 
        const formObject = {};
        formObject[inputEl.name] = inputEl.value;
        formObject[textareaEl.name] = textareaEl.value;
        console.log(formObject);
        
    }
    
   evt.currentTarget.reset()
    localStorage.removeItem("feedback-form-state")
    
}

function onFormInput(evt) {
    value[evt.target.name] = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(value));
    
}


