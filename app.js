const input = document.querySelector("#number");
const submit = document.querySelector("#submit");
const restart = document.querySelector("#restart");
const resP = document.querySelector("#res");
let secret = document.querySelector("#secret");

let knewRes = document.querySelector("#knewRes");
console.log(rightNumber);

let right = 10;

let secretNumber = Math.floor(Math.random() * 100) + 1;
console.log(secretNumber);

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!input.value) {
    alert("You should enter a number");
  } else {
    if (input.value == secretNumber) {
      resP.innerHTML = `Awesome, You <span>knew <i class="fa-regular fa-face-smile icon"></i></span>`;
      knewRes.innerHTML = `Score : ${right} point`;
      secret.innerHTML = secretNumber;
      submit.disabled = true;
      input.value = "";
      right -= 1;
    } else if (input.value > secretNumber) {
      right -= 1;
      resP.innerHTML = `You should <span>decrease <i class="fa-solid fa-arrow-down icon"></i></span>`;
      knewRes.innerHTML = `Score : ${right} point`;
      input.value = "";
      input.focus();
    } else if (input.value < secretNumber) {
      right -= 1;
      resP.innerHTML = `You should <span>increase <i class="fa-solid fa-arrow-up icon"></i></span>`;
      knewRes.innerHTML = `Score : ${right} point`;

      //   rightNumber.innerHTML = right;
      input.value = "";
      input.focus();
    }
  }
  if (right < 0) {
    resP.innerHTML = `Unfortunately, You <span>didn't knew <i class="fa-regular fa-face-frown icon"></i></span>`;
    knewRes.innerHTML = `It's not your lucky day.`;
    secret.innerHTML = secretNumber;
    submit.disabled = true;
    restart.disabled = false;
    input.classList.remove("submit:hover");
  }

  restart.addEventListener("click", (e) => {
    e.preventDefault();
    input.value = "";
    input.focus();
    right = 10;
    knewRes.innerHTML = right;
    secret.innerHTML = `<span>?</span>`;
    secretNumber = Math.floor(Math.random() * 100) + 1;
    console.log(secretNumber);
    submit.disabled = false;
    restart.disabled = false;
    resP.innerHTML = "";

    knewRes.innerHTML = `You have <span id="rightNumber">${right}</span> rights to find the number`;
  });
});

window.addEventListener("load", () => {
  input.focus();
});
