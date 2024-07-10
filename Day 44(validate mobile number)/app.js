const validateMblNum = (mblNum) => {
    return `${mblNum} ${/^(03[0-4][\d][\d]{7})|(\+923[0-4][\d][\d]{7})$/.test(mblNum.replace(/\s/g , ''))}`;
};

console.log(validateMblNum('+92 300 1234567'));
console.log(validateMblNum('+92 321 9876543'));
console.log(validateMblNum('0321 9876543'));
console.log(validateMblNum('0499 9876543'));
console.log(validateMblNum('+92 30 1234567'));
console.log(validateMblNum('+92 300 12345'));