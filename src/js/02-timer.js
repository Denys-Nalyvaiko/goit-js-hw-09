import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
require('flatpickr/dist/themes/dark.css');

// const timerValuesRef = document.querySelectorAll('.value');
const refs = {
  startBtnRef: document.querySelector('[data-start]'),
  timerDaysRef: document.querySelector('[data-days]'),
  timerHoursRef: document.querySelector('[data-hours]'),
  timerMinutesRef: document.querySelector('[data-minutes]'),
  timerSecondsRef: document.querySelector('[data-seconds]'),
};

let intervalId = 1;

refs.startBtnRef.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] - new Date() < 0) {
      Notify.failure('You have to choose date in the future');
      return;
    }

    refs.startBtnRef.disabled = false;
    refs.startBtnRef.addEventListener('click', handleStartBtnClick);

    function handleStartBtnClick() {
      if (selectedDates[0] - new Date() < 0) {
        refs.startBtnRef.disabled = true;
        return;
      }

      intervalId = setInterval(changeTimerData, 1000);

      function changeTimerData() {
        const currentDate = selectedDates[0] - new Date();
        const convertedDate = addLeadingZero(convertMs(currentDate));

        if (currentDate < 0) {
          Notify.success('Winnner!!!');
          clearInterval(intervalId);
          return;
        }

        changeRefsTextContent(convertedDate);
      }

      refs.startBtnRef.disabled = true;
    }
  },
};

flatpickr('#datetime-picker', options);

function changeRefsTextContent({ days, hours, minutes, seconds }) {
  refs.timerDaysRef.textContent = days;
  refs.timerHoursRef.textContent = hours;
  refs.timerMinutesRef.textContent = minutes;
  refs.timerSecondsRef.textContent = seconds;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero({ days, hours, minutes, seconds }) {
  return {
    days,
    hours: hours.toString().padStart(2, '0'),
    minutes: minutes.toString().padStart(2, '0'),
    seconds: seconds.toString().padStart(2, '0'),
  };
}
