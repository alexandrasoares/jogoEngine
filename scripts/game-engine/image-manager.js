const imageList = {

}

export const ImageManager = {
    image(name) {
        return imageList[name];
    },

    loadImage({name, src}) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = () => {
                imageList[name] = {
                    name,
                    width: image.width,
                    hight: image.hight,
                    src,
                    element: image
                }

                resolve(imageList[name])
            }

            image.src = src;
        })
    }, 

    // Array de promisses para várias imagens
    loadAll(images) {
        return Promise.all(
            images.map(image => ImageManager.loadImage(image))
        )
    }
}