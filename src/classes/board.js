export class Board {
    constructor(width, height, backgroundColor) {
        this._backgroundColor = backgroundColor || 'green';

        // canvas creation
        this._canvas = document.createElement('canvas');
        this._canvas.width = width || parseInt(window.innerWidth);
        this._canvas.height  = height || parseInt(window.innerHeight);
        console.log(this._canvas.width, this._canvas.height)
        this._canvas.id = 'canvas';
        document.body.appendChild(this._canvas);

        this._ctx = this._canvas.getContext('2d');
        this.setBackgroundColor(this._backgroundColor)

        
    }

    getCanvas(){
        return this._canvas;
    }

    getBackgroundColor(){
        return this._backgroundColor;
    }
    setBackgroundColor(newBackgroundColor){
        this._backgroundColor = newBackgroundColor;
        this.getCanvas().style.backgroundColor = this.getBackgroundColor();
    }

    clearCanvas(){
        this._ctx.clearRect(0,0, this.getCanvas().width, this.getCanvas().height);
    }
}
