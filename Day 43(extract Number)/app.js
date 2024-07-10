const extractNumbers = (str) => {
    let splitedArr = str.split(/\D/);
    return splitedArr.filter(curVal => !isNaN(curVal) && curVal !== '')
};

console.log(extractNumbers('ygygj7654chgf654'));
console.log(extractNumbers('765454 grdrgd 689,997'));
console.log(extractNumbers('7a6v5f4f5r4r'));