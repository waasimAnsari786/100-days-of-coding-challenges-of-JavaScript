const reverseStr = (str) => {
    let revStr = '';
    for (let index = str.length - 1; index >= 0; index--) {
        revStr += str[index]
    }

    return revStr;
};

console.log(reverseStr('hello world'));