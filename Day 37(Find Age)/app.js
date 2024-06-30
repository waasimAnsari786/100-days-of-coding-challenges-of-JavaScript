const diffbetwDates = (DOB) => {
  let msOfDOB = new Date(DOB).getTime();
  let msOfCurrDate = new Date().getTime();
  let subOfMS = Math.round((msOfCurrDate - msOfDOB) / 86400000);
  let countOfMon = 0;
  let countOfYear = 0;

  for (let index = 30; index < subOfMS; index += 30) {
    countOfMon++;
  }

  for (let index = 365; index < subOfMS; index += 365) {
    countOfYear++;
  }

  let months = Math.floor((subOfMS - countOfYear * 365) / 30);
  let days = subOfMS - countOfMon * 30;

  return `You are ${countOfYear} years , ${months} months and ${days} days old`;
};

console.log(diffbetwDates("2022-01-01"));
console.log(diffbetwDates("1994-01-01"));
console.log(diffbetwDates("2003-12-27"));
console.log(diffbetwDates("2013-5-11"));
