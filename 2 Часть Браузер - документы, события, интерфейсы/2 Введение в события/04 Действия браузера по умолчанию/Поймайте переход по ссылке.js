document.getElementById("contents").addEventListener("click", function (event) {
    // проверяем, что целевой элемент является ссылкой
    if (event.target.tagName === "A") {
        // выводим сообщение с вопросом пользователю
        var confirmed = confirm("Вы действительно хотите покинуть страницу?");
        // если пользователь ответил отрицательно
        if (!confirmed) {
            // отменяем переход по ссылке
            event.preventDefault();
        }
    }
});