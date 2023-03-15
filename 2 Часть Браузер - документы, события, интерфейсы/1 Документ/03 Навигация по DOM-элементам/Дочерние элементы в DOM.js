{/* <html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>
Напишите код, как получить…

элемент <div>?
<ul>?
второй <li> (с именем Пит)? */}

const divElement = document.querySelector('div');
console.log(divElement); // <div>Пользователи:</div>

const ulElement = document.querySelector('ul');
console.log(ulElement); // <ul><li>Джон</li><li>Пит</li></ul>

const liElements = document.querySelectorAll('li');
const secondLiElement = liElements[1];
console.log(secondLiElement); // <li>Пит</li>

const nameInLi = secondLiElement.textContent;
console.log(nameInLi); // "Пит"