let arr = [12, 4, 87, 5];
let arr1 = [3, 5, 7, 2, 8];
let arr2 = [10, 15, 6, 9 , 3];
let arr6 = [10, 15, 6, 9 , 3];
let arr3 = [-3, -1, -7, -2];
let arr4 = [1.5, 2.3, 3.1, 0.5];
let arr5 = [100, 200, 300, 400, 500];

const checkArr = (arr, arr2) => {
  if (arr.length === arr2.length) {
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] !== arr2[index]) {
        return false;
      }
    }

    let newArr = arr.every((curElem , i) => curElem === arr2[i]);
    return [newArr , true];
  }

  else{
    return "your entered array's length are not same";
  }
};

console.log(checkArr(arr2, arr6));
// console.log(calcAver(arr1));
// console.log(calcAver(arr2));
// console.log(calcAver(arr3));
// console.log(calcAver(arr4));
// console.log(calcAver(arr5));
