function getAverageAge(users) {
    const sum = users.reduce((total, user) => total + user.age, 0);
    return sum / users.length;
}