import { Draw } from './draw.js';

const canvas = document.querySelector('#canvas');

let x = 0;

export const Game = {
    isRunning: false, 
    constructor() {
        Game.canvas = {
            element: canvas,
            ctx: canvas.getContext('2d'),
            width: canvas.width,
            heigth: canvas.heigth,
            top: 0,
            bottom: canvas.heigth,
            left: 0,
            right: canvas.width,
            center: {
                x: canvas.width / 2,
                y: canvas.heigth / 2,
            }
        }

        Game.Drawing = new Draw(
            Game.canvas.ctx,
            Game.canvas.width,
            Game.canvas.heigth
        );
    },

    start() {
        // Para poder iniciar o jogo, precisamos verificar se ele já não está rodando
        if (!Game.isRunning) {
            Game.isRunning = true;
            Game.run();
        }
    },

    stop() {
        // Para poder parar o jogo, precisamos verificar se ele já não está rodando
        if (!Game.isRunning) {
            Game.isRunning = true;
            Game.run();
        }
    },
    
    run() {
        // Verifica se o jogo está sendo executado
        if (Game.isRunning) {
            Game.update();
            Game.draw();
            window.requestAnimationFrame(Game.run); // Cria um looping executando o metodo run que chamará os metodos update e draw novamente 60x por segundo
        }
    },

    update() {
        x += 5;
    },

    // Desenha o que precisamos no canvas  
    draw() {
        // Limpa a tela antes de desenhar
        Game.Drawing.clearCanvas();
        // Cria o novo desenho
        Game.Drawing.drawRect(x, 10, 50, 100);
    }
}