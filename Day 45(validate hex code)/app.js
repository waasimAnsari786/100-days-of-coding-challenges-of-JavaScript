const checkHexCode = (clrCode) => {
    return /^#([a-fA-F\d]{3}|[a-fA-F\d]{6})$/.test(clrCode);
};

console.log(checkHexCode('ygygj7654chgf654'));
console.log(checkHexCode('#f654ff'));
console.log(checkHexCode('#e6545adf'));
console.log(checkHexCode('#654ffeas544767'));
console.log(checkHexCode('#1A2B3C'));
console.log(checkHexCode('#FFA07A'));
console.log(checkHexCode('#ZZZ999'));
console.log(checkHexCode('#12345'));