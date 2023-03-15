const viewDiv = document.getElementById('view');
const css = document.createElement('style');
css.innerHTML = '.edit {width: 100%; height: 100%; box-sizing: border-box; padding: 0.5em;}';
document.head.appendChild(css);

viewDiv.addEventListener('click', () => {
  // Создаём элемент <textarea>
  const textareaElement = document.createElement('textarea');
  textareaElement.classList.add('edit');

  // Устанавливаем его значение равным содержимому <div>
  textareaElement.value = viewDiv.innerHTML;

  // Заменяем <div> на <textarea>
  viewDiv.replaceWith(textareaElement);

  // Фокусируемся на <textarea>
  textareaElement.focus();

  // Обработчик события "blur" превращает <textarea> обратно в <div>
  textareaElement.addEventListener('blur', () => {
    // Создаём новый <div> с содержимым <textarea>
    const newDiv = document.createElement('div');
    newDiv.classList.add('view');
    newDiv.innerHTML = textareaElement.value;

    // Заменяем <textarea> на новый <div>
    textareaElement.replaceWith(newDiv);
  });

  // Обработчик события "keydown" позволяет завершить редактирование при нажатии Enter
  textareaElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      // Предотвращаем перенос строки
      event.preventDefault();

      // Удаляем обработчики событий
      textareaElement.removeEventListener('blur');
      textareaElement.removeEventListener('keydown');

      // Создаём новый <div> с содержимым <textarea>
      const newDiv = document.createElement('div');
      newDiv.classList.add('view');
      newDiv.innerHTML = textareaElement.value;

      // Заменяем <textarea> на новый <div>
      textareaElement.replaceWith(newDiv);
    }
  });
});