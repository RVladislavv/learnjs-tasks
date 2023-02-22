let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sumOfSalaries(obj) {
    let res = 0;
    for (let key in obj) {
        res += obj[key];
    }
    return res;
}

let sum = sumOfSalaries(salaries);

console.log(sum); //390

