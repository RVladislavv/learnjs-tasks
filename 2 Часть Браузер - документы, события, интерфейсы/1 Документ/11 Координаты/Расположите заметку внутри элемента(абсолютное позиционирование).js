/* Для вставки элемента внутрь anchor нам нужно изменить его CSS-свойства, 
а именно: задать ему свойство position: relative, чтобы координаты позиционирования были относительно anchor, 
а не относительно страницы, 
и затем задать нужные значения свойств top, right, bottom или left. */


function positionAt(anchor, position, elem) {
    anchor.style.position = 'relative';

    let anchorCoords = anchor.getBoundingClientRect();
    let elemWidth = elem.offsetWidth;
    let elemHeight = elem.offsetHeight;

    switch (position) {
        case "top-out":
            elem.style.top = anchorCoords.top - elemHeight + "px";
            elem.style.left = anchorCoords.left + "px";
            break;

        case "right-out":
            elem.style.top = anchorCoords.top + "px";
            elem.style.left = anchorCoords.right + "px";
            break;

        case "bottom-out":
            elem.style.top = anchorCoords.bottom + "px";
            elem.style.left = anchorCoords.left + "px";
            break;

        case "top-in":
            elem.style.top = "0px";
            elem.style.left = "0px";
            anchor.appendChild(elem);
            break;

        case "right-in":
            elem.style.top = "0px";
            elem.style.right = "0px";
            anchor.appendChild(elem);
            break;

        case "bottom-in":
            elem.style.bottom = "0px";
            elem.style.left = "0px";
            anchor.appendChild(elem);
            break;
    }
}

// показывает заметку поверх цитаты
positionAt(blockquote, "top-out", note);

// показывает заметку внутри цитаты вблизи верхнего края элемента
positionAt(blockquote, "top-in", note);