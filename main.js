import { Game } from './scripts/game-engine/game.js';
import { Ball } from './scripts/game/scripts/ball.js';

Game.constructor();

Promise.all([
    // Game.SoundManager.loadAllSounds([
    //     {
    //         name: 'sound',
    //         src: './scripts/game/sounds/mario-bross.mp3'
    //     }
    // ]),
    Game.ImageManager.loadAllImages([
        {
            name: 'background',
            src: './scripts/game/image/press-start.png'
        }
    ])
]).then(() => {
    Game.start();
    const ball = new Ball(50);
    Game.addObject(ball);
});
