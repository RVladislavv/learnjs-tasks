<html>
<body>

  <div data-widget-name="menu">Choose the genre</div>

  <script>
    let widget = document.querySelector('[data-widget-name]');
    let widgetName = widget.getAttribute('data-widget-name');
    alert(widgetName);
  </script>
</body>
</html>