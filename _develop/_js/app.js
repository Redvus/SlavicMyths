let container = document.querySelector('.container'),
    wrapper = document.querySelector('.wrapper')
;

// Заставка + выбор категории
function introLoad() {
    let introL = new Intro();
    introL.introStart();
    let introButton = document.getElementById('introButton'),
        introBlock = document.querySelector('.container__wrapper'),
        choiceCat = new Choice();

    function introButtonLoadNext() {
        introButton.addEventListener('click', function () {
            gsap.to(introBlock, {
                duration: 1,
                autoAlpha: 0,
                x: '-3%',
                onComplete: () => {
                    container.removeChild(introBlock);
                    choiceCat.choiceCategory();
                    clickCategory();
                }
            });
        })
    }
    introButtonLoadNext();
}

// Пеереход в категорию
function clickCategory() {
    let questLoad = new Quest();
    let choiceGod = document.getElementById('choiceGod'),
        choiceCreatures = document.getElementById('choiceCreatures'),
        choiceAnimals = document.getElementById('choiceAnimals'),
        choiceBlock = document.querySelector('.container__wrapper')
    ;

    choiceGod.addEventListener('click', (e) => {
        gsap.to(choiceBlock, {
            duration: 1,
            autoAlpha: 0,
            x: '-3%',
            onComplete: () => {
                container.removeChild(choiceBlock);
                questLoad.questStart();
                questionGods_1();
            }
        });
        e.preventDefault();
    });

    choiceAnimals.addEventListener('click', () => {
        gsap.to(choiceBlock, {
            duration: 1,
            autoAlpha: 0,
            x: '-3%',
            onComplete: () => {
                container.removeChild(choiceBlock);
                questLoad.questStart();
                questionAnimals_1();
            }
        });
    });

    choiceCreatures.addEventListener('click', () => {
        gsap.to(choiceBlock, {
            duration: 1,
            autoAlpha: 0,
            x: '-3%',
            onComplete: () => {
                container.removeChild(choiceBlock);
                questLoad.questStart();
                questionCreatures_1();
            }
        });
    });
}

function choiceLoad() {
    const choiceLoad = new Choice();
    choiceLoad.choiceCategory();
    clickCategory();
}

function init() {
    introLoad();
    // questLoad();
    // choiceLoad();
}

init();
