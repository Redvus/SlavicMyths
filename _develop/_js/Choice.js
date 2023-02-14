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

        let tl = gsap.timeline(),
            choiceGod = document.getElementById('choiceGod'),
            choiceCreatures = document.getElementById('choiceCreatures'),
            choiceAnimals = document.getElementById('choiceAnimals')
        ;

        function choiceAnim() {
            tl
                .fromTo([choiceAnimals, choiceCreatures, choiceGod], {
                    autoAlpha: 0,
                    y: '-10%'
                }, {
                    duration: 1,
                    delay: 0.3,
                    autoAlpha: 1,
                    y: 0,
                    stagger: 0.3,
                    easy: 'circ'
                })
            ;
        }

        choiceAnim();
    }
}