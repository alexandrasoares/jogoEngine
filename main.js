import { Game } from './scripts/game-engine/game.js';

Game.constructor();

Game.ImageManager.loadAll([
    {
        name: 'background',
        src: './scripts/game/image/background.png'
    }
]).then(() => {
    Game.start();
});
