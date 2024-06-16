let body = document.querySelector("body");
body.innerHTML = `<div class="container">
                    <h1 class="heading">find factorial</h1>
                    <form>
                        <input type="text" class="inp" placeholder="enter your text"/>
                    </form>
                    <p class="msg"></p>
                </div>`;

let msg = document.querySelector(".msg");
let form = document.querySelector("form");
let inp = document.querySelector("input");

const findFactorial = (num) => {
  if (isNaN(num) || num < 0) {
    return false;
  } else if (num === '0' || num === '1') {
    return 1;
  } else {
    for (let index = num - 1; index > 0; index--) {
      num *= index;
    }

    return num;
  }
};

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let fact = findFactorial(inp.value);
  if (fact) {
    msg.innerText = `factorial of ${inp.value} is ${fact}`;
  } else {
    msg.innerText = "enter a integer value";
  }
});
