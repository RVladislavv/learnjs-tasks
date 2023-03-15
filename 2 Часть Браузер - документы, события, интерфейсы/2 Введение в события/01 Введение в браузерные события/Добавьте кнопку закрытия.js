// Находим все элементы .pane
const panes = document.querySelectorAll('.pane');

panes.forEach((pane) => {
  // Создаем кнопку закрытия
  const closeButton = document.createElement('button');
  closeButton.classList.add('remove-button');
  closeButton.textContent = '[x]';

  // При нажатии на кнопку закрытия удаляем соответствующий элемент .pane
  closeButton.addEventListener('click', () => {
    pane.remove();
  });

  // Добавляем кнопку закрытия в элемент .pane
  pane.appendChild(closeButton);
});