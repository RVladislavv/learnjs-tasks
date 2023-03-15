let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert(lazy.stomach); // apple
/* 
 оба хомяка наследуют свойство stomach от общего объекта hamster, 
 и когда мы кормим одного хомяка, мы добавляем значение в общее свойство stomach
 исправить можно, если каждому создавать объект stomach
*/
