container.onclick = function (e) {
    if (e.target.className != 'remove-button') return;

    let block = e.target.closest('.pane');
    block.remove();
};