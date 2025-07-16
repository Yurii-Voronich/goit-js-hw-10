import iziToast from 'izitoast';
const form = document.querySelector('.form');

const onSubmit = e => {
  e.preventDefault();
  const delayValue = Number(form.elements.delay.value);
  const checkboxvalue = form.elements.state.value;
  makePromise(delayValue, checkboxvalue)
    .then(res => {
      iziToast.success({
        position: 'topRight',
        title: 'OK',
        message: `${checkboxvalue} in ${delayValue}ms`,
      });
    })
    .catch(res =>
      iziToast.error({
        position: 'topRight',
        title: 'Error',
        message: `${checkboxvalue} in ${delayValue}ms`,
      })
    );
  form.reset();
};
form.addEventListener('submit', onSubmit);

const makePromise = (value, check) => {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (check === 'fulfilled') res();
      else {
        rej();
      }
    }, value);
  });
  return promise;
};
