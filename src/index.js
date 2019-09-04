
import "./style.css";
import { Board } from './classes/board';
import { Brush } from './classes/brush';
import {canvasEventListener} from './eventListeners';

// ui
const clearCanvasButton = document.getElementById('clearCanvasButton')
const boardColor = document.getElementById('boardColor');
const brushColor = document.getElementById('brushColor');
const brushSize = document.getElementById('brushSize');
brushSize.value = 1;

const myBoard = new Board(500, 400, boardColor.value)
const myBrush = new Brush(brushSize.value, brushColor.value);
const myCanvas = myBoard.getCanvas();

canvasEventListener.clearCanvas(clearCanvasButton, myBoard)

canvasEventListener(myCanvas);

const testDraw = ()=>{
    if(window.isDrawable) {
        canvasEventListener.respondToDrawingEvent(myBrush, myCanvas);
    }
    requestAnimationFrame(testDraw);
}
testDraw();

boardColor.addEventListener('change', function(e){
    myBoard.setBackgroundColor(e.currentTarget.value);
});
brushColor.addEventListener('change', function(e){
    myBrush.setBrushColor(e.currentTarget.value);
});
brushSize.addEventListener('change', function(e){
    myBrush.setBrushSize(e.currentTarget.value);
})

console.log('')


const imagifyButton = document.getElementById('imagifyButton');
imagifyButton.addEventListener('click', function(e){
    myBoard.getCanvas().toBlob(function(blob){
        const mewImg = document.createElement('img');
        const url = URL.createObjectURL(blob);
        mewImg.onload = function(){
            URL.revokeObjectURL(url);
        }
        console.log(url);
        const chatWindow = document.getElementById('chatWindow');
        mewImg.src = url;
        mewImg.style.width = chatWindow.offsetWidth-20 + 'px';
        mewImg.style.border = '1px solid rgba(0,0,0,0.1)'
        mewImg.style.backgroundColor = boardColor.value;
        console.log(chatWindow.offsetWidth)
        mewImg.style.height = 'auto';
        chatWindow.appendChild(mewImg)
    }, 'image/jpg', 0.80)
})