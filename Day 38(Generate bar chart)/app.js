let arr = [1, 6, 1, 7, 4, 5];
let arr2 = [10, 2, 4, 4, 2, 1 , 9 , 91 , 4];
let arr3 = [1 , 8, 9 , 1, 21, 20 , 6];

const generateBarChart = (arr) => {
    let str = '';
    arr.forEach((curVal , i) => {
        for (let index = 0; index < curVal; index++) {
            str += '*';
        }
        console.log(`${i + 1} : ${str}`);
        str = '';
    });
};

generateBarChart(arr);
console.log('\n\n');
generateBarChart(arr2);
console.log('\n\n');
generateBarChart(arr3);