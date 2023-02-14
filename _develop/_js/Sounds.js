class Sounds {
    greeting(sound) {
        sound = new Audio('sounds/AcousticShuffle.mp3');
        sound.oncanplaythrough = () => {
            sound.play();
        }
    }

    rightAnswer(soundRight) {
        soundRight = new Audio();
        soundRight.oncanplaythrough = () => {
            soundRight.play();
        }
    }
}