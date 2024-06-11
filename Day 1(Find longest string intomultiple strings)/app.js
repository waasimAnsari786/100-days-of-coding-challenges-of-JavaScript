const findLongestStr = (str) => {
    if (str) {
        let trimmedStr = str.trim();

        if (trimmedStr.length > 0) {
            let words = trimmedStr.split(" ");
            
            let longestWord = words.reduce((longest, current) => {
                return current.length > longest.length ? current : longest;
            }, "");

            return longestWord;
        }
    }
    return false;
};

// Test the function
console.log(findLongestStr('      = ddefcvf cmdj 4884 4 true !@# @#$ +)(^&^( ccvdvbf d7644cvfvbjho vsdfvs849c _)(*&)dgddg6486^&^*()        ')); // Expected output: d7644cvfvbjho
console.log(findLongestStr('        ')); // Expected output: false
console.log(findLongestStr('')); // Expected output: false