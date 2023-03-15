// Получаем ссылки на уменьшенные изображения
let thumbs = document.querySelectorAll('#thumbs a');

// Добавляем обработчик клика на каждое изображение
thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function (event) {
        event.preventDefault(); // Предотвращаем переход по ссылке
        let largeImg = document.getElementById('largeImg');
        largeImg.src = this.href; // Изменяем src основного изображения на адрес уменьшенного
    });
});