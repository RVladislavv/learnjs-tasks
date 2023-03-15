//через свойства функции
function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = value => count = value;

    counter.decrease = () => count--;

    return counter;
}
//через замыкания
function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    function set(value) {
        count = value;
    }

    function decrease() {
        count--;
    }

    counter.set = set;
    counter.decrease = decrease;

    return counter;
}
