import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");

const KEY_SRORAGE = "feedback-form-state"; 

const onFormInput = () => {
  const emailKey = input.getAttribute('name');
  const messageKey = textarea.getAttribute('name');

  const storageValue = {}

  storageValue[emailKey] = form.elements.email.value;
  storageValue[messageKey] = form.elements.message.value,

  localStorage.setItem(KEY_SRORAGE, JSON.stringify(storageValue));
}

const onFormSubmit = (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(KEY_SRORAGE);
}

const outputFormValue = () => {
  const savedStorageValue = localStorage.getItem(KEY_SRORAGE);
  const parseSavedStorageValue = JSON.parse(savedStorageValue);

   if (savedStorageValue) {
    form.elements.email.value = parseSavedStorageValue.email;
    form.elements.message.value = parseSavedStorageValue.message;
   }
}

outputFormValue();
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);


