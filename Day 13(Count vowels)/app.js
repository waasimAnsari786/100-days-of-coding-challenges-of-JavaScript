const countVowels = (str) => {
  if (isNaN(str)) {
    let lowerCaseStr = str.toLowerCase();
    let count = 0;
    for (const char of lowerCaseStr) {
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        count++
      }
    }
    
    return `There are ${count} vowels in your entered string`
  }
};

console.log(countVowels("ThIs Is A TeSt SeNtEnCe."));
console.log(countVowels("AnOtHeR ExAmPlE StRiNg WiTh MiXeD CaSe."));
console.log(countVowels("PyThOn PrOgRaMmInG Is FuN!"));
console.log(countVowels("OpEnAi Is CrEaTiNg AmAzInG TeChNoLoGy."));
console.log(countVowels("CoMpUtEr ScIeNcE Is ThE FuTuRe."));