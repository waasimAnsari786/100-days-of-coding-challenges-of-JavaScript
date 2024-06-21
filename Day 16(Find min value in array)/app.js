let arr = [1 , 2 , 3];
let arr6 = [12, 4, 87, 5];
let arr1 = [3, 5, 7, 2, 8];
let arr2 = [10, 15, 6, 9 , 3];
let arr3 = [-3, -1, -7, -2];
let arr4 = [1.5, 2.3, 3.1, 0.5];
let arr5 = [100, 200, 300, 400, 500];

const findMinVal = (arr) => {
  return Math.min(...arr);
};

console.log(findMinVal(arr));
console.log(findMinVal(arr1));
console.log(findMinVal(arr2));
console.log(findMinVal(arr3));
console.log(findMinVal(arr4));
console.log(findMinVal(arr5));
console.log(findMinVal(arr6));
