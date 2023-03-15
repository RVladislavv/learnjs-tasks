function topSalary(salaries) {
    let maxSalary = 0;
    let maxSalaryName = null;

    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            maxSalaryName = name;
        }
    }

    return maxSalaryName;
}