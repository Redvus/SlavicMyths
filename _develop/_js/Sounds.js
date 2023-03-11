class Sounds {
    greeting(sound) {
        sound = new Audio(sound);
        sound.oncanplaythrough = () => {
            sound.play();
        }
    }

    rightAnswer(soundRight) {
        soundRight = new Audio(soundRight);
        soundRight.oncanplaythrough = () => {
            soundRight.play();
        }
    }
}