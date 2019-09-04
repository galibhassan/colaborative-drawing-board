let _isPointerDown = false;
let _isPointerMoving = false;
window.isDrawable = false;
window.previousCoordinate = [0,0]

export const canvasEventListener = (myCanvas) => {
    myCanvas.addEventListener('pointerdown', _handlePointerDown);
    myCanvas.addEventListener('pointermove', _handlePointerMove);
    myCanvas.addEventListener('pointerup', _handlePointerUp);
} 

canvasEventListener.respondToDrawingEvent = (myBrush, myCanvas)=> {
    myBrush.draw(myCanvas, window.previousCoordinate[0], window.previousCoordinate[1],
            window.currentCoordinate[0], window.currentCoordinate[1]
    );
    
    myBrush.strokeWithImage(myCanvas, window.currentCoordinate[0], window.currentCoordinate[1])
    

    // update
    window.previousCoordinate[0] = window.currentCoordinate[0];
    window.previousCoordinate[1] = window.currentCoordinate[1];

}

function _handlePointerDown(e) {
    _isPointerDown = true;
    window.previousCoordinate[0] = e.offsetX;
    window.previousCoordinate[1] = e.offsetY;
}

function _handlePointerMove(e) {
    _isPointerMoving = true;
    if (_isPointerDown && _isPointerMoving) {
        window.isDrawable = true;
        window.currentCoordinate = [e.offsetX, e.offsetY];
        if(e.pressure<.1) {
            window.isDrawable = false;  
        }
    } else {
        window.isDrawable = false;
    }
}

function _handlePointerUp(e) {
    _isPointerDown = false;
    window.previousCoordinate[0] = e.offsetX
    window.previousCoordinate[1] = e.offsetY
}

canvasEventListener.clearCanvas = (clearCanvasButton, myBoard) => {
    clearCanvasButton.addEventListener('click', function(){
        myBoard.clearCanvas()
    })
}