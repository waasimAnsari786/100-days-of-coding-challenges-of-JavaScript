let body = document.querySelector("body");
body.innerHTML = `  <h1>Character Counter</h1>

                    <form>
                        <input type='text' placeholder='Enter Your text'>
                    </form>
                    
                    <h3></h3>
`;

let inp = document.querySelector('input');
let msg = document.querySelector("h3");
let form = document.querySelector("form");

const charCounterFunc = (str , char) => {
    let newStr = str.trim();
    let newChar = char.toLowerCase();

    if (newStr.length > 0 && char) {
        newStr = str.toLowerCase().split("");
        newStr = newStr.filter(currElem => currElem === newChar);
        return [newStr.length , newChar];
    }
};

form.addEventListener("submit" , (evt) => {
    evt.preventDefault();
    let [newStr , newChar] = charCounterFunc(inp.value , "a");
    msg.innerText = `${newChar} has repeated at ${newStr} times in your entered string`;
});