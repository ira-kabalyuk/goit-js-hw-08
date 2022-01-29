import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");

const KEY_SRORAGE = "feedback-form-state"; 

 const storageValue = {};

const onFormInput = (event) => { 

  storageValue[event.target.name] = event.target.value;
  localStorage.setItem(KEY_SRORAGE, JSON.stringify(storageValue));
}

const onFormSubmit = (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(KEY_SRORAGE);
}

const outputFormValue = (event) => {
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


