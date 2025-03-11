import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formEl = document.querySelector(".form");
let delay = "";

formEl.addEventListener("input", getDelay);
formEl.addEventListener("click", createNotification);

function getDelay(event) {
    delay = Number(event.currentTarget.elements.delay.value);
}

function createNotification(event) {
    if (event.target.type === "submit") {
        event.preventDefault();
        const state = event.currentTarget.elements.state.value;
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (state === "fulfilled") {
                    resolve(`✅ Fulfilled promise in ${delay}ms`);
                } else {
                    reject(`❌ Rejected promise in ${delay}ms`);
                }
            }, delay);
        });
        promise.then(value => {
            iziToast.success({
                message: value,
                position: "topRight",
                closeOnClick: true,
            });
        });
        promise.catch(error => {
            iziToast.error({
                message: error,
                position: "topRight",
                closeOnClick: true,
            });
        });
    };
}