function positionAt(anchor, position, elem) {
    let anchorCoords = anchor.getBoundingClientRect();

    switch (position) {
        case "top":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
            break;
        case "right":
            elem.style.left = anchorCoords.right + "px";
            elem.style.top = anchorCoords.top + "px";
            break;
        case "bottom":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.bottom + "px";
            break;
    }
}

function showNote(anchor, position, html) {
    let noteElem = document.createElement("div");
    noteElem.className = "note";
    noteElem.innerHTML = html;
    document.body.append(noteElem);

    positionAt(anchor, position, noteElem);
}