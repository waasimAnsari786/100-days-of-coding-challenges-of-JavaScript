const cnvtStrIntoCamelCase = (str) => {
  if (str) {
    let lowerStr = str.toLowerCase().split(" ");
    let finalStr = lowerStr.map((curVal , i) => i > 0 ? curVal.replace(curVal[0] , curVal[0].toUpperCase()) : curVal);
  
    return finalStr.join("");
  }

  else {
    return undefined
  }
};

const cnvtStrIntSnakeCase = (str) => {
  if (str) {
    let splitedStr = str.split(/(?=[A-Z])/);
    let finalval = splitedStr.map((curVal , i) => {
      if (curVal.charCodeAt() >= 'A'.charCodeAt() && curVal.charCodeAt() <= 'Z'.charCodeAt()) {
        return curVal.replace(curVal , curVal.toLowerCase()) 
      }

      else{
        return curVal
      }

    });
    return finalval.join("_");
  }
  else {
    return undefined
  }
};

console.log(cnvtStrIntoCamelCase('waasim ansari programmer'));
console.log(cnvtStrIntoCamelCase('the big dog'));
console.log(cnvtStrIntoCamelCase('never give up'));
console.log(cnvtStrIntoCamelCase('get these hands'));
console.log(cnvtStrIntoCamelCase('the game'));
console.log(cnvtStrIntoCamelCase('THE NEW DAY'));
console.log(cnvtStrIntoCamelCase());


console.log(cnvtStrIntSnakeCase('waasimAnsariProgrammer'));
console.log(cnvtStrIntSnakeCase('helloWorld'));
console.log(cnvtStrIntSnakeCase('myVariableName'));
console.log(cnvtStrIntSnakeCase('fetchDataFromApi'));
console.log(cnvtStrIntSnakeCase('calculateTotalPrice'));
console.log(cnvtStrIntSnakeCase('userProfileSettings'));