const printStr = (str, num) => {
  let newStr = "";

  if (str.length === 0) {
    return "Your string has no letters";
  } else if (num > 0) {
    for (let index = 0; index < num; index++) {
      newStr += str;
    }
  } else {
    return str;
  }

  return newStr;
};

console.log(printStr("a", 6));
console.log(printStr('waasim ansari' , 5));
console.log(printStr('@fd#$dad%^&* waasim ansari' , 6));
console.log(printStr('79fsf5fe21231waasim ansari' , 7));
console.log(printStr('<<>"?:"dsfg?:}{|waasim ansari' , 8));
