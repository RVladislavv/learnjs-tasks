<div class="menu">
    <button class="menu-button">Меню</button>
    <ul class="menu-list">
        <li><a href="#">Пункт 1</a></li>
        <li><a href="#">Пункт 2</a></li>
        <li><a href="#">Пункт 3</a></li>
    </ul>
</div>
/*
.menu {
    position: relative;
    display: inline-block;
  }
  
  .menu-button {
    font-size: 16px;
    padding: 10px 20px;
    background-color: #eee;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .menu-list {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    display: none;
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }
  
  .menu-list li {
    padding: 10px;
  }
  
  .menu-list li a {
    display: block;
    color: #333;
    text-decoration: none;
  }
  */

const menuButton = document.querySelector('.menu-button');
const menuList = document.querySelector('.menu-list');

menuButton.addEventListener('click', () => {
    menuList.classList.toggle('show');
});

document.addEventListener('click', (event) => {
    if (!menuList.contains(event.target) && !menuButton.contains(event.target)) {
        menuList.classList.remove('show');
    }
});