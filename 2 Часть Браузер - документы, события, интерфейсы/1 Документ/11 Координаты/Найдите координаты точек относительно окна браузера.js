const coordinates = field.getBoundingClientRect();
//верхний левый, внешний угол 
const topLeftOutside = [coordinates.left, coordinates.top];

//нижний правый, внешний угол
const bottomRightOutside = [coordinates.right, coordinates.bottom];

//верхний левый, внутренний угол
const topLeftInside = [coordinates.left + field.clientLeft, coordinates.top + field.clientTop];

//нижний правый, внутренний угол
const bottomRightInside = [coordinates.left + field.clientLeft + field.clientWidth, coordinates.top + field.clientTop + field.clientHeight];
