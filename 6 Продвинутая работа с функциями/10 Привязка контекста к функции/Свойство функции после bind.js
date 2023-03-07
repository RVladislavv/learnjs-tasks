function sayHi() {
    alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: "Вася"
});

alert(bound.test); //undefined
/* свойство test было добавлено к исходной функции sayHi, а не к её связанной версии bound */