<body>
  <h1>Создать список</h1>

  <script>
    let ul = document.createElement('ul');
    document.body.append(ul);

    while (true) {
      let data = prompt("Введите текст для элемента списка", "");

      if (!data) {
        break;
      }

      let li = document.createElement('li');
      li.appendChild(document.createTextNode(data)); //обработка HTML-тегов как текст
      ul.append(li);
    }
  </script>

</body>