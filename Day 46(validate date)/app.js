const validateDate = (userDate) => {
    let year = new Date(userDate).getFullYear();

    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return /^(19[\d]{2}|20[\d]{2})[\W_](((0[13578]|1[0]|1[2])[\W_]([0][1-9]|[12][\d]|[3][0-1]))|((0[469]|1[1])[\W_]([0][1-9][12][\d]|[3][0]))|((0[2])[\W_]([01][\d]|[2][\d])))$/.test(userDate)
    }

    return /^(19[\d]{2}|20[\d]{2})[\W_](((0[13578]|1[0]|1[2])[\W_]([0][1-9]|[12][\d]|[3][0-1]))|((0[469]|1[1])[\W_]([0][1-9][12][\d]|[3][0]))|((0[2])[\W_]([01][\d]|[2][0-8])))$/.test(userDate)
};

console.log(validateDate('2016/02/29'));
console.log(validateDate('2017/02/28'));
console.log(validateDate('2024/07/08'));
console.log(validateDate('2016-11?30'));
console.log(validateDate('2016-11?00'));