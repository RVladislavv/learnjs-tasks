let x = prompt("x?", '');
let n = prompt("n?", '');

function pow(x, n) {
    let res = x;

    for (let i = 1; i < n; i++) {
        res *= x;
    }

    return res;
}

alert((n < 1) ? "Введите натуральное значение степени от 1 и выше" : pow(x, n));
