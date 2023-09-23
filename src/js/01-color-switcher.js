const startBtnRef = document.querySelector('[data-start]');
const stopBtnRef = document.querySelector('[data-stop]');
let intervalId = 0;

startBtnRef.addEventListener('click', handleStartBtnClick);
stopBtnRef.addEventListener('click', handleStopBtnClick);

stopBtnRef.disabled = true;
document.body.style.transition = 'background-color 300ms ease-in-out 50ms';

function handleStartBtnClick() {
  document.body.style.backgroundColor = getRandomHexColor();

  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  startBtnRef.disabled = true;
  stopBtnRef.disabled = false;
}

function handleStopBtnClick() {
  clearInterval(intervalId);

  startBtnRef.disabled = false;
  stopBtnRef.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
