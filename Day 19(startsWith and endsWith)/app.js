const checkStr = (str , word) => {
    if (str.toLowerCase().startsWith(word.toLowerCase())) {
        return `Yes! your string ${str} start with your word ${word}` 
    }

    else{
        return `No! your string ${str} isn't start with your word ${word}` 
    }
}

console.log(checkStr('hello world' , 'world'));