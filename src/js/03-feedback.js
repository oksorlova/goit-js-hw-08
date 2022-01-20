import throttle from "lodash.throttle";


const formEl = document.querySelector ('.feedback-form');
const inputEl = document.querySelector ('.feedback-form input');
const textareaEl = document.querySelector ('.feedback-form textarea');

formEl.addEventListener ('input', throttle(onFormInput, 500));
formEl.addEventListener ('submit', onFormSubmit);
populateFormItem();



function onFormInput(evt) {
    const mail = evt.currentTarget.email.value;   
    const text = evt.currentTarget.message.value; 
    
    localStorage.setItem("feedback-form-state", JSON.stringify({email: mail, message: text}));
    
    
}
function onFormSubmit (evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    console.log(localStorage.getItem("feedback-form-state"));
    localStorage.removeItem("feedback-form-state");
    
    
}

function populateFormItem() {
    const savedMessage = localStorage.getItem("feedback-form-state");
    const itemValue = JSON.parse(savedMessage);

    if (savedMessage) {
    inputEl.value = itemValue.email;
        textareaEl.value = itemValue.message;

    }
    
}