function delay(f, ms) {
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms);
    };
}

function f(x, y) {
    console.log(x, y);
}

let f1000 = delay(f, 1000);
f1000("Hello", "World");  