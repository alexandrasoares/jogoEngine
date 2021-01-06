import { Draw } from './draw.js';
import { ImageManager } from './image-manager.js';
import { SoundManager } from './sound-manager.js';
import { Input } from './input.js';

const canvas = document.querySelector('#canvas');

let circuleX = 0;

export const Game = {
    isRunning: false, 
    ImageManager,
    SoundManager,
    Input,
    constructor() {
        Game.canvas = {
            element: canvas,
            ctx: canvas.getContext('2d'),
            width: canvas.width,
            height: canvas.height,
            top: 0,
            bottom: canvas.height,
            left: 0,
            right: canvas.width,
            center: {
                x: canvas.width/2,
                y: canvas.height/2
            }
        }
        Game.Drawing = new Draw(Game.canvas.ctx, Game.canvas.width, Game.canvas.height);
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
        if (Game.Input.onKey(Game.Input.key.LEFT)) {
            circuleX -= 5;
        }

        if (Game.Input.onKey(Game.Input.key.RIGHT)) {
            circuleX += 5;
        }
    },

    // Desenha o que precisamos no canvas  
    draw() {
        // Limpa a tela antes de desenhar
        Game.Drawing.clearCanvas();
        Game.Drawing.drawCicle(circuleX, 10, 5);
        Game.Drawing.drawText(Game.canvas.center.x, 50, 'Start Game');
        Game.Drawing.drawImage(Game.ImageManager.image('background'), 190, 130);
    }
}