import { GameObject } from '../../game-engine/game-object.js';

export class Character extends GameObject {
    constructor() {
        super(20, 150, 20, 20);

        this.walkAnimation = this.game.AnimationManager.createAnimation([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        ]);
    }

    draw() {
        const sprite = this.game.AnimationManager.sprite('kirby');
        const index = this.walkAnimation();
        this.drawing.drawSprite(sprite, index, this.x, this.y, 80, 80);
    }
}