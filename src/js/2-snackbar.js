import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import imageUrl from '../img/success.svg';
import imageUrl1 from '../img/error.svg';

const formElem = document.querySelector('.form');
formElem.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(formElem.delay.value);
  const stateValue = formElem.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateValue === 'fulfilled') {
        resolve(delay);
      }
       else {
        reject(delay);
      }
      }, delay);
    });

    promise
    .then((delay) => {
      iziToast.success({
        iconUrl: imageUrl,
        message: `Fulfilled promise in ${delay}ms`,
        messageColor: '#ffffff',
        backgroundColor: '#59A10D',
        progressBar: true,
        progressBarColor: '#326101',
        progressBarEasing: 'linear',
        pauseOnHover: true,
        position: 'topRight',
    });
  })
    .catch((delay) => {
      iziToast.error({
        iconUrl: imageUrl1,
        message: `Rejected promise in ${delay}ms`,
        messageColor: '#ffffff',
        backgroundColor: '#EF4040',
        progressBar: true,
        progressBarColor: '#B51B1B',
        progressBarEasing: 'linear',
        pauseOnHover: true,
        position: 'topRight',
      });
    });
});