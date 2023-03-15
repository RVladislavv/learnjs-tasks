function unique(arr) {
    let uniqueObj = {};
    let uniqueArr = [];

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        uniqueObj[str] = true;
    }

    for (let key in uniqueObj) {
        uniqueArr.push(key);
    }

    return uniqueArr;
}

//решение этой же задачи через Set в папке 7 Map и Set