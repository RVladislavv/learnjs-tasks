function positionAt(anchor, position, elem) {
    let anchorCoords = anchor.getBoundingClientRect();

    let body = document.body;
    let html = document.documentElement;

    let bodyRect = body.getBoundingClientRect();
    let htmlRect = html.getBoundingClientRect();

    let scrollLeft = window.pageXOffset || html.scrollLeft || body.scrollLeft;
    let scrollTop = window.pageYOffset || html.scrollTop || body.scrollTop;

    let clientLeft = html.clientLeft || body.clientLeft || 0;
    let clientTop = html.clientTop || body.clientTop || 0;

    let top = anchorCoords.top + scrollTop - clientTop;
    let left = anchorCoords.left + scrollLeft - clientLeft;

    switch (position) {
        case "top":
            elem.style.top = top - elem.offsetHeight + "px";
            elem.style.left = left + "px";
            break;
        case "right":
            elem.style.top = top + "px";
            elem.style.left = left + anchor.offsetWidth + "px";
            break;
        case "bottom":
            elem.style.top = top + anchor.offsetHeight + "px";
            elem.style.left = left + "px";
            break;
    }

    elem.style.position = "absolute";
}

function showNote(anchor, position, html) {
    let noteElem = document.createElement("div");
    noteElem.className = "note";
    noteElem.innerHTML = html;

    document.body.appendChild(noteElem);

    positionAt(anchor, position, noteElem);
}