let lists = document.querySelectorAll('li');

for (let li of lists) {
  let descendantsCount = countDescendants(li);
  console.log(`У элемента "${li.firstChild.textContent.trim()}" ${descendantsCount} потомков`);
}

function countDescendants(element) {
  let count = 0;

  if (element.firstElementChild) {
    for (let child of element.children) {
      if (child.tagName == 'UL') {
        count += countDescendants(child.firstElementChild);
      }
    }
  }

  return count + element.children.length - 1;
}