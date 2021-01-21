const animationList = {};

export const AnimationManager = {
    sprite(name) {
        return animationList[name];
    },

    add(image, xImage, yImage) {
        const sprites = [],
              spriteWidth = image.width/xImage,
              spriteHeight = image.height/yImage

              for (let y = 0; y < yImage; y++) {
                  for (let x = 0; x < xImage; x++) {
                    sprites.push({
                        x: x * spriteWidth,
                        y: y * spriteHeight
                    });
                  }
              }
              
              animationList[image.name] = {
                  image,
                  sprites,
                  width: spriteWidth,
                  height: spriteHeight
              }
    },

    createAnimation(spritesIndex) {
        let currentIndex = 0,
            frameCounter = 0;

        return () => {
            frameCounter ++;

            if (frameCounter < 15) {
                return spritesIndex[currentIndex];
            }

            frameCounter = 0;
            currentIndex ++;

            if (currentIndex >= spritesIndex.lenght) {
                currentIndex = 0;
            }

            return spritesIndex[currentIndex];
        }
    }
}