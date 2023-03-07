//пример функции-конструктора, с которой такой вызов будет корректно работать:
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person1 = new Person('Alice', 25);
let person2 = new person1.constructor('Bob', 30);

console.log(person2 instanceof Person); // true
console.log(person2.name); // "Bob"
console.log(person2.age); // 30

//пример функции-конструктора, с которой такой код поведет себя неправильно:
function Animal(type) {
    this.type = type;
}

Animal.prototype = {
    eat: function () {
        console.log('The animal is eating');
    }
};

let animal1 = new Animal('dog');
let animal2 = new animal1.constructor('cat');

console.log(animal2 instanceof Animal); // false
console.log(animal2.type); // undefined
console.log(animal2.eat); // undefined