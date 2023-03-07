function inBetween(a, b) {
    return function (n) {
        return n >= a && n <= b;
    };
}

function inArray(arr) {
    return function (n) {
        return arr.includes(n);
    };
}

// Пример использования
let arr = [1, 2, 3, 4, 5, 6, 7];

alert(arr.filter(inBetween(3, 6))); // 3, 4, 5, 6

alert(arr.filter(inArray([1, 2, 10]))); // 1, 2