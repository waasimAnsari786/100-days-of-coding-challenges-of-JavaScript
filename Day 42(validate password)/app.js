const checkPasswordFunc = (pswd) => {
        return `${pswd} ${/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[\W_]).{8,}$/.test(pswd)}`
};

console.log(checkPasswordFunc('waasimansari@gmail.com'));
console.log(checkPasswordFunc('waaxdscsc'));
console.log(checkPasswordFunc('waaAAS6^%'));
console.log(checkPasswordFunc('waaWER'));
console.log(checkPasswordFunc('aW4'));