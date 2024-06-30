let arr = [12, 4, 12, 87, 4 , 5 , 87];
let arr1 = [3, 5 , 5 , 3 , 7 , 7 , 2, 8];
let arr2 = ['a', 'b' , 'a' , 'b' , 'c' , 'd' , 'c', 'd'];

const remDuplicates = (arr) => [...new Set(arr)];

console.log(remDuplicates(arr));
console.log(remDuplicates(arr1));
console.log(remDuplicates(arr2));