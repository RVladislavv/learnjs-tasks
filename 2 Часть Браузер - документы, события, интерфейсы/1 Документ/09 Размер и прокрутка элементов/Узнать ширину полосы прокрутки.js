function getScrollbarWidth() {
    // Создаем элемент с фиксированным размером и содержимым
    const div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    // Добавляем элемент на страницу
    document.body.append(div);

    // Измеряем разницу между внутренней и внешней шириной элемента
    const scrollbarWidth = div.offsetWidth - div.clientWidth;

    // Удаляем элемент со страницы
    div.remove();

    return scrollbarWidth;
}