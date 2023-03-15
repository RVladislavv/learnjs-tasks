function createTree(container, data) {
    container.innerHTML = createTreeHtml(data);
}

function createTreeHtml(data) {
    let html = "";

    for (let key in data) {
        html += `<li>${key}${createTreeHtml(data[key])}</li>`;
    }

    return html ? `<ul>${html}</ul>` : "";
}