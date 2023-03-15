let field = document.getElementById('field');
let ball = document.getElementById('ball');

let fieldCoords = field.getBoundingClientRect();
let ballCoords = ball.getBoundingClientRect();

let ballLeft =  (field.clientWidth - ball.offsetWidth) / 2;
let ballTop = (field.clientHeight - ball.offsetHeight) / 2;

ball.style.left = ballLeft + 'px';
ball.style.top = ballTop + 'px';