import { Game } from './scripts/game-engine/game.js';

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
    // Game.SoundManager.play('sound');
});
