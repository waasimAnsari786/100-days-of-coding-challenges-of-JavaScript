const checkTriangle = (ang1 , ang2 , ang3) => {
    if (ang1 === ang2 && ang2 === ang3) {
        return 'Equilateral';
    }

    else if (ang1 === ang2 || ang2 === ang3 || ang1 === ang3) {
        return 'isoceles';
    }

    else if (ang1 !== ang2 && ang2 !== ang3) {
        return 'Scalen';
    }
};

console.log(checkTriangle(2 , 2 , 3));
console.log(checkTriangle(2 , 2 , 2));
console.log(checkTriangle(4 , 1 , 3));