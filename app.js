const input = document.querySelector("#number");
const submit = document.querySelector("#submit");
const restart = document.querySelector("#restart");
const resP = document.querySelector("#res");
let rightNumber = document.querySelector("#rightNumber");
let knewRes = document.querySelector("#knewRes");
console.log(rightNumber);

let right = 10;

let secretNumber = Math.floor(Math.random() * 101) + 1;
console.log(secretNumber);

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!input.value) {
    alert("You should enter a number");
  } else {
    if (input.value == secretNumber) {
      resP.innerHTML = `Awesome, You <span>knew</span>`;
      knewRes.innerHTML = `You knew ${right}.time`;
      submit.disabled = true;
      input.value = "";
    } else if (input.value > secretNumber) {
      resP.innerHTML = `You should <span>decrease <i class="fa-solid fa-arrow-down icon"></i></span>`;
      right -= 1;
      rightNumber.innerHTML = right;
      input.value = "";
      input.focus();
    } else if (input.value < secretNumber) {
      resP.innerHTML = `You should <span>increase <i class="fa-solid fa-arrow-up icon"></i></span>`;
      right -= 1;
      rightNumber.innerHTML = right;
      input.value = "";
      input.focus();
    }
  }
  if (right === 0) {
    resP.innerHTML = `Unfortunately, You <span>didn't knew</span>`;
    knewRes.innerHTML = `It's not your lucky day.`;
    submit.disabled = true;
    restart.disabled = true;
  }
});

restart.addEventListener("click", (e) => {
  e.preventDefault();
  input.value = "";
  input.focus();
  right = 10;
  secretNumber = Math.floor(Math.random() * 101) + 1;
  console.log(secretNumber);
  submit.disabled = false;
  restart.disabled = false;
  resP.innerHTML = "";
  rightNumber.innerHTML = right;
  knewRes = "You have <span>10</span> rights to find the number";
});

window.addEventListener("load", () => {
  input.focus();
});
