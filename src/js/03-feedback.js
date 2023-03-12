import throttle from 'lodash/throttle';

const LOCAL_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};

forma = document.querySelector('.feedback-form');

forma.addEventListener('input', throttle(storageFormData, 500));
forma.addEventListener('submit', onFormSubmit);

reloadPage();

function storageFormData(e) {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  
  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem(LOCAL_KEY);
  formData = {};
}

function reloadPage() {
  if (formData) {
    let { email, message } = forma.elements;
    email.value = formData.email || '';
    message.value = formData.message || '';
  }
}

