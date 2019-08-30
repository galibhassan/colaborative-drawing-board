export class CanvasEventListener {
    constructor(canvas) {
        this._canvas = canvas;
        this._isMouseDown = false;
        this._isMouseMoving = false;
        console.log('hello from constructor of canvasEventListener')
        this._listenToCanvasEvents();
    }

    isCanvasDrawable() {
        console.log('isCanvasDrawable called')
        if(this._isMouseDown && this._isMouseMoving) {
            return true;
        } else {
            return false;
        }
    }
    
    _listenToCanvasEvents() {
        this._canvas.addEventListener('mousedown', this._handleMouseDown);
        this._canvas.addEventListener('mousemove', this._handleMouseMove);
        this._canvas.addEventListener('mouseup', this._handleMouseUp);
    }
    
    _handleMouseDown(e) {
        this._isMouseDown = true;
        console.log(this._isMouseDown)
    }
    
    _handleMouseMove(e) {
        this._isMouseMoving = true;
    }
    _handleMouseUp(e) {
        this._isMouseDown = false;
        console.log(this._isMouseDown)
    }
    
}