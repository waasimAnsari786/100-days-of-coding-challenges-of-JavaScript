const passwordValidator = (password) => {
  if (password.length >= 8) {
    let splitedArr = password.split("");
    let lowerElem = splitedArr.some(
      (curVal) =>
        curVal.charCodeAt() >= "a".charCodeAt() &&
        curVal.charCodeAt() <= "z".charCodeAt()
    );
    let upperElem = splitedArr.some(
      (curVal) =>
        curVal.charCodeAt() >= "A".charCodeAt() &&
        curVal.charCodeAt() <= "Z".charCodeAt()
    );
    let digit = splitedArr.some((curVal) => curVal >= 0);

    if (lowerElem && upperElem && digit) {
      return "Password is valid";
    } else {
      return "Your passsword must contain 1 lowercase , 1 uppercase and 1 digit";
    }
  } else {
    return "Your password is too short. It must contain at least 8 characters";
  }
};

console.log(passwordValidator("ansarijihjnqv)O*&^%7E"));
