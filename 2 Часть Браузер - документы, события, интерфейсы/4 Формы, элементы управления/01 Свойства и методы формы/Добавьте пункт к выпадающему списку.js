{/* <select id="genres">
  <option value="rock">Рок</option>
  <option value="blues" selected>Блюз</option>
</select> */}

// Получаем элемент <select> по его id
const selectElement = document.getElementById('genres');

// Получаем выбранный пункт
const selectedOption = selectElement.options[selectElement.selectedIndex];

// Выводим значение и текст выбранного пункта
console.log(selectedOption.value);
console.log(selectedOption.text);

// Добавляем новый пункт
const newOption = new Option('Классика', 'classic');

// Добавляем новый пункт в конец списка
selectElement.add(newOption);

// Делаем новый пункт выбранным
selectElement.selected = true;