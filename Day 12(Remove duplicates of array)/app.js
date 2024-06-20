let arr = [12, 4, 87, 5 ,12, 4, 87, 5];
let arr1 = [3, 5, 7, 2, 8 , 3, 5, 7, 2, 8];
let arr2 = [10, 15, 6, 9 , 3 , 10, 15, 6, 9 , 3];
let arr3 = [-3, -1, -7, -2 , -3, -1, -7, -2];
let arr4 = [1.5, 2.3, 3.1, 0.5 , 1.5, 2.3, 3.1, 0.5];
let arr5 = [100, 200, 300, 400, 500 , 100, 200, 300, 400, 500];

const remDup = (arr) => {
  let newArr = [...new Set(arr)];
  return [arr , newArr];
};

console.log(remDup(arr));
console.log(remDup(arr1));
console.log(remDup(arr2));
console.log(remDup(arr3));
console.log(remDup(arr4));
console.log(remDup(arr5));
console.log(remDup([]));