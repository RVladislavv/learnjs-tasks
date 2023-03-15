//Таблицу с id="age-table".
const ageTable = document.getElementById('age-table');
//Все элементы label внутри этой таблицы (их три).
const labels = ageTable.querySelectorAll('label');
//Первый td в этой таблице (со словом «Age»).
const firstTd = ageTable.querySelector('td')
//Форму form с именем name="search".
const searchForm = document.querySelector('form[name="search"]');
//Первый input в этой форме.
const firstInput = searchForm.querySelector('input');
//Последний input в этой форме.
const lastInput = searchForm.querySelector('input:last-child');