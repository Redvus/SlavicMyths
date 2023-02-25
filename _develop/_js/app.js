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
                questionAnimals();
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
                questionCreatures();
            }
        });
    });
}

/*--------------- Gods --------------- */
function questionGods_1() {
    let questionGodsLoad = new Question();
    questionGodsLoad.question('Что оставил на память людям бог Перун?', 'Палку', 'Молнию', 'Стрелу');
    let questGodsVarLoad = document.getElementById('questVar_1'),
        questLeftInside = document.querySelector('.container__frame_left'),
        questRightInside = document.querySelector('.container__frame_right'),
        questLeftBlock = document.querySelector('.frame__left_change'),
        questRightBlock = document.querySelector('.frame__right_change')
    ;

    questGodsVarLoad.addEventListener('click', () => {
       gsap.to([questLeftBlock, questRightBlock], {
           duration: 0.5,
           autoAlpha: 0,
           onComplete: () => {
               questLeftInside.removeChild(questLeftBlock);
               questRightInside.removeChild(questRightBlock);
               answerGoodLoad();
           }
       });
    });

    function answerGoodLoad() {
       let cat = new Question();
       cat.answer('БЕЛБОГ', 'god/godBelbog.jpg', 'Светлый Бог Прави (Внешнего мира). Олицетворение добра, удачи, счастья, блага. Младший брат Чернобога. Выглядит как старик с седыми волосами, бородой и голубыми глазами. Одет в светлые одежды, в руках держит посох. Считается, что вселяет в человека веру и мысли о чем-то хорошем и добром, помогает заблудившимся в лесу, соблюдает порядок и справедливость в мире.');

        let questNextLoad = document.querySelector('.container__arrow_next'),
            questLeftInside = document.querySelector('.container__frame_left'),
            questRightInside = document.querySelector('.container__frame_right'),
            questLeftBlock = document.querySelector('.frame__left_change'),
            questRightBlock = document.querySelector('.frame__right_change')
        ;
        questNextLoad.addEventListener('click', () => {
            gsap.to([questLeftBlock, questRightBlock], {
                duration: 0.5,
                autoAlpha: 0,
                onComplete: () => {
                    questLeftInside.removeChild(questLeftBlock);
                    questRightInside.removeChild(questRightBlock);
                    questionGods_2();
                }
            });
        });
    }
}

function questionGods_2() {
    let questionGodsLoad = new Question();
    questionGodsLoad.question('Первый земледелец, защищающий домашний скот от диких зверей. О ком идёт речь?', 'Дажьбог', 'Ярило', 'Хорс');
    let questGodsVarLoad = document.getElementById('questVar_2'),
        questLeftInside = document.querySelector('.container__frame_left'),
        questRightInside = document.querySelector('.container__frame_right'),
        questLeftBlock = document.querySelector('.frame__left_change'),
        questRightBlock = document.querySelector('.frame__right_change')
    ;

    questGodsVarLoad.addEventListener('click', () => {
        gsap.to([questLeftBlock, questRightBlock], {
            duration: 0.5,
            autoAlpha: 0,
            onComplete: () => {
                questLeftInside.removeChild(questLeftBlock);
                questRightInside.removeChild(questRightBlock);
                answerGoodLoad();
            }
        });
    });

    function answerGoodLoad() {
        let cat = new Question();
        cat.answer('ЯРИЛО', 'god/godYarilo.jpg', 'Бог Весеннего Солнца, плодородия и страсти. Первый земледелец. Изображается молодым красивым мужчиной с русыми кудрями. Почитаем всеми: земледельцами, воинами, пастухами. По характеру – добрый. Считается защитником домашнего скота от диких зверей.');

        let questNextLoad = document.querySelector('.container__arrow_next'),
            questLeftInside = document.querySelector('.container__frame_left'),
            questRightInside = document.querySelector('.container__frame_right'),
            questLeftBlock = document.querySelector('.frame__left_change'),
            questRightBlock = document.querySelector('.frame__right_change')
        ;
        questNextLoad.addEventListener('click', () => {
            gsap.to([questLeftBlock, questRightBlock], {
                duration: 0.5,
                autoAlpha: 0,
                onComplete: () => {
                    questLeftInside.removeChild(questLeftBlock);
                    questRightInside.removeChild(questRightBlock);
                    questionGods_3();
                }
            });
        });
    }
}
/*--------------- End Gods --------------- */

/*--------------- Animals --------------- */
function questionAnimals() {
    let questionLoad = new Question();
    questionLoad.question('Это животное было связано с древнейшим образом Богини-матери', 'Корова', 'Кошка', 'Коза');
}
/*--------------- End Animals --------------- */

/*--------------- Creatures --------------- */
function questionCreatures() {
    let questionLoad = new Question();
    questionLoad.question('Средство, очень любимое Кикиморой: если учует его в доме, оставит хозяев в покое', 'Настойка горького корня папоротника', 'Богородичная трава', 'Лаванда');
}
/*--------------- End Creatures --------------- */

function questLoad() {
    let questLoad = new Quest();
    questLoad.questStart();
}

function choiceLoad() {
    const choiceLoad = new Choice();
    choiceLoad.choiceCategory();
    clickCategory();
}

function init() {
    // introLoad();
    // questLoad();
    choiceLoad();
}

init();
