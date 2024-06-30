const diffbetwDates = (date1 , date2) => {
  let milisecOfD1 = new Date(date1).getTime();
  let milisecOfD2 = new Date(date2).getTime();
  let count = 0;

  for (let index = milisecOfD2; index < milisecOfD1; index += 86400000) {
    count++;
  }

  return `There are the difference of ${count} days between your date 1 "${date1}" and date 2 "${date2}"`;
};

console.log(diffbetwDates('2024-01-01' , '2023-12-01'));