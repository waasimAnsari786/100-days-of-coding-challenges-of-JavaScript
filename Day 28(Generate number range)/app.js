const generateRange = (num, range) => {
  let arr = [];

  if (num <= range) {
    for (let index = num; index <= range; index++) {
      arr.push(index);
    }
  } else {
    return `Your entered value ${num} is greater than your entered range ${range}`;
  }

  return arr;
};

console.log(generateRange(50, 40));
