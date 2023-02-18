function isSimple(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num / i === Math.floor(num / i)) {
            return false;
        }
    }
    return true;
}

let n = 10;

for (let i = 2; i <= n; i++) {
    if (isSimple(i)) {
        alert(i);
    }
}

