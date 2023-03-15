/* .tree ul {
    display: none;
}
  
  .tree.open > ul {
    display: block;
} */

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('parent')) {
        event.target.classList.toggle('open');
    }
});

{/* <ul class="tree" id="tree">
    <li class="parent">Животные
        <ul>
            <li class="parent">Млекопитающие
                <ul>
                    <li>Коровы</li>
                    <li>Ослы</li>
                    <li>Собаки</li>
                    <li>Тигры</li>
                </ul>
            </li>
            <li class="parent">Другие
                <ul>
                    <li>Змеи</li>
                    <li>Птицы</li>
                    <li>Ящерицы</li>
                </ul>
            </li>
        </ul>
    </li>
    <li class="parent">Рыбы
        <ul>
            <li class="parent">Аквариумные
                <ul>
                    <li>Гуппи</li>
                    <li>Скалярии</li>
                </ul>
            </li>
            <li class="parent">Морские
                <ul>
                    <li>Морская форель</li>
                </ul>
            </li>
        </ul>
    </li>
</ul> */}