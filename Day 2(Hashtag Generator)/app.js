let body = document.querySelector("body");
body.innerHTML = `  <h1>Hashtag Generator</h1>

                    <form>
                        <input type='text' placeholder='Enter Your text'>
                    </form>
                    
                    <h3></h3>

                    <button>copy hashtag</button>
`;

let inp = document.querySelector('input');
let msg = document.querySelector("h3");
let form = document.querySelector("form");
let btn = document.querySelector("button");

const hashtagGenratorFunc = (str) => {
    let trimmedStr = str.toString().trim();

    if (trimmedStr.length > 0 || trimmedStr.length < 280) {
        let splitedStr = trimmedStr.split(" ");
        let toUpperCaseStr = splitedStr.map(currElem => currElem.replace(currElem[0] , currElem[0].toUpperCase()));
        let joinedArr = toUpperCaseStr.join("");

        return `#${joinedArr}`;
    }

    else{
        return false
    };
};

const copyHashtagFunc = () => {
    navigator.clipboard.writeText(msg.innerText);
    alert(`Text Copied to the clipboard ${msg.innerText}`);
};

form.addEventListener("submit" , (evt) => {
    evt.preventDefault();
    msg.innerText = hashtagGenratorFunc(inp.value);
});

btn.addEventListener("click" , copyHashtagFunc);