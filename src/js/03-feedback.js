import throttle from "lodash.throttle";
import { objData } from './module/objData';
import { jsonParceWhereStorage } from './module/jsonParceWhereStorage';


const formEl = document.querySelector ('.feedback-form');
const inputEl = document.querySelector ('.feedback-form input');
const textareaEl = document.querySelector ('.feedback-form textarea');
const statusStorage = jsonParceWhereStorage("feedback-form-state")

inputEl.addEventListener ('input', throttle(populateFormItem, 500));
textareaEl.addEventListener ('input', throttle(populateFormItem, 500));
formEl.addEventListener ('submit', onFormSubmit);

if(statusStorage){    
    inputEl.value = statusStorage.email;                                             
    textareaEl.value = statusStorage.message;
}


function onFormSubmit (evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
    console.log(objData);
    
    
}

function populateFormItem(evt) {
    objData[evt.target.name] = evt.target.value
    objData[evt.target.name] = evt.target.value
    localStorage.setItem("feedback-form-state", JSON.stringify(objData))
    
}

