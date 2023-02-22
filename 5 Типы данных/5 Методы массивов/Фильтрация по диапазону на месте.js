function filterRangeInPlace(arr, a, b) {
    arr = arr.filter(function (item) {
        return a <= item && item <= b;
    });
}