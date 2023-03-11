function questionCreatures_1() {
    localStorage.setItem('progressLeft', JSON.stringify(progressLeft));
    let questionGodsLoad = new Question();
    questionGodsLoad.question('Средство, очень любимое Кикиморой: если учует его в доме, оставит хозяев в покое:', 'Богородичная трава', 'Лаванда', 'Настойка горького<br />корня папоротника');
    let questVar_1 = document.getElementById('questVar_1'),
        questVar_2 = document.getElementById('questVar_2'),
        questVar_3 = document.getElementById('questVar_3'),
        questLeftInside = document.querySelector('.container__frame_left'),
        questRightInside = document.querySelector('.container__frame_right'),
        questLeftBlock = document.querySelector('.frame__left_change'),
        questRightBlock = document.querySelector('.frame__right_change'),
        questWrong = [questVar_1, questVar_2, questVar_3]
    ;

    for (let i = 0; i < questWrong.length; i++) {
        if (questWrong[i] == questWrong[2]) {
            questWrong[i].addEventListener('click', () => {
                soundRightLoad();
                gsap.to([questLeftBlock, questRightBlock], {
                    duration: 0.5,
                    autoAlpha: 0,
                    onComplete: () => {
                        questLeftInside.removeChild(questLeftBlock);
                        questRightInside.removeChild(questRightBlock);
                        answerGoodLoad();
                    }
                });
                let progressLeftStorage = JSON.parse(localStorage.getItem('progressLeft'));
                let progressSum = JSON.parse(localStorage.getItem('progress'));
                if (progressLeftStorage === 2) {
                    progressValue.textContent = progressSum + progressFirst;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                } else if (progressLeftStorage === 1) {
                    progressValue.textContent = progressSum + progressSecond;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                } else if (progressLeftStorage === 0) {
                    progressValue.textContent = progressSum;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                } else {
                    progressValue.textContent = progressSum;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                }
            });
        }  else {
            questWrong[i].addEventListener('click', () => {
                let wrongBlock = document.querySelector('.frame__left_wrong');
                gsap.to(wrongBlock, {
                    duration: 0.3,
                    autoAlpha: 1,
                    onComplete: () => {
                        gsap.to(wrongBlock, {
                            autoAlpha: 0,
                            delay: 0.7
                        });
                    }
                });
                let progressLeftStorage = JSON.parse(localStorage.getItem('progressLeft'));
                let progressLeftWrong = progressLeftStorage - 1;
                localStorage.setItem('progressLeft', JSON.stringify(progressLeftWrong));
            });
        }
    }

    function answerGoodLoad() {
        let cat = new Question();
        cat.answer('Кикимора', 'creatures/creatureKikimora.jpg', 'Злой дух. Дочь красной девицы от Змея Огненного, проклята еще до своего рождения.  Выглядит как горбатая старуха с большой головой и выпученными глазами, с длинными руками и короткими ногами, с рожками и хвостом. Неугомонная, суетливая. Днем скрывается от людей, ночью активничает: бегает, прядет, стучит, мешает спать хозяевам и маленьким детям. Увидеть ее считается дурным предзнаменованием.');

        let questNextLoad = document.querySelector('.container__arrow_next'),
            questLeftInside = document.querySelector('.container__frame_left'),
            questRightInside = document.querySelector('.container__frame_right'),
            questLeftBlock = document.querySelector('.frame__left_change'),
            questRightBlock = document.querySelector('.frame__right_change'),
            questContainer = document.querySelector('.container__inside')
        ;
        questNextLoad.addEventListener('click', () => {
            gsap.to([questLeftBlock, questRightBlock, questNextLoad], {
                duration: 0.5,
                autoAlpha: 0,
                onComplete: () => {
                    questLeftInside.removeChild(questLeftBlock);
                    questRightInside.removeChild(questRightBlock);
                    questContainer.removeChild(questNextLoad);
                    localStorage.setItem('progressLeft', JSON.stringify(progressLeft));
                    questionCreatures_2();
                }
            });
        });
    }
}

function questionCreatures_2() {
    let questionGodsLoad = new Question();
    questionGodsLoad.question('На этот праздник призывают знахаря, который потайными заговорами изгоняет Кикимору из избы.', 'День<br />Куприану и Иустине', 'День<br />Герасима-грачевника', 'День<br />Ивана Купала');
    let questVar_1 = document.getElementById('questVar_1'),
        questVar_2 = document.getElementById('questVar_2'),
        questVar_3 = document.getElementById('questVar_3'),
        questLeftInside = document.querySelector('.container__frame_left'),
        questRightInside = document.querySelector('.container__frame_right'),
        questLeftBlock = document.querySelector('.frame__left_change'),
        questRightBlock = document.querySelector('.frame__right_change'),
        questWrong = [questVar_1, questVar_2, questVar_3]
    ;

    for (let i = 0; i < questWrong.length; i++) {
        if (questWrong[i] == questWrong[1]) {
            questWrong[i].addEventListener('click', () => {
                soundRightLoad();
                gsap.to([questLeftBlock, questRightBlock], {
                    duration: 0.5,
                    autoAlpha: 0,
                    onComplete: () => {
                        questLeftInside.removeChild(questLeftBlock);
                        questRightInside.removeChild(questRightBlock);
                        answerGoodLoad();
                    }
                });
                let progressLeftStorage = JSON.parse(localStorage.getItem('progressLeft'));
                let progressSum = JSON.parse(localStorage.getItem('progress'));
                if (progressLeftStorage === 2) {
                    progressValue.textContent = progressSum + progressFirst;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                } else if (progressLeftStorage === 1) {
                    progressValue.textContent = progressSum + progressSecond;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                } else if (progressLeftStorage === 0) {
                    progressValue.textContent = progressSum;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                } else {
                    progressValue.textContent = progressSum;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                }
            });
        }  else {
            questWrong[i].addEventListener('click', () => {
                let wrongBlock = document.querySelector('.frame__left_wrong');
                gsap.to(wrongBlock, {
                    duration: 0.3,
                    autoAlpha: 1,
                    onComplete: () => {
                        gsap.to(wrongBlock, {
                            autoAlpha: 0,
                            delay: 0.7
                        });
                    }
                });
                let progressLeftStorage = JSON.parse(localStorage.getItem('progressLeft'));
                let progressLeftWrong = progressLeftStorage - 1;
                localStorage.setItem('progressLeft', JSON.stringify(progressLeftWrong));
            });
        }
    }

    function answerGoodLoad() {
        let cat = new Question();
        cat.answer('Кикимора', 'creatures/creatureKikimora.jpg', 'Спутник богов. Олицетворение мудрости, добра и природных сил. Покоритель пространства и времени. Способен перемещаться между мирами. Используется в обряде инициации, который должен пройти каждый мужчина (укротить природную мощь коня). На конях любят разъезжать как боги, так и домовые или дворовые духи. Атрибуты лошадиной упряжи, подковы, колокольчики, конские черепа – считаются могущественными оберегами, защитой от бед, залогом благополучия.');

        let questNextLoad = document.querySelector('.container__arrow_next'),
            questLeftInside = document.querySelector('.container__frame_left'),
            questRightInside = document.querySelector('.container__frame_right'),
            questLeftBlock = document.querySelector('.frame__left_change'),
            questRightBlock = document.querySelector('.frame__right_change'),
            questContainer = document.querySelector('.container__inside')
        ;
        questNextLoad.addEventListener('click', () => {
            gsap.to([questLeftBlock, questRightBlock, questNextLoad], {
                duration: 0.5,
                autoAlpha: 0,
                onComplete: () => {
                    questLeftInside.removeChild(questLeftBlock);
                    questRightInside.removeChild(questRightBlock);
                    questContainer.removeChild(questNextLoad);
                    localStorage.setItem('progressLeft', JSON.stringify(progressLeft));
                    questionCreatures_3();
                }
            });
        });
    }
}

function questionCreatures_3() {
    let questionGodsLoad = new Question();
    questionGodsLoad.question('Он нем, но голосист, умеет хохотать, аукаться, свистать и плакать по-людски, и если делается бессловесными, то только при встрече с настоящими, живыми людьми. Любит совершать проказы и шутки над людьми.', 'Домовой', 'Леший', 'Кощей Бессмертный');
    let questVar_1 = document.getElementById('questVar_1'),
        questVar_2 = document.getElementById('questVar_2'),
        questVar_3 = document.getElementById('questVar_3'),
        questLeftInside = document.querySelector('.container__frame_left'),
        questRightInside = document.querySelector('.container__frame_right'),
        questLeftBlock = document.querySelector('.frame__left_change'),
        questRightBlock = document.querySelector('.frame__right_change'),
        questWrong = [questVar_1, questVar_2, questVar_3]
    ;

    for (let i = 0; i < questWrong.length; i++) {
        if (questWrong[i] == questWrong[1]) {
            questWrong[i].addEventListener('click', () => {
                soundRightLoad();
                gsap.to([questLeftBlock, questRightBlock], {
                    duration: 0.5,
                    autoAlpha: 0,
                    onComplete: () => {
                        questLeftInside.removeChild(questLeftBlock);
                        questRightInside.removeChild(questRightBlock);
                        answerGoodLoad();
                    }
                });
                let progressLeftStorage = JSON.parse(localStorage.getItem('progressLeft'));
                let progressSum = JSON.parse(localStorage.getItem('progress'));
                if (progressLeftStorage === 2) {
                    progressValue.textContent = progressSum + progressFirst;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                } else if (progressLeftStorage === 1) {
                    progressValue.textContent = progressSum + progressSecond;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                } else if (progressLeftStorage === 0) {
                    progressValue.textContent = progressSum;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                } else {
                    progressValue.textContent = progressSum;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                }
            });
        }  else {
            questWrong[i].addEventListener('click', () => {
                let wrongBlock = document.querySelector('.frame__left_wrong');
                gsap.to(wrongBlock, {
                    duration: 0.3,
                    autoAlpha: 1,
                    onComplete: () => {
                        gsap.to(wrongBlock, {
                            autoAlpha: 0,
                            delay: 0.7
                        });
                    }
                });
                let progressLeftStorage = JSON.parse(localStorage.getItem('progressLeft'));
                let progressLeftWrong = progressLeftStorage - 1;
                localStorage.setItem('progressLeft', JSON.stringify(progressLeftWrong));
            });
        }
    }

    function answerGoodLoad() {
        let cat = new Question();
        cat.answer('Леший', 'creatures/creatureLeshiy.jpg', 'Лесной дух, защитник животных. Выглядит как мужчина с длинной бородой и волосами по всему телу. Глаза – зелёные, кровь – синяя.  Правый лапоть надет на левую ногу, а левый – на правую. Оберегает лес от людей. Чтобы оставаться незамеченным, превращается в растения, грибы (гигантский мухомор), животных или в человека. На человеческом языке говорить не умеет, но может хохотать, аукать, свистеть и плакать. По натуре – добрый, но любит проказничать и подшучивать над людьми.');

        let questNextLoad = document.querySelector('.container__arrow_next'),
            questLeftInside = document.querySelector('.container__frame_left'),
            questRightInside = document.querySelector('.container__frame_right'),
            questLeftBlock = document.querySelector('.frame__left_change'),
            questRightBlock = document.querySelector('.frame__right_change'),
            questContainer = document.querySelector('.container__inside')
        ;
        questNextLoad.addEventListener('click', () => {
            gsap.to([questLeftBlock, questRightBlock, questNextLoad], {
                duration: 0.5,
                autoAlpha: 0,
                onComplete: () => {
                    questLeftInside.removeChild(questLeftBlock);
                    questRightInside.removeChild(questRightBlock);
                    questContainer.removeChild(questNextLoad);
                    localStorage.setItem('progressLeft', JSON.stringify(progressLeft));
                    questionCreatures_4();
                }
            });
        });
    }
}

function questionCreatures_4() {
    let questionGodsLoad = new Question();
    questionGodsLoad.question('Грозен, но справедлив, всегда встает на защиту нуждающихся в нем, но может покарать и провинившихся как перед собой, так и перед окружающими. Четыре раза в год меняет свой облик.', 'Китоврас', 'Полкан', 'Леший');
    let questVar_1 = document.getElementById('questVar_1'),
        questVar_2 = document.getElementById('questVar_2'),
        questVar_3 = document.getElementById('questVar_3'),
        questLeftInside = document.querySelector('.container__frame_left'),
        questRightInside = document.querySelector('.container__frame_right'),
        questLeftBlock = document.querySelector('.frame__left_change'),
        questRightBlock = document.querySelector('.frame__right_change'),
        questWrong = [questVar_1, questVar_2, questVar_3]
    ;

    for (let i = 0; i < questWrong.length; i++) {
        if (questWrong[i] == questWrong[0]) {
            questWrong[i].addEventListener('click', () => {
                soundRightLoad();
                gsap.to([questLeftBlock, questRightBlock], {
                    duration: 0.5,
                    autoAlpha: 0,
                    onComplete: () => {
                        questLeftInside.removeChild(questLeftBlock);
                        questRightInside.removeChild(questRightBlock);
                        answerGoodLoad();
                    }
                });
                let progressLeftStorage = JSON.parse(localStorage.getItem('progressLeft'));
                let progressSum = JSON.parse(localStorage.getItem('progress'));
                if (progressLeftStorage === 2) {
                    progressValue.textContent = progressSum + progressFirst;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                } else if (progressLeftStorage === 1) {
                    progressValue.textContent = progressSum + progressSecond;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                } else if (progressLeftStorage === 0) {
                    progressValue.textContent = progressSum;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                } else {
                    progressValue.textContent = progressSum;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                }
            });
        }  else {
            questWrong[i].addEventListener('click', () => {
                let wrongBlock = document.querySelector('.frame__left_wrong');
                gsap.to(wrongBlock, {
                    duration: 0.3,
                    autoAlpha: 1,
                    onComplete: () => {
                        gsap.to(wrongBlock, {
                            autoAlpha: 0,
                            delay: 0.7
                        });
                    }
                });
                let progressLeftStorage = JSON.parse(localStorage.getItem('progressLeft'));
                let progressLeftWrong = progressLeftStorage - 1;
                localStorage.setItem('progressLeft', JSON.stringify(progressLeftWrong));
            });
        }
    }

    function answerGoodLoad() {
        let cat = new Question();
        cat.answer('Китоврас', 'creatures/creatureKitovras.jpg', 'Олицетворяет мудрость и храбрость. Выглядит как кентавр: низ коня, а верх (от пояса и выше) – человека. Глаза – карие, взгляд – умный. За спиной – два крыла, видимых только во время полета. Четыре раза в год меняет свой образ: зимой – серый в яблоках конь и седовласый мужчина с бородой; весной – гнедой и с русыми волосами; летом – светло-рыжего окраса и рыжеволосой головой; осенью – вороной с головой брюнета. Грозный, но справедливый. Стоит на защите нуждающихся в нем, карает провинившихся.');

        let questNextLoad = document.querySelector('.container__arrow_next'),
            questLeftInside = document.querySelector('.container__frame_left'),
            questRightInside = document.querySelector('.container__frame_right'),
            questLeftBlock = document.querySelector('.frame__left_change'),
            questRightBlock = document.querySelector('.frame__right_change'),
            questContainer = document.querySelector('.container__inside')
        ;
        questNextLoad.addEventListener('click', () => {
            gsap.to([questLeftBlock, questRightBlock, questNextLoad], {
                duration: 0.5,
                autoAlpha: 0,
                onComplete: () => {
                    questLeftInside.removeChild(questLeftBlock);
                    questRightInside.removeChild(questRightBlock);
                    questContainer.removeChild(questNextLoad);
                    localStorage.setItem('progressLeft', JSON.stringify(progressLeft));
                    questionCreatures_5();
                }
            });
        });
    }
}

function questionCreatures_5() {
    let questionGodsLoad = new Question();
    questionGodsLoad.question('Живет в морской пучине рыба, поутру выходит на берег, скачет по лугам, по росе, сбрасывает с себя лихие болезни на пагубу человеку.', 'Водяной', 'Шишига', 'Чудо Морское');
    let questVar_1 = document.getElementById('questVar_1'),
        questVar_2 = document.getElementById('questVar_2'),
        questVar_3 = document.getElementById('questVar_3'),
        questLeftInside = document.querySelector('.container__frame_left'),
        questRightInside = document.querySelector('.container__frame_right'),
        questLeftBlock = document.querySelector('.frame__left_change'),
        questRightBlock = document.querySelector('.frame__right_change'),
        questWrong = [questVar_1, questVar_2, questVar_3]
    ;

    for (let i = 0; i < questWrong.length; i++) {
        if (questWrong[i] == questWrong[2]) {
            questWrong[i].addEventListener('click', () => {
                soundRightLoad();
                gsap.to([questLeftBlock, questRightBlock], {
                    duration: 0.5,
                    autoAlpha: 0,
                    onComplete: () => {
                        questLeftInside.removeChild(questLeftBlock);
                        questRightInside.removeChild(questRightBlock);
                        answerGoodLoad();
                    }
                });
                let progressLeftStorage = JSON.parse(localStorage.getItem('progressLeft'));
                let progressSum = JSON.parse(localStorage.getItem('progress'));
                if (progressLeftStorage === 2) {
                    progressValue.textContent = progressSum + progressFirst;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                } else if (progressLeftStorage === 1) {
                    progressValue.textContent = progressSum + progressSecond;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                } else if (progressLeftStorage === 0) {
                    progressValue.textContent = progressSum;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                } else {
                    progressValue.textContent = progressSum;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                }
            });
        }  else {
            questWrong[i].addEventListener('click', () => {
                let wrongBlock = document.querySelector('.frame__left_wrong');
                gsap.to(wrongBlock, {
                    duration: 0.3,
                    autoAlpha: 1,
                    onComplete: () => {
                        gsap.to(wrongBlock, {
                            autoAlpha: 0,
                            delay: 0.7
                        });
                    }
                });
                let progressLeftStorage = JSON.parse(localStorage.getItem('progressLeft'));
                let progressLeftWrong = progressLeftStorage - 1;
                localStorage.setItem('progressLeft', JSON.stringify(progressLeftWrong));
            });
        }
    }

    function answerGoodLoad() {
        let cat = new Question();
        cat.answer('Чудо Морское', 'creatures/creatureChudoSea.jpg', 'Сказочная рыба или Водяной змей. С ним обычно связан ряд запретов: его нельзя есть (кто сделает это – сойдет с ума), худо будет, если с ним повстречаться или изловить его. Живет в морской пучине. Обладает сверхъестественной силой. Считается, что поутру выходит на берег, ходит- перескакивает по лугам на три версты, по росе: смывает-сбрасывает с себя лихие болезни – на пагубу человеку. В то же время, как гласят предания, Чудо Морское способствует рождению богатырей: кто съест его (от царицы до кухарки) – рождает сына-богатыря. На натуре – хитрое, но не всегда злобное.');

        let questNextLoad = document.querySelector('.container__arrow_next'),
            questLeftInside = document.querySelector('.container__frame_left'),
            questRightInside = document.querySelector('.container__frame_right'),
            questLeftBlock = document.querySelector('.frame__left_change'),
            questRightBlock = document.querySelector('.frame__right_change'),
            questContainer = document.querySelector('.container__inside')
        ;
        questNextLoad.addEventListener('click', () => {
            gsap.to([questLeftBlock, questRightBlock, questNextLoad], {
                duration: 0.5,
                autoAlpha: 0,
                onComplete: () => {
                    questLeftInside.removeChild(questLeftBlock);
                    questRightInside.removeChild(questRightBlock);
                    questContainer.removeChild(questNextLoad);
                    localStorage.setItem('progressLeft', JSON.stringify(progressLeft));
                    questionCreatures_6();
                }
            });
        });
    }
}

function questionCreatures_6() {
    let questionGodsLoad = new Question();
    questionGodsLoad.question('Тёмная птица, тёмная сила, посланница властелина подземного мира.', 'Сирин', 'Гамаюн', 'Алконост');
    let questVar_1 = document.getElementById('questVar_1'),
        questVar_2 = document.getElementById('questVar_2'),
        questVar_3 = document.getElementById('questVar_3'),
        questLeftInside = document.querySelector('.container__frame_left'),
        questRightInside = document.querySelector('.container__frame_right'),
        questLeftBlock = document.querySelector('.frame__left_change'),
        questRightBlock = document.querySelector('.frame__right_change'),
        questWrong = [questVar_1, questVar_2, questVar_3]
    ;

    for (let i = 0; i < questWrong.length; i++) {
        if (questWrong[i] == questWrong[0]) {
            questWrong[i].addEventListener('click', () => {
                soundRightLoad();
                gsap.to([questLeftBlock, questRightBlock], {
                    duration: 0.5,
                    autoAlpha: 0,
                    onComplete: () => {
                        questLeftInside.removeChild(questLeftBlock);
                        questRightInside.removeChild(questRightBlock);
                        answerGoodLoad();
                    }
                });
                let progressLeftStorage = JSON.parse(localStorage.getItem('progressLeft'));
                let progressSum = JSON.parse(localStorage.getItem('progress'));
                if (progressLeftStorage === 2) {
                    progressValue.textContent = progressSum + progressFirst;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                } else if (progressLeftStorage === 1) {
                    progressValue.textContent = progressSum + progressSecond;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                } else if (progressLeftStorage === 0) {
                    progressValue.textContent = progressSum;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                } else {
                    progressValue.textContent = progressSum;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                }
            });
        }  else {
            questWrong[i].addEventListener('click', () => {
                let wrongBlock = document.querySelector('.frame__left_wrong');
                gsap.to(wrongBlock, {
                    duration: 0.3,
                    autoAlpha: 1,
                    onComplete: () => {
                        gsap.to(wrongBlock, {
                            autoAlpha: 0,
                            delay: 0.7
                        });
                    }
                });
                let progressLeftStorage = JSON.parse(localStorage.getItem('progressLeft'));
                let progressLeftWrong = progressLeftStorage - 1;
                localStorage.setItem('progressLeft', JSON.stringify(progressLeftWrong));
            });
        }
    }

    function answerGoodLoad() {
        let cat = new Question();
        cat.answer('Сирин', 'creatures/creatureSirin.jpg', 'Райская птица, жительница Ирия – славянского Рая. Лик у неё женский, а тело – птичье. Обладает завораживающим голосом (услышавший ее пение забывает всё на свете, лишается сна, не ест и не пьет, пока не умрет). Спускается на землю, чтобы свить гнездо и высидеть птенцов (для этого выбирает отдаленные от человеческих селений участки леса). На земле поет вещие песни, которые вредны для человека и могут свести его с ума. Знает ответ на любой вопрос.');

        let questNextLoad = document.querySelector('.container__arrow_next'),
            questLeftInside = document.querySelector('.container__frame_left'),
            questRightInside = document.querySelector('.container__frame_right'),
            questLeftBlock = document.querySelector('.frame__left_change'),
            questRightBlock = document.querySelector('.frame__right_change'),
            questContainer = document.querySelector('.container__inside')
        ;
        questNextLoad.addEventListener('click', () => {
            gsap.to([questLeftBlock, questRightBlock, questNextLoad], {
                duration: 0.5,
                autoAlpha: 0,
                onComplete: () => {
                    questLeftInside.removeChild(questLeftBlock);
                    questRightInside.removeChild(questRightBlock);
                    questContainer.removeChild(questNextLoad);
                    localStorage.setItem('progressLeft', JSON.stringify(progressLeft));
                    questionCreatures_7();
                }
            });
        });
    }
}

function questionCreatures_7() {
    let questionGodsLoad = new Question();
    questionGodsLoad.question('Обитают в дремучих лесах, в неприступных горах, в подземных пещерах, строят из каменных глыб огромные храмы и святилища. О ком речь?', 'Лихо', 'Упыри', 'Волоты');
    let questVar_1 = document.getElementById('questVar_1'),
        questVar_2 = document.getElementById('questVar_2'),
        questVar_3 = document.getElementById('questVar_3'),
        questLeftInside = document.querySelector('.container__frame_left'),
        questRightInside = document.querySelector('.container__frame_right'),
        questLeftBlock = document.querySelector('.frame__left_change'),
        questRightBlock = document.querySelector('.frame__right_change'),
        questWrong = [questVar_1, questVar_2, questVar_3]
    ;

    for (let i = 0; i < questWrong.length; i++) {
        if (questWrong[i] == questWrong[2]) {
            questWrong[i].addEventListener('click', () => {
                soundRightLoad();
                gsap.to([questLeftBlock, questRightBlock], {
                    duration: 0.5,
                    autoAlpha: 0,
                    onComplete: () => {
                        questLeftInside.removeChild(questLeftBlock);
                        questRightInside.removeChild(questRightBlock);
                        answerGoodLoad();
                    }
                });
                let progressLeftStorage = JSON.parse(localStorage.getItem('progressLeft'));
                let progressSum = JSON.parse(localStorage.getItem('progress'));
                if (progressLeftStorage === 2) {
                    progressValue.textContent = progressSum + progressFirst;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                } else if (progressLeftStorage === 1) {
                    progressValue.textContent = progressSum + progressSecond;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                } else if (progressLeftStorage === 0) {
                    progressValue.textContent = progressSum;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                } else {
                    progressValue.textContent = progressSum;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                }
            });
        }  else {
            questWrong[i].addEventListener('click', () => {
                let wrongBlock = document.querySelector('.frame__left_wrong');
                gsap.to(wrongBlock, {
                    duration: 0.3,
                    autoAlpha: 1,
                    onComplete: () => {
                        gsap.to(wrongBlock, {
                            autoAlpha: 0,
                            delay: 0.7
                        });
                    }
                });
                let progressLeftStorage = JSON.parse(localStorage.getItem('progressLeft'));
                let progressLeftWrong = progressLeftStorage - 1;
                localStorage.setItem('progressLeft', JSON.stringify(progressLeftWrong));
            });
        }
    }

    function answerGoodLoad() {
        let cat = new Question();
        cat.answer('Волоты', 'creatures/creatureVolot.jpg', 'В преданиях волоты - богатыри-великаны, обладающие чудовищной силой. Живут в неприступных горах, дремучих лесах, диких степях, подземных пещерах. Занимаются кузнечными ремеслами, проводят русла новых рек, сдвигают горные кряжи и строят из каменных глыб огромные храмы и святилища. Волоты отличаются крепким здоровьем и большой продолжительностью жизни. С людьми волоты стараются не встречаться.');

        let questNextLoad = document.querySelector('.container__arrow_next'),
            questLeftInside = document.querySelector('.container__frame_left'),
            questRightInside = document.querySelector('.container__frame_right'),
            questLeftBlock = document.querySelector('.frame__left_change'),
            questRightBlock = document.querySelector('.frame__right_change'),
            questContainer = document.querySelector('.container__inside')
        ;
        questNextLoad.addEventListener('click', () => {
            gsap.to([questLeftBlock, questRightBlock, questNextLoad], {
                duration: 0.5,
                autoAlpha: 0,
                onComplete: () => {
                    questLeftInside.removeChild(questLeftBlock);
                    questRightInside.removeChild(questRightBlock);
                    questContainer.removeChild(questNextLoad);
                    localStorage.setItem('progressLeft', JSON.stringify(progressLeft));
                    questionCreatures_8();
                }
            });
        });
    }
}

function questionCreatures_8() {
    let questionGodsLoad = new Question();
    questionGodsLoad.question('Эта трава верное средство от русалок.', 'Петрушка', 'Полынь трава', 'Чертополох');
    let questVar_1 = document.getElementById('questVar_1'),
        questVar_2 = document.getElementById('questVar_2'),
        questVar_3 = document.getElementById('questVar_3'),
        questLeftInside = document.querySelector('.container__frame_left'),
        questRightInside = document.querySelector('.container__frame_right'),
        questLeftBlock = document.querySelector('.frame__left_change'),
        questRightBlock = document.querySelector('.frame__right_change'),
        questWrong = [questVar_1, questVar_2, questVar_3]
    ;

    for (let i = 0; i < questWrong.length; i++) {
        if (questWrong[i] == questWrong[1]) {
            questWrong[i].addEventListener('click', () => {
                soundEndLoad();
                gsap.to([questLeftBlock, questRightBlock], {
                    duration: 0.5,
                    autoAlpha: 0,
                    onComplete: () => {
                        questLeftInside.removeChild(questLeftBlock);
                        questRightInside.removeChild(questRightBlock);
                        answerGoodLoad();
                    }
                });
                let progressLeftStorage = JSON.parse(localStorage.getItem('progressLeft'));
                let progressSum = JSON.parse(localStorage.getItem('progress'));
                if (progressLeftStorage === 2) {
                    progressValue.textContent = progressSum + progressFirst;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                } else if (progressLeftStorage === 1) {
                    progressValue.textContent = progressSum + progressSecond;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                } else if (progressLeftStorage === 0) {
                    progressValue.textContent = progressSum;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                } else {
                    progressValue.textContent = progressSum;
                    let progressSum2 = parseInt(progressValue.textContent);
                    localStorage.setItem('progress', JSON.stringify(progressSum2));
                }
            });
        }  else {
            questWrong[i].addEventListener('click', () => {
                let wrongBlock = document.querySelector('.frame__left_wrong');
                gsap.to(wrongBlock, {
                    duration: 0.3,
                    autoAlpha: 1,
                    onComplete: () => {
                        gsap.to(wrongBlock, {
                            autoAlpha: 0,
                            delay: 0.7
                        });
                    }
                });
                let progressLeftStorage = JSON.parse(localStorage.getItem('progressLeft'));
                let progressLeftWrong = progressLeftStorage - 1;
                localStorage.setItem('progressLeft', JSON.stringify(progressLeftWrong));
            });
        }
    }

    function answerGoodLoad() {
        let cat = new Question();
        cat.answer('Русалка', 'creatures/creatureMermaid.jpg', 'Духи водоемов. Красивые девушки с длинными волосами зеленого или серебряного цвета. Восхитительно поют, приманивая к себе парней – неосторожных рыбаков, корабельщиков, случайных путников. Считается, что русалки – это утонувшие во время купания незамужние девушки. По натуре русалки не злы, просто очень уж одиноки, хотят выйти замуж. И поскольку при жизни они не успели создать семьи, они надеются сделать это после смерти, а потому встречаться с ними опасно: могут потопить и привязать к себе навсегда.');
        let questNextLoad = document.querySelector('.container__arrow_next'),
            questContainer = document.querySelector('.container__inside')
        ;

        questContainer.removeChild(questNextLoad);
    }
}