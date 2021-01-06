const soundList = {};

export const SoundManager = {
    play(name) {
        debugger;
        soundList[name].element.play();
    },

    loadSound(name, src) {
        debugger;
        return new Promise((resolve, reject) => {
            const audio = new Audio(src);
            audio.oncanplaythrough = () => {
                soundList[name] = {
                    name,
                    src,
                    element: audio
                }

                resolve(soundList[name])
            }
        })
    },

    loadAllSounds(sounds) {
        return Promise.all(
            sounds.map(sound => SoundManager.loadSound(sound))
        )
    }
}