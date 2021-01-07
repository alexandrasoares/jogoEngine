export class Draw {
    constructor(canvasContext, canvasWidth, canvasHeight){
        this.ctx = canvasContext;        
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.center = {x: canvasWidth/2, y: canvasHeight/2};

        this.fontOptions = {
            family: 'Press Start 2P',
            size: 20,
            h: 'center',
            v: 'middle'
        }
        this.setText();
    }

    drawRect(x, y, width, height, color = 'white') {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height);
    }

    drawCircle(cx, cy, raio, color = 'white') {
        this.ctx.fillStyle = color;
        this.ctx.arc(cx, cy, raio, 50, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    drawText(x, y, text, color = 'White') {
        this.ctx.fillStyle = color;
        this.ctx.fillText(text, x, y);
    }

    drawImage(image, x, y, width, height) {
        x = x ?? 0;
        y = y ?? 0;
        width = width ?? image.width;
        height = height ?? image.width;
        this.ctx.drawImage(image.element, x, y, width, height);
    }

    setText(options = {}) {
        this.fontOptions = {...this.fontOptions, ...options}
        this.ctx.font = `${this.fontOptions.size}px "${this.fontOptions.family}"`
        this.ctx.textAlign = this.fontOptions.h;
        this.ctx.textBaseline = this.fontOptions.v;
    }

    clearCanvas() {
        // Inicia o caminho do desenho
        this.ctx.beginPath();
        // Limpa todo o desenho do canvas
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }
}