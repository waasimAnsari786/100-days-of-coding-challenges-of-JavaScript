let body = document.querySelector("body");
body.innerHTML = `  <h1>Find Longest String</h1>

                    <form>
                        <input type='text' placeholder='Enter Your text'>
                    </form>
                    
                    <p></p>
`;

let inp = document.querySelector('input');
let msg = document.querySelector("p");
let form = document.querySelector("form");

const findLongestStr = (str) => {
    if (str) {
        let trimmedStr = str.trim();

        if (trimmedStr.length > 0) {
            let words = trimmedStr.split(" ");
            
            let longestWord = words.reduce((longest, current) => {
                return current.length > longest.length ? current : longest;
            }, "");

            return longestWord;
        }
    }
    return false;
};

form.addEventListener("submit" , (evt) => {
    evt.preventDefault();
    let text = findLongestStr(inp.value);

    if (text) {
        msg.innerText = `The longest string is ${text}`;
    }

    else{
        msg.innerText = 'Your entered string is incorrect';
    }
});