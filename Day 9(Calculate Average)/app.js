let arr = [12 , 4 , 87 , 5];
let arr1 = [3, 5, 7, 2, 8];
let arr2 = [10, 15, 6, 9, 3];
let arr3 = [-3, -1, -7, -2];
let arr4 = [1.5, 2.3, 3.1, 0.5];
let arr5 = [100, 200, 300, 400, 500];

const calcAver = (arr) => {
  let sum = arr.reduce((accum , currVal) => accum + currVal);
  return sum / arr.length;
}

console.log(calcAver(arr));
console.log(calcAver(arr1));
console.log(calcAver(arr2));
console.log(calcAver(arr3));
console.log(calcAver(arr4));
console.log(calcAver(arr5));