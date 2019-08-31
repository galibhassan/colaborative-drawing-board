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

const myBoard = new Board(undefined, undefined, boardColor.value)
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
