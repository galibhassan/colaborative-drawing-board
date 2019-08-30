import "./style.css";

const canvas = document.getElementById('canvas');
canvas.width= window.innerWidth;
canvas.height= window.innerHeight;

const ctx = canvas.getContext('2d');
canvas.addEventListener('mousemove', _handleMouseMove);
canvas.addEventListener('mouseup', _handleMouseUp);
canvas.addEventListener('mousedown', _handleMouseDown);

let isMouseDown = false;
let isMouseMoving = false;

let strokeStore = [0,0];

function _handleMouseDown(e) {
    isMouseDown = true;
    console.log(e.clientX)
    console.log('isMouseDown: ' + isMouseDown);

}
function _handleMouseUp(e) {
    isMouseDown = false;
    console.log('isMouseDown: ' + isMouseDown);
}
function _handleMouseMove(e) {
    isMouseMoving = true;
    
    if (isMouseDown && isMouseMoving) {
        drawLine(strokeStore[0], strokeStore[1], e.clientX, e.clientY)
    }
    strokeStore[0] = e.clientX;
    strokeStore[1] = e.clientY;
}

if (isMouseDown && isMouseMoving) {
    drawLine()
}

const drawLine = (x1, y1, x2, y2) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
