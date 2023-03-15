let list = document.querySelectorAll('li');

for (let li of list) {
    let childCount = li.querySelectorAll('li').length;
    if (childCount > 0) {
        li.firstChild.textContent += ` [${childCount}]`;
    }
}