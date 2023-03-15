/* Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:

<ul id="ul">
  <li id="one">1</li>
  <li id="two">4</li>
</ul> */
const ul = document.getElementById('ul');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
li2.textContent = '2';
li3.textContent = '3';
ul.insertBefore(li2, ul.children[1]);
ul.insertBefore(li3, ul.children[2]);