const hashtagGenratorFunc = (str) => {
    let trimmedStr = str.toString().trim();

    if (trimmedStr.length > 0) {
        let splitedStr = trimmedStr.split(" ");
        let toUpperCaseStr = splitedStr.map(currElem => currElem.replace(currElem[0] , currElem[0].toUpperCase()));
        let joinedArr = toUpperCaseStr.join("");

        return `#${joinedArr}`;
    }

    else{
        return false
    };
};

console.log(hashtagGenratorFunc(2024));