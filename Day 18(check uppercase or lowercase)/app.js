const CheckLowerCaseOrUpperCase = (charac) => {
  if (charac.charCodeAt() >= 'a'.charCodeAt() && charac.charCodeAt() <= 'z'.charCodeAt()) {
    return `Your character ${charac} is lowercase`
  }

  else if (charac.charCodeAt() >= 'A'.charCodeAt() && charac.charCodeAt() <= 'Z'.charCodeAt()) {
    return `Your character ${charac} is uppercase`
  }
};

console.log(CheckLowerCaseOrUpperCase('a'));
console.log(CheckLowerCaseOrUpperCase('B'));
console.log(CheckLowerCaseOrUpperCase('c'));
console.log(CheckLowerCaseOrUpperCase('D'));
console.log(CheckLowerCaseOrUpperCase('e'));
console.log(CheckLowerCaseOrUpperCase('F'));