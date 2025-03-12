import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formEl = document.querySelector(".form");

formEl.addEventListener("submit", createNotification);

function createNotification(event) {
    if (event.target.type === "submit") {
        event.preventDefault();
        const delay = Number(event.currentTarget.elements.delay.value);
        const state = event.currentTarget.elements.state.value;
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (state === "fulfilled") {
                    resolve(delay);
                } else {
                    reject(delay);
                }
            }, delay);
        });
        promise.then(value => {
            iziToast.success({
                message: `✅ Fulfilled promise in ${value}ms`,
                position: "topRight",
                closeOnClick: true,
            });
        })
            .catch(error => {
                iziToast.error({
                    message: `❌ Rejected promise in ${error}ms`,
                    position: "topRight",
                    closeOnClick: true,
                });
            });
    };
}