let form = document.createElement('form');
form.innerHTML = `
                    <h1 class="heading">palidrome text finder</h1>
                    <input type="text" placeholder="Enter Your Text">
                    <p class="mt-3"></p>`;

let body = document.querySelector("body");
body.innerHTML = '<div class="container main-div"></div>';

let ctnr = document.querySelector(".container");
ctnr.prepend(form)

let inp = document.querySelector("input");
let msg = document.querySelector("p");

const isPalindrome = (str) => {
    let filteredStr = str.toUpperCase().split("").filter(currElem => currElem.charCodeAt() >= 65 && currElem.charCodeAt() <= 90 ? currElem : "");
    let joinedStr = filteredStr.reverse().join("");

    return [joinedStr , filteredStr.reverse().join("")];
};

form.addEventListener("submit" , (evt) => {
    evt.preventDefault();
    let text = isPalindrome(inp.value);
    let [joinedStr , filteredStr] = text;

    if (joinedStr === filteredStr) {
        msg.innerText = `After filtering ${joinedStr} i'm telling you that your entered string ${inp.value} is Palindrome`;
    }

    else{
        msg.innerText = `After filtering ${joinedStr} i'm telling you that your entered string ${inp.value} is not Palindrome`;
    }
});