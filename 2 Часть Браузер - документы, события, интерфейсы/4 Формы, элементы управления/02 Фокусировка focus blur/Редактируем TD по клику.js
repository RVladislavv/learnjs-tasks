let tbl = document.getElementById('bagua-table');

let focusTd;

tbl.onclick = function (event) {

    let target = event.target.closest('.edit-cancel,.edit-ok,td');

    if (!tbl.contains(target)) return;

    if (target.className == 'edit-cancel') {
        finishTdEdit(focusTd.elem, false);
    } else if (target.className == 'edit-ok') {
        finishTdEdit(focusTd.elem, true);
    } else if (target.nodeName == 'TD') {
        if (focusTd) return; 

        makeTdEditable(target);
    }

};

function makeTdEditable(td) {
    focusTd = {
        elem: td,
        data: td.innerHTML
    };

    td.classList.add('edit-td'); 

    let textArea = document.createElement('textarea');
    textArea.style.width = td.clientWidth + 'px';
    textArea.style.height = td.clientHeight + 'px';
    textArea.className = 'edit-area';

    textArea.value = td.innerHTML;
    td.innerHTML = '';
    td.appendChild(textArea);
    textArea.focus();

    td.insertAdjacentHTML("beforeEnd",
        '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
    );
}

function finishTdEdit(td, isOk) {
    if (isOk) {
        td.innerHTML = td.firstChild.value;
    } else {
        td.innerHTML = focusTd.data;
    }
    td.classList.remove('edit-td');
    focusTd = null;
}