import { Game } from './scripts/game-engine/game.js';
import { Ball } from './scripts/game/scripts/ball.js';
import { Character } from './scripts/game/scripts/character.js';

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
        },
        {
            name: 'kirby',
            src: './scripts/game/image/kirby.png'
        }
    ])
]).then(() => {
    Game.start();
    Game.AnimationManager.add(
        Game.ImageManager.image('kirby'),
        6,
        2
    );
    const ball = new Ball(20);
    const ball2 = new Ball(30);
    const kirby = new Character(30);
    Game.addObject(ball);
    Game.addObject(ball2);
    Game.addObject(kirby);

    ball.update = function(){
        this.color = 'white';        
        if(this.input.onKey(this.input.key.LEFT)){
            this.goLeft();
        }

        if(this.input.onKey(this.input.key.RIGHT)){
            this.goRight();
        }

        if(this.input.onKey(this.input.key.UP)){
            this.goUp();
        }

        if(this.input.onKey(this.input.key.DOWN)){
            this.goDown();
        }
    }

});
