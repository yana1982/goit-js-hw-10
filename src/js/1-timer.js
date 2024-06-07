// flatpickr
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// imageUrl
import imageUrl from '../img/error.svg';

let userSelectedDate;
const dateTimePickerInput = document.querySelector('#datetime-picker');
const startBtnElem = document.querySelector('[data-start]');
const daysSpanElem = document.querySelector('[data-days]');
const hoursSpanElem = document.querySelector('[data-hours]');
const minutesSpanElem = document.querySelector('[data-minutes]');
const secondsSpanElem = document.querySelector('[data-seconds]');
startBtnElem.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = Date.parse(selectedDates[0]);
    if (userSelectedDate < Date.now()) {
      iziToast.error({
        iconUrl: imageUrl,
        message: 'Please choose a date in the future',
        backgroundColor: '#ef4040',
                       messageColor: '#fff',
                       messageSize: '16',
                       imageWidth: 302,
                       close: true,
                       closeOnEscape: true,
                       closeOnClick: true,
                       progressBar: true,
                       progressBarColor: '#b51b1b',
                       transitionIn: 'flipInX',
                       transitionOut: 'flipOutX',
                       position: 'topRight',
                       iconColor: '#FAFAFB',
      });
      startBtnElem.disabled = true;
    } else {
      startBtnElem.disabled = false;
    }
  },
};
flatpickr(dateTimePickerInput, options);

function startCountdown() {
  startBtnElem.disabled = true;
  dateTimePickerInput.disabled = true;
  const intervalId = setInterval(() => {
    let timeLeftMs = userSelectedDate - Date.now();
    
    
    const timeLeft = convertMs(timeLeftMs);
    
    daysSpanElem.textContent = addLeadingZero(timeLeft.days);
    hoursSpanElem.textContent = addLeadingZero(timeLeft.hours);
    minutesSpanElem.textContent = addLeadingZero(timeLeft.minutes);
    secondsSpanElem.textContent = addLeadingZero(timeLeft.seconds);
    if (timeLeftMs <= 1000) {
      clearInterval(intervalId);
      dateTimePickerInput.disabled = false;
    }
  }, 1000);
}
function convertMs(ms) {
      
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  
  const days = Math.floor(ms / day);
  
  const hours = Math.floor((ms % day) / hour);
 
  const minutes = Math.floor(((ms % day) % hour) / minute);
  
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
startBtnElem.addEventListener('click', startCountdown);