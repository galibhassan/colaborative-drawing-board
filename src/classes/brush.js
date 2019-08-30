export class Brush {
    constructor(brushSize, brushColor) {
        this._brushSize = brushSize || 4;
        this._brushColor = brushColor || 'white';
    }

    getBrushSize() {
        return this._brushSize;
    }

    setBrushSize(newBrushSize){
        this._brushSize = newBrushSize;
    }

    getBrushColor() {
        return this._brushColor;
    }

    setBrushColor(newColor) {
        this._brushColor = newColor
    }

    draw(canvas, x1,y1, x2,y2){
        const ctx = canvas.getContext('2d');
        ctx.lineWidth = this.getBrushSize();
        ctx.strokeStyle = this.getBrushColor();
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.stroke()
    }

    putDot(canvas, x,y) {
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(x,y, this.getBrushSize(), Math.PI*2);
        ctx.stroke();
    }
}