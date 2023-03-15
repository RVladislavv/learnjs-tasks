function getSecondsToTomorrow() {
    const now = new Date(); 
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const different = tomorrow - now; 
    return Math.round(different / 1000); 
}