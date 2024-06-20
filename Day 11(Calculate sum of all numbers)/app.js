const calcSum = (nums) => {
  if (!isNaN(nums) && nums > 0) {
    let numsStr = nums.toString().split("").reduce((accum , currVal) => parseInt(accum) + parseInt(currVal))
    return numsStr;
  }

}

console.log(calcSum(1164));
console.log(calcSum(8954897));
console.log(calcSum(41879));
console.log(calcSum(4933));
console.log(calcSum(879));
console.log(calcSum(987113));