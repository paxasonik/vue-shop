// @ts-ignore
import Toastify from "toastify-js";

const declOfNum = (number: number, words: string[]) => {
  return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}

const callSuccess = (text: string) => {
  const successEl = document
    .querySelectorAll("#success-notification-content")[0]
    .cloneNode(true) as HTMLElement;
  successEl.classList.remove("hidden");
  successEl.querySelector<any>(".success-text").innerHTML = text;
  Toastify({
    node: successEl,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
  }).showToast();
}

const callError = (text: string) => {
  const failedEl = document
    .querySelectorAll("#failed-notification-content")[0]
    .cloneNode(true) as HTMLElement;
  failedEl.classList.remove("hidden");
  failedEl.querySelector<any>(".error-text").innerHTML = text;
  Toastify({
    node: failedEl,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
  }).showToast();
}

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export {
  declOfNum,
  callSuccess,
  callError,
  scrollTop,
};