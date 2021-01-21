import { Draw } from './draw.js';
import { ImageManager } from './image-manager.js';
import { SoundManager } from './sound-manager.js';
import { Input } from './input.js';
import { AnimationManager } from './animation-manager.js';

const canvas = document.querySelector('#canvas');

export const Game = {
    gameObjectList: [],
    isRunning: false, 
    ImageManager,
    SoundManager,
    Input,
    AnimationManager,
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

    addObject(gameObject) {
        Game.gameObjectList.push(gameObject);
        gameObject.start();
    },

    removeObject(gameObject) {
        const objectIndex = Game.gameObjectList.indexOf(gameObject);
        Game.gameObjectList.splice(objectIndex, 1);
        gameObject.onDestroy();
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
        Game.gameObjectList.forEach(gameObject => gameObject.update());
    },

    // Desenha o que precisamos no canvas  
    draw() {
        // Limpa a tela antes de desenhar
        Game.Drawing.clearCanvas();
        Game.Drawing.drawImage(Game.ImageManager.image('background'), 190, 130);
        Game.gameObjectList.forEach(gameObject => gameObject.draw());

    }
}