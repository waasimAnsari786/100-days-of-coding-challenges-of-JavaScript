const findOutFibonacci = (num) => {
  if (num === 0) {
    return num;
  }

  else if (num === 1) {
    return num;
  }
  
  return (num - 1) + (num - 2);
};

console.log(findOutFibonacci(0));
console.log(findOutFibonacci(1));
console.log(findOutFibonacci(2));
console.log(findOutFibonacci(3));
console.log(findOutFibonacci(4));
console.log(findOutFibonacci(5));