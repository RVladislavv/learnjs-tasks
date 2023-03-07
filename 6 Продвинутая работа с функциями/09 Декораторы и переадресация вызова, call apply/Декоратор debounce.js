function delay(f, ms) {
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms);
    };
}