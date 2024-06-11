const hashtagGenratorFunc = (str) => {
    let trimmedStr = str.trim();

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

console.log(hashtagGenratorFunc('ready for t20 world cup 2024'));