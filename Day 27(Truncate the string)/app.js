const truncateStr = (str , length) => {
  return length <= 0 ? str : str.slice(0 , length) + '...';
};

console.log(truncateStr('waasim ansari' , 5));
console.log(truncateStr('@fd#$dad%^&* waasim ansari' , 6));
console.log(truncateStr('79fsf5fe21231waasim ansari' , 7));
console.log(truncateStr('<<>"?:"dsfg?:}{|waasim ansari' , 8));
console.log(truncateStr('<<>"?:"dsfg?:}{|waasim ansari' , 0));