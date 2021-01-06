export class Draw {
    constructor(canvasContext, canvasWidth, canvasHeight) {
        this.ctx = canvasContext;
        this.canvasWidth = canvasWidth;
        this.canvasWidth = canvasHeight;
        this.canvasCenter = {
            x: canvasWidth / 2, y: canvasHeight / 2
        }
    }

    drawRect(x, y, width, height, color = 'white') {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height);
    }

    clearCanvas() {
        // Inicia o caminho do desenho
        this.ctx.beginPath();
        // Limpa todo o desenho do canvas
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }
}