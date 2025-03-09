import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formEl = document.querySelector(".form");
let delay = "";
let state = "";

formEl.addEventListener("input", getData);
formEl.addEventListener("click", createNotification);

function getData(event) {
    delay = Number(event.currentTarget.delay.value);
    state = event.currentTarget.state.value;
}

function createNotification(event) {
    event.preventDefault();
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(iziToast.success({
                    message: `✅ Fulfilled promise in ${delay}ms`,
                }));
            } else if (state === "rejected") {
                reject(iziToast.error({
                    message: `❌ Rejected promise in ${delay}ms`,
                }));
            }
        }, delay);
    });
}