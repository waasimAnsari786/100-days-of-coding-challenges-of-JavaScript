let arr1 = [3, 5, 7, 2, 8 , 56 , 6 , 3, 5, 7, 2, 8 , 56 , 6 , 2 , 2];
let arr2 = [10, 15, 6, 9, 3];
let arr3 = [1, 2, 3, 4, 5];
let arr4 = [100, 200, 300, 400, 500];
let arr5 = [100, 200, 300, 400, 500 , 65];

const findOutMode = (arr) => {
  const obj = {};
  let maxNum = 0;
  let mode;
  for (const elem of arr) {
    obj[elem] = (obj[elem] || 0) + 1;

    if (obj[elem] > maxNum) {
      mode = elem;
    }
  }
  console.log(obj);
  return mode;
};

console.log(findOutMode(arr1));