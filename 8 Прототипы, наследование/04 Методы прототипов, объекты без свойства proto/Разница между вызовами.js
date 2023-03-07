function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function () {
    alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // вызывает метод sayHi() на объекте rabbit будет "Rabbit"
Rabbit.prototype.sayHi(); //вызывает метод sayHi() на прототипе Rabbit.prototype будет undefined
Object.getPrototypeOf(rabbit).sayHi(); // как и выше вызывает метод на прототипе, а не объекте, от того будет тоже undefined
rabbit.__proto__.sayHi(); // как и во втором случае вызывает метод на прототипе, будет undefined