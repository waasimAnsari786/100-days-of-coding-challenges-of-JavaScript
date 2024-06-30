let obj = {};
let obj2 = {
  myName : null,
  myName2 : null,
  myName3: null,
  myName4 : null,
};

const remDuplicates = (obj) => {
  let lengthOfObj = Object.keys(obj);
  if (lengthOfObj.length > 0) {
    return 'Your entered object has keys and values'
  }

  return 'Your entered object is empty'
};

console.log(remDuplicates(obj));
console.log(remDuplicates(obj2));