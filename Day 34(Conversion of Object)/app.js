let obj = {};
let obj2 = {
  myName : null,
  myName2 : null,
  myName3: null,
  myName4 : null,
};

const convertObjs = (obj) => {
  let objTOArr = Object.entries(obj);
  let newObj = {};

  for (const val of objTOArr) {
    newObj[val[0]] = val[1];
  }

  return[objTOArr , newObj];
};

console.log(convertObjs(obj));
console.log(convertObjs(obj2));