const isPowerOf2 = (num) => {
  if (!isNaN(num)) {
    if (num > 0) {
      if (num % 2 === 0) {
        return `Yes! ${num} is power of 2`;
      } else {
        return `No! ${num} isn't power of 2`;
      }
    }
  } else {
    return false;
  }
};

console.log(isPowerOf2(2));
console.log(isPowerOf2(3));
console.log(isPowerOf2(4));
console.log(isPowerOf2(5));
console.log(isPowerOf2(6));
console.log(isPowerOf2(7));
console.log(isPowerOf2("dffgb"));
console.log(isPowerOf2(-5));