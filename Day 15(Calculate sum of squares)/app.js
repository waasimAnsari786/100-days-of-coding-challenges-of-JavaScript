let arr = [1 , 2 , 3];
let arr6 = [12, 4, 87, 5];
let arr1 = [3, 5, 7, 2, 8];
let arr2 = [10, 15, 6, 9 , 3];
let arr3 = [-3, -1, -7, -2];
let arr4 = [1.5, 2.3, 3.1, 0.5];
let arr5 = [100, 200, 300, 400, 500];

const calcSumOfSquares = (arr) => {
  let sqrOfElem = arr.map(curVal => curVal ** 2);
  let sumOfArr = sqrOfElem.reduce((accum , curval) => accum + curval)
  return [sqrOfElem , sumOfArr];
};

console.log(calcSumOfSquares(arr));
console.log(calcSumOfSquares(arr1));
console.log(calcSumOfSquares(arr2));
console.log(calcSumOfSquares(arr3));
console.log(calcSumOfSquares(arr4));
console.log(calcSumOfSquares(arr5));
console.log(calcSumOfSquares(arr6));