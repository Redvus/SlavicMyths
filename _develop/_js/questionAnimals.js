function questionAnimals_1() {
    let questionGodsLoad = new Question();
    questionGodsLoad.question('Это животное было связано с древнейшим образом Богини-матери', 'Кошка', 'Корова', 'Коза');
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
        cat.answer('Корова', 'animals/animalCow.jpg', 'Питающая стихия, мать-кормилица. Олицетворение благополучия, счастья, мира, двуединства жизни и смерти. Через тело коровы описывалось мироздание: белая корова символизировала утреннюю зарю, черная – ночь и тьму, рога – месяц; дождь и роса воспринимались как молоко небесной коровы. Способна отогнать смерть: в завершение похоронной процессии принято было дарить корову священнику или бедняку.');

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
                    questionAnimals_2();
                }
            });
        });
    }
}

function questionAnimals_2() {
    let questionGodsLoad = new Question();
    questionGodsLoad.question('Кого в традиции древних славян называли «спутниками богов»?', 'Мышей', 'Собак', 'Коней');
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
        cat.answer('Конь', 'animals/animalHorse.jpg', 'Спутник богов. Олицетворение мудрости, добра и природных сил. Покоритель пространства и времени. Способен перемещаться между мирами. Используется в обряде инициации, который должен пройти каждый мужчина (укротить природную мощь коня). На конях любят разъезжать как боги, так и домовые или дворовые духи. Атрибуты лошадиной упряжи, подковы, колокольчики, конские черепа – считаются могущественными оберегами, защитой от бед, залогом благополучия.');

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
                    questionAnimals_3();
                }
            });
        });
    }
}

function questionAnimals_3() {
    let questionGodsLoad = new Question();
    questionGodsLoad.question('Какая птица не просто предвещает судьбу, а формирует её?', 'Аист', 'Лебедь', 'Кукушка');
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
        cat.answer('Аист', 'animals/animalStork.jpg', 'Судьбоносная птица, ставшая олицетворением дома, любви, радости. Воплощение силы жизни. Вестник, сообщающий о рождении ребенка (либо приносящий его). Селится вблизи человеческого жилья. Считается, что способен обращаться в человека. Образ аиста связан с рядом примет, обрядов и представлений: если аист устроил на доме гнездо – под его крышей будут счастье и достаток; увидеть аиста – к ладу в семье; увидеть аиста влюбленной девушке – к скорой свадьбе.');

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
                    questionAnimals_4();
                }
            });
        });
    }
}

function questionAnimals_4() {
    let questionGodsLoad = new Question();
    questionGodsLoad.question('С помощью этого дерева славяне связывались с лешим.', 'Ива', 'Рябина', 'Берёза');
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
        cat.answer('Береза', 'animals/animalBirch.jpg', 'Священное дерево, символ плодородия. Опора всей земли (мировое древо). Почитается как символ берегинь, русалок, счастья и женского начала. Практически все части дерева использовались в целительстве. Березовый веник использовался в обрядах очищения. Ветви этого дерева использовались, чтобы наделить плодородностью землю, скот, молодоженов. Под порогом новой конюшни закапывали березовое полено, чтобы водились кони. Береза фигурирует в качестве защиты против всех несчастий. Однако, считается, что женатому мужчине нельзя сажать березу во двоpе – это может привести к смерти кто-то из членов его семьи.');

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
                    questionAnimals_5();
                }
            });
        });
    }
}

function questionAnimals_5() {
    let questionGodsLoad = new Question();
    questionGodsLoad.question('Ведьмы облюбовали это дерево и, обернувшись птицами, сидят на его ветках. О каком дереве идёт речь?', 'Рябина', 'Осина', 'Ольха');
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
        cat.answer('Рябина', 'animals/animalAshberry.jpg', 'Священное дерево Перуна. Считается, что в кроне прячутся молнии громовержца, а ветка с ягодами – символ его палицы, способной защитить человека от всех бед. Обладает свойствами магического исцеления и защиты, используется в наpодной медицине и в качестве обеpега, что не мешает ему считаться «деревом ведьм» (обернувшись птицами, они сидят на её ветвях). Согласно распространенному поверью, веpнyвшись с кладбища, нужно повесить над двеpью pябиновые пpyтья – тогда покойник не возвратится домой.');

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
                    questionAnimals_6();
                }
            });
        });
    }
}

function questionAnimals_6() {
    let questionGodsLoad = new Question();
    questionGodsLoad.question('Эти животные спасают людей от нечистой силы:', 'Овца-бык', 'Коза', 'Конь–лошадь');
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
        cat.answer('Коза', 'animals/animalGoat.jpg', 'Символ плодородия. Оберег от нечистой силы. В песнях и сказках коза символизирует брачный мотив. Рогатая кичка (головной убор), которую носили замужние женщины, обозначала козу, оберегала от сглаза и притягивала удачу. Образ козы использовался в календарных обрядах, связанных с аграрной магией. Считается, что в быту коза заменяла беднякам корову. Принято было держать в овечьем стаде козу, чтобы оградить скот от колдовства и похищений.');

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
                    questionAnimals_7();
                }
            });
        });
    }
}

function questionAnimals_7() {
    let questionGodsLoad = new Question();
    questionGodsLoad.question('Древо это растёт сквозь все миры, являясь символической осью мироздания.', 'Вяз', 'Берёза', 'Дуб');
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
        cat.answer('Дуб', 'animals/animalOak.jpg', 'Священное дерево Перуна, ось мироздания (мировое древо). Обладает свойствами магического исцеления. Является местом обитания священного орла (царя птиц). Считается, что корни дуба уходят глубоко в землю – на глубину, равную высоте его кроны (поэтому дерево символизирует Бога, законы которого правят и на небесах, и под землей). У дуба совершались важнейшие ритуалы, церемонии, инициации и обряды. Удар молнии в дуб считался божественным.');

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
                    questionAnimals_8();
                }
            });
        });
    }
}

function questionAnimals_8() {
    let questionGodsLoad = new Question();
    questionGodsLoad.question('Зверь, очень любимый народом. Славяне говорили о связи этого животного с миром таинственным.', 'Собака', 'Кошка', 'Корова');
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
        cat.answer('Кошка', 'animals/animalCat.jpg', 'Хранитель домашнего очага. Символ созидания и разрушения. Считается зверем Велеса и спутником колдунов, проводником в потусторонний мир. Белая масть означает связь с зарей, черная – с ночью. Образ кота связан с рядом примет, обрядов и представлений. Существует поверье о девяти жизнях, о связи с домовым. Если ночью на грудь навалилась серая кошка – это домовой давит; надо его сразу спросить: «К добру или к худу?» – и выслушать ответ. Если кот умывается или загребает лапами, то ожидай гостей. Если человек кошек любит – то и жену любить будет. При переезде сначала в дом нужно запустить кота: в несчастном доме коты не ведутся.');
        let questNextLoad = document.querySelector('.container__arrow_next'),
            questContainer = document.querySelector('.container__inside')
        ;

        questContainer.removeChild(questNextLoad);
    }
}