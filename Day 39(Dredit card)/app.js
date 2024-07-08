const chkValidNumberFunc = (creditNum) => {
    let numToStr = Array.from(creditNum).reverse().join("");
    let strToArr = Array.from(numToStr).filter(curVal => curVal !== ' ');
    let filteredArr = strToArr.filter((curVal , i) => {
        if (i % 2 !== 0) {
            return i
        }
    })

    let filteredArr2 = strToArr.filter((curVal , i) => {
        if (i % 2 === 0) {
            return i
        }
    })
    let mulSecondDigit = filteredArr.map(curVal => curVal * 2);
    let subtractedArr = mulSecondDigit.map(curVal => curVal > 9 ? curVal - 9 : curVal);
    let finalArr = [strToArr[0] , ...filteredArr2 , ...subtractedArr];
    let sumOfArr = finalArr.reduce((accum , curVal) => Number(accum) + Number(curVal))
    
    return sumOfArr % 10 === 0 ? `${creditNum} is valid` : `${creditNum} is not valid` ;
};

console.log(chkValidNumberFunc('4539 1488 0343 6467'));
console.log(chkValidNumberFunc('8273 1232 7352 0569'));