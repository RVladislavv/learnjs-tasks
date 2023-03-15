function getSecondsToday() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes(); 
    const seconds = now.getSeconds(); 
    return hours * 3600 + minutes * 60 + seconds; 
}