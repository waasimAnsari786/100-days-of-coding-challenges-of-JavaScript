let arr1 = [3, 5, 7, 2, 8 , 56 , 6];
let arr2 = [10, 15, 6, 9, 3];
let arr3 = [1, 2, 3, 4, 5];
let arr4 = [100, 200, 300, 400, 500];
let arr5 = [100, 200, 300, 400, 500 , 65];

const findOutMedian = (arr) => {
  let sortedArr = arr.sort((a, b) => a - b);
  if (arr.length % 2 !== 0) {
    let median = Math.floor(sortedArr.length / 2);
    return sortedArr[median];
  }

  else{
    let fIndex = Math.floor(sortedArr.length / 2);
    let median = sortedArr[fIndex] + sortedArr[fIndex - 1];
    return median / 2;
  }
};

console.log(findOutMedian(arr1));
console.log(findOutMedian(arr2));
console.log(findOutMedian(arr3));
console.log(findOutMedian(arr4));
console.log(findOutMedian(arr5));