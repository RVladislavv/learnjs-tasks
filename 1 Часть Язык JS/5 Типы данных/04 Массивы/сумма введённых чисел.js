function sumInput() {
    let numbers = [];

    while (true) {
        let value = prompt("Введите число", 0);

        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);
    }

    let res = 0;
    for (let number of numbers) {
        res += number;
    }
    return res;
}