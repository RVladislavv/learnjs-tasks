let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); 
/* При вызове sayHi() будет ошибка, так как функция sayHi() была объявлена внутри блока if и не доступна вне этого блока.

Поэтому при вызове sayHi() вне блока if будет выведена ошибка "Uncaught ReferenceError: sayHi is not defined". */