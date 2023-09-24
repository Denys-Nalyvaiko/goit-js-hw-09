import { Notify } from 'notiflix/build/notiflix-notify-aio';

const promisesFormRef = document.querySelector('.form');

promisesFormRef.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const { delay, step, amount } = event.currentTarget.elements;
  const dealyValue = delay.value;
  const stepValue = step.value;
  const amountValue = amount.value;
  let counter = 0;
  let intervalId = 0;

  setTimeout(() => {
    showPromise();
    intervalId = setInterval(showPromise, stepValue);
  }, dealyValue);

  function showPromise() {
    counter += 1;

    if (counter > Number(amountValue) || Number(amountValue) === 0) {
      clearInterval(intervalId);
      return;
    }

    createPromise(counter, stepValue)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    promisesFormRef.reset();
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}
