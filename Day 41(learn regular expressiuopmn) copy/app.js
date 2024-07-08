// REGEX BASIC SYNTAX

// **lierals** all the characters ("a" , '1', , '%') are called literals in regular expressions

// **meta characters** there are some indiccators in regex that indicates the starting and ending point of regex
// 1. (^): it indicates the start of the string
// 2. ($): it indicates the end of the string
// 3. (.): it indicates that you can use any character

// character classes 
// it is used for defining a set of your values for example if you want tom chaeck that entered string is a set of small characters or not so you cann go for this like
// the syntax will be [a-z] for small characters
// the syntax will be [A-Z] for capital characters
// the syntax will be [0-9] for digits between 0 and 9

// shorthand character classes
// these classes are used for defing the above conditions by using a shorthand property like

// the syntax will be \d for digits
// the syntax will be \D for non-digits

// removing white spaces
// if the user keeps white spaces in your form so you can remove it by using this input very easily
// \s


// \S
// if you will use capita; 'S' in regex, it will point non-white spaces characters


// quantifiers
// these indicators apply a condition for the desired strings.by using these indicators you can check your user's entered data that has it have the desired data or not

// 1. (+) : this indicator sets the condition that user's data must have a desirred string at least (1 or more time in itself)
// 1. (*) : this indicator sets the condition that user's data must have a desirred string at least (0 or more time in itself)
// 1. ({}) : this indicator sets a customixe condition.for example if i write {1,3} this syntax it means user data data must have my desired data at least 1 to 3 times

const checkEmailFunc = (mail) => {
    return `${mail} ${/^[a-zA-Z\d]+(?:[._%+][a-zA-Z\d]+)*@[A-Za-z\d]+\.[A-Za-z]{2,}$/.test(mail)}`
};

console.log(checkEmailFunc('waasimansari@gmail.com'));
console.log(checkEmailFunc('#waasimansari92@gmail.com'));
console.log(checkEmailFunc('744waasimansari92@gmail.com'));
console.log(checkEmailFunc('waasimANSARI92@gmail.com'));
console.log(checkEmailFunc('waasim.ansari92@gmail.com'));
console.log(checkEmailFunc('waasim.....ansari92@gmail.com'));
console.log(checkEmailFunc('waasim_ansari92@gmail.com'));
console.log(checkEmailFunc('waasim%ansari92@gmail.com'));
console.log(checkEmailFunc('waasim$ansari92@gmail.com'));
console.log(checkEmailFunc('waasimansari92@gmail'));