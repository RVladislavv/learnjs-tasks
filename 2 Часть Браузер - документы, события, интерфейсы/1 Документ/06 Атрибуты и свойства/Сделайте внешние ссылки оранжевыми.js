
let links = document.querySelectorAll('a[href*="://"]:not([href^="http://internal.com"])');
for (let i = 0; i < links.length; i++) {
    links[i].style.color = 'orange';
}