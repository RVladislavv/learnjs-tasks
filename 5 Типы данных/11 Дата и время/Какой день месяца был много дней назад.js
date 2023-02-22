function getDateAgo(date, days) {
    let copyData = new Date(date);
    copyData.setDate(date.getDate() - days);
    return copyData.getDate();
}