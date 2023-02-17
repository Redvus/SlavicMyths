class Choice {

    choiceCategory() {
        let choiceBlock = document.createElement('div');
        choiceBlock.className = 'container__wrapper container__wrapper_padding';
        choiceBlock.innerHTML = `
            <picture id="choiceGod">
                <img src="images/choiceGod.png" alt="Выбор категории Боги">
            </picture>
            <picture id="choiceCreatures">
                <img src="images/choiceCreatures.png" alt="Выбор категории Существа">
            </picture><picture id="choiceAnimals">
                <img src="images/choiceAnimals.png" alt="Выбор категории Животные и растения">
            </picture>
        `;
        container.appendChild(choiceBlock);

        let choiceGod = document.getElementById('choiceGod'),
            choiceCreatures = document.getElementById('choiceCreatures'),
            choiceAnimals = document.getElementById('choiceAnimals')
        ;

        function choiceAnim() {
            let tl = gsap.timeline({
                delay: '-0.2'
            });
            tl
                .fromTo([choiceAnimals, choiceCreatures, choiceGod], {
                    autoAlpha: 0,
                    y: '-10%'
                }, {
                    duration: 1,
                    delay: 0.3,
                    autoAlpha: 1,
                    y: 0,
                    stagger: 0.3
                })
            ;
        }
        choiceAnim();

        function clickCategory() {
            let questLoad = new Question();
            choiceGod.addEventListener('click', () => {
                gsap.to(choiceBlock, {
                    duration: 1,
                    autoAlpha: 0,
                    x: '-3%',
                    onComplete: args => {
                        container.removeChild(choiceBlock);
                        questLoad.questStart('questBackImage.jpg', 'БЕЛБОГ', 'Светлый Бог Прави (Внешнего мира). Олицетворение добра, удачи, счастья, блага. Младший брат Чернобога. Выглядит как старик с седыми волосами, бородой и голубыми глазами. Одет в светлые одежды, в руках держит посох. Считается, что вселяет в человека веру и мысли о чем-то хорошем и добром, помогает заблудившимся в лесу, соблюдает порядок и справедливость в мире.');
                    }
                });
            });
            choiceAnimals.addEventListener('click', () => {
                gsap.to(choiceBlock, {
                    duration: 1,
                    autoAlpha: 0,
                    x: '-3%',
                    onComplete: args => {
                        container.removeChild(choiceBlock);
                        questLoad.questStart('god/godBelbog.jpg', 'БЕЛБОГ', 'Выглядит как старик с седыми волосами, бородой и голубыми глазами. Одет в светлые одежды, в руках держит посох. Считается, что вселяет в человека веру и мысли о чем-то хорошем и добром, помогает заблудившимся в лесу, соблюдает порядок и справедливость в мире.');
                    }
                });
            });
            choiceCreatures.addEventListener('click', () => {
                gsap.to(choiceBlock, {
                    duration: 1,
                    autoAlpha: 0,
                    x: '-3%',
                    onComplete: args => {
                        container.removeChild(choiceBlock);
                        questLoad.questStart('god/godBelbog.jpg', 'БЕЛБОГ', 'Светлый Бог Прави (Внешнего мира). Олицетворение добра, удачи, счастья, блага. Младший брат Чернобога. Выглядит как старик с седыми волосами, бородой и голубыми глазами.');
                    }
                });
            });
        }
        clickCategory();
    }
}