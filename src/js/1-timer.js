import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const timerEl = document.querySelector(".timer");
const buttonEl = document.querySelector("button[type='button']");
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates.length > 0) {
      userSelectedDate = selectedDates[0];
      if (userSelectedDate > Date.now()) {
        buttonEl.removeAttribute("disabled");
      } else {
        buttonEl.setAttribute("disabled", "true");
        alert("Please choose a date in the future");
        this.clear();
      };
    };
  },
};
const calendar = flatpickr("#datetime-picker", options);
let userSelectedDate = {};

buttonEl.addEventListener("click", startCountdown);

function startCountdown() {
  const timeAmount = userSelectedDate - Date.now();
  console.log(timeAmount);
  
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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
