const fizzBuzzFunc = (startNum , endNum) => {
    let arr = []
    for (let i = startNum; i <= endNum; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push('FizzBuzz')
        }

        else if (i % 3 === 0) {
            arr.push('Fizz')
        }

        else if (i % 5 === 0) {
            arr.push('Buzz')
        }

        else {
            arr.push(i)
        }
    }

    return arr;
};

console.log(fizzBuzzFunc(1 , 15));
console.log(fizzBuzzFunc(40 , 150));