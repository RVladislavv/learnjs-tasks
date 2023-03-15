document.addEventListener('mouseover', function (event) {
    let tooltipElem = event.target.closest('[data-tooltip]');
    if (!tooltipElem) return;
    let tooltipText = tooltipElem.getAttribute('data-tooltip');
    let tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = tooltipText;
    document.body.append(tooltip);
    let coords = tooltipElem.getBoundingClientRect();
    let left = coords.left + (tooltipElem.offsetWidth - tooltip.offsetWidth) / 2;
    if (left < 0) left = 0;
    let top = coords.top - tooltip.offsetHeight - 5;
    if (top < 0) {
        top = coords.top + tooltipElem.offsetHeight + 5;
    }
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
    tooltipElem.addEventListener('mouseout', function () {
        tooltip.remove();
    });
});