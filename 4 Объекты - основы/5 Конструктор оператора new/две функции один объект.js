//да, такое может быть при возврате одного и тогоже объекта

const obj = {};

function A() {
    return obj;
}

function B() {
    return obj;
}