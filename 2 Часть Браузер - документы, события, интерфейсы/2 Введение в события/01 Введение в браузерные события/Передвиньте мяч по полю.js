const field = document.getElementById('field');
const ball = document.getElementById('ball');

field.addEventListener('click', (event) => {
    // координаты клика относительно поля
    const clickX = event.clientX - field.offsetLeft;
    const clickY = event.clientY - field.offsetTop;

    // координаты мяча относительно поля
    let ballX = clickX - ball.offsetWidth / 2;
    let ballY = clickY - ball.offsetHeight / 2;

    // проверяем, не вышел ли мяч за границы поля
    if (ballX < 0) ballX = 0;
    if (ballY < 0) ballY = 0;
    if (ballX + ball.offsetWidth > field.offsetWidth) {
        ballX = field.offsetWidth - ball.offsetWidth;
    }
    if (ballY + ball.offsetHeight > field.offsetHeight) {
        ballY = field.offsetHeight - ball.offsetHeight;
    }

    // задаем новые координаты мяча
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
});