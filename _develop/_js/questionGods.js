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
                questionGods_3();
            }
        });
    });
}
}

function questionGods_3() {
let questionGodsLoad = new Question();
questionGodsLoad.question('Кого называли покровителем охотничьей добычи, богом мертвого зверя?', 'Маансика', 'Велеса', 'Ваала');
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
    cat.answer('Велес', 'god/godVeles.jpg', 'Бог скота, покровитель охотничьей добычи, владыка времени. Антагонист громовержца Перуна. Живет на земле. Отец Ярила. Изображается как седобородый пожилой старец с черными глазами. Ходит с котомкой, с собой носит молоко и песочные часы. Нередко появляется в сопровождении священного быка и медведя. Может менять облик и возраст, олицетворяя тем самым прошлое, настоящее или будущее.');
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
                questionGods_4();
            }
        });
    });
}
}

function questionGods_4() {
let questionGodsLoad = new Question();
questionGodsLoad.question('Кто она, богиня зимней стужи?', 'Снегурочка', 'Мокошь', 'Мара');
let questGodsVarLoad = document.getElementById('questVar_3'),
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
    cat.answer('Мара', 'god/godMara.jpg', 'Бoгиня cмepти и зимней стужи. Выглядит как мoлoдая дeвушка c бeлoй кoжeй, чepными длинными вoлocaми, в светлых oдeждах, либо как cтapуxа в изнocившeйcя oдeждe и c кocoй нa плeчe. По натуре зла. Способна пpeдупpeждaть чeлoвeкa o будущeм (через сны). По ночам вызывает ночные кошмары, может удушить человека во сне.');
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
                questionGods_5();
            }
        });
    });
}
}

function questionGods_5() {
let questionGodsLoad = new Question();
questionGodsLoad.question('Как называют повелителя и верховного царя ветров?', 'Стрибог', 'Облакопрогонник', 'Ветродуй');
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
    cat.answer('Стрибог', 'god/godStribog.jpg', 'Верховный Бог ветров. Сын Рода. Выглядит как высокий худой седовласый старец с бородой и крыльями за спиной. Глаза и брови у него черные. Одет в длинный серый балахон. Управляет ветрами (в этом ему помогают сыновья и внуки, каждый из которых отвечает за свое направление). Способен вызвать и утихомирить любой ветер. Почитается земледельцами и мореплавателями. По натуре – добрый. Истребляет злодеяния, разрушает злоумышления.');
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
                questionGods_6();
            }
        });
    });
}
}

function questionGods_6() {
let questionGodsLoad = new Question();
questionGodsLoad.question('Коляду символично изображали снопом или соломенной куколкой.\nА на какой праздник её подносили, дарили?', 'Масленница', 'Рождество', 'Иван-Купала');
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
    cat.answer('Коляда', 'god/godKolyada.jpg', 'Бог зимнего Солнца, рожденный в ночь зимнего солнцеворота, в самую длинную ночь года. С его приходом связывают не только свет солнца, которое начинает прибывать после зимнего солнцестояния, но и свет мудрости, знаний. Считается, что именно он наделил человека знаниями о календаре, помог упорядочить времена года, разделить весь год на равные части. Ночь перед Колядой традиционно считается очень благоприятным временем для гаданий.');
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
                questionGods_7();
            }
        });
    });
}
}

function questionGods_7() {
let questionGodsLoad = new Question();
questionGodsLoad.question('С моря-океана, с острова Буяна Весна-красна идёт, золотые ключи несёт. Зиму замыкает, лето выпускает: с водой ключевой, с травой-муравой, с корнем глубоким, со стеблем высоким. О ком так сказано?', 'Мара', 'Марцана', 'Лада');
let questGodsVarLoad = document.getElementById('questVar_3'),
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
    cat.answer('Лада', 'god/godLada.jpg', 'Богиня любви, семьи, красоты и бракосочетания. Мать Перуна. Изображается как молодая женщина с длинными волосами желтого цвета и большими ясными глазами. Лада поддерживает мир в равновесии и гармонии. Молодожены преподносят ей цветы, мед и ягоды, чтобы она покровительствовала их согласию, сохраняла семейные узы и защищала их детей. Традиционно у нее просят здоровье, красоту, любовь и счастье.');
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
                questionGods_8();
            }
        });
    });
}
}

function questionGods_8() {
let questionGodsLoad = new Question();
questionGodsLoad.question('Радегаст – божество ратной славы. Голова какого зверя была изображена на его щите?', 'Медведя', 'Бычья', 'Льва');
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
    cat.answer('Радегаст', 'god/godRadegast.jpg', 'Бог бранной славы, войны и плодородия. Покровитель гостей. Сын Коляды и Радуницы. Внук Хорса. Изображается как мужчина средних лет в доспехах, с копьем или секирой, а также со щитом, на котором изображена бычья голова (знак отваги), и в шлеме, увенчанным орлом, распростершим крылья (символ славы). Считается, что ездит верхом по ночам, поэтому люди, обнаружив наутро уставшую лошадь, кормили ее и давали ей отдохнуть.');
    let questNextLoad = document.querySelector('.container__arrow_next'),
        questContainer = document.querySelector('.container__inside')
    ;

    questContainer.removeChild(questNextLoad);
}
}