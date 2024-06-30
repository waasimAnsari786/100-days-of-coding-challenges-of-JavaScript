const calcSimpleInterest = (invest , rate , time) => {
  return Math.round(invest * (rate / 100) * time);
};

console.log(calcSimpleInterest(1000 , 5 , 3));
console.log(calcSimpleInterest(2500 , 7 , 4));
console.log(calcSimpleInterest(250003685 , 25 , 10));