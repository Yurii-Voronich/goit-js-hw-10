const formEl = document.querySelector('.js-form');
let dataFromLS = null;
try {
  dataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));
} catch (err) {
  console.log(err);
}

let formData = {
  email: '',
  message: '',
};

const fillFields = ({ email, message }) => {
  formData = dataFromLS;
  if (email !== '' || message !== '') {
    formEl.elements.email.value = email;
    formEl.elements.message.value = message;
  }
};

const onInputHandler = ({ target: currentEl }) => {
  const inputValue = currentEl.value.trim();
  const inputName = currentEl.name;
  formData[inputName] = inputValue;
  try {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  } catch (err) {
    console.log(err);
  }
};

const onSubmitHandler = e => {
  e.preventDefault();
  if (formData.email === '' || formData.message === '') {
    return alert('fill all fields');
  } else console.log(formData);
  formEl.reset();
  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
};

const render = e => {
  if (dataFromLS === null || typeof dataFromLS !== 'object') return;
  fillFields(dataFromLS);
};

formEl.addEventListener('submit', onSubmitHandler);
formEl.addEventListener('input', onInputHandler);
document.addEventListener('DOMContentLoaded', render);
