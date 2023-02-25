class Choice {

    choiceCategory(categoryClick) {
        let choiceBlock = document.createElement('div');
        choiceBlock.className = 'container__wrapper container__wrapper_padding';
        choiceBlock.innerHTML = `
            <picture id="choiceGod">
                <img src="slavicmyths/images/choiceGod.png" alt="Выбор категории Боги">
            </picture>
            <picture id="choiceCreatures">
                <img src="slavicmyths/images/choiceCreatures.png" alt="Выбор категории Существа">
            </picture><picture id="choiceAnimals">
                <img src="slavicmyths/images/choiceAnimals.png" alt="Выбор категории Животные и растения">
            </picture>
        `;
        container.appendChild(choiceBlock);

        let choiceGod = document.getElementById('choiceGod'),
            choiceCreatures = document.getElementById('choiceCreatures'),
            choiceAnimals = document.getElementById('choiceAnimals')
        ;

        function choiceAnim() {
            let tl = gsap.timeline({
                delay: '-0.3'
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

        // function clickCategory() {
        //     let questLoad = new Quest();
        //     let questionLoad = new Question();
        //     categoryClick.addEventListener('click', () => {
        //         gsap.to(choiceBlock, {
        //             duration: 1,
        //             autoAlpha: 0,
        //             x: '-3%',
        //             onComplete: () => {
        //                 container.removeChild(choiceBlock);
        //                 questLoad.questStart();
        //                 questionLoad.question('questBackImage.jpg', 'Что оставил на память людям бог Перун?', 'Палку', 'Молнию', 'Стрелу')
        //             }
        //         });
        //     });
        // }
        // clickCategory(choiceGod);
        // clickCategory(choiceAnimals);
        // clickCategory(choiceCreatures);
    }
}