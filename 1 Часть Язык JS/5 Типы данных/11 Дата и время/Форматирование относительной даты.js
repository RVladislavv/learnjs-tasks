function formatDate(date) {
    const diff = new Date() - date; 

    if (diff < 1000) {
        return "прямо сейчас";
    } else if (diff < 60000) {
        return `${Math.floor(diff / 1000)} сек. назад`;
    } else if (diff < 3600000) {
        return `${Math.floor(diff / 60000)} мин. назад`;
    } else {
        const d = date.getDate();
        const m = date.getMonth() + 1;
        const y = date.getFullYear() % 100;
        const h = date.getHours();
        const mi = date.getMinutes();
        return `${(d < 10 ? "0" : "")}${d}.${(m < 10 ? "0" : "")}${m}.${y < 10 ? "0" + y : y} ${(h < 10 ? "0" : "")}${h}:${(mi < 10 ? "0" : "")}${mi}`;
    }
}