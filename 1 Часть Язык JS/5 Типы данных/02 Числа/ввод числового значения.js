function readNumber() {
    let input = prompt("Введите число", "");

    if (input === "" || input === null) {
        return null;
    }

    let number = +input;

    if (isNaN(number)) {
        return readNumber();
    }

    return number;
}