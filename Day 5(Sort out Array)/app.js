let arr = [1 , 8 ,9 ,7 , 2 , 3];
let arr2 = [10 , 108 , 59 , 7 , 2 , 13];

const sortOutArray = (arr) => {
    arr.sort((a,b) => a - b)
    return arr;
};

console.log(sortOutArray(arr));
console.log(sortOutArray(arr2));