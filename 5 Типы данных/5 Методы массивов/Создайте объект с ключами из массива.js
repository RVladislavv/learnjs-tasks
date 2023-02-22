function groupById(arr) {
    return arr.reduce((result, user) => {
        result[user.id] = user;
        return result;
    }, {});
}