function Calculator() {
    this.value = 0;

    this.calculate = function (str) {
        const splitStr = str.split(' ');
        const operator = splitStr[1];
        const secondOperand = Number(splitStr[2]);

        if (operator === '+') {
            this.value += secondOperand;
        } else if (operator === '-') {
            this.value -= secondOperand;
        } else {
            // Если оператор не распознан, то генерируем ошибку
            throw new Error(`Unknown operator ${operator}`);
        }

        return this.value;
    };

    this.addMethod = function (name, func) {
        this[name] = func;
    };
}

// Пример использования:
const calc = new Calculator();
console.log(calc.calculate('3 + 7')); // 10

const powerCalc = new Calculator();
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);
console.log(powerCalc.calculate('2 ** 3')); // 8
console.log(powerCalc.calculate('4 / 2')); // 2
console.log(powerCalc.calculate('2 * 5')); // 10
