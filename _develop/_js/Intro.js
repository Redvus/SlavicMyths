class Intro {

    introStart() {
        let introBlock = document.createElement('div');
        introBlock.className = 'container__wrapper';
        introBlock.innerHTML = `
            <picture id="introS">
                <img src="images/startS.png" alt="Заглавная буква С">
            </picture>
            <picture id="introSlavic">
                <img src="images/startSlavic.png" alt="Славянские">
            </picture>
            <picture id="introM">
                <img src="images/startM.png" alt="Заглавная буква М">
            </picture>
            <picture id="introMyths">
                <img src="images/startMyths.png" alt="Мифы">
            </picture>
            <picture id="introButton">
                <img src="images/startButton.png" alt="Запустить игру">
            </picture>
        `;
        container.appendChild(introBlock);

        let
            introS = document.getElementById('introS'),
            introM = document.getElementById('introM'),
            introSlavic = document.getElementById('introSlavic'),
            introMyth = document.getElementById('introMyths'),
            introButton = document.getElementById('introButton'),
            choiceCat = new Choice()
        ;

        function introAnim() {
            let tl = gsap.timeline({
                onComplete: introButtonLoadNext
            });

            tl
                .fromTo(introS, {
                    autoAlpha: 0,
                    x: '-10%'
                }, {
                    duration: 1,
                    delay: 0.3,
                    autoAlpha: 1,
                    x: 0,
                    easy: 'circ'
                })
                .fromTo(introSlavic, {
                    autoAlpha: 0,
                    x: '5%'
                }, {
                    duration: 1,
                    delay: '-0.7',
                    autoAlpha: 1,
                    x: 0,
                    easy: 'circ'
                })
                .fromTo([introM, introMyth], {
                    autoAlpha: 0,
                    x: '5%'
                }, {
                    duration: 1,
                    delay: '-0.7',
                    autoAlpha: 1,
                    x: 0,
                    stagger: 0.45,
                    easy: 'circ'
                })
                .fromTo(introButton, {
                    autoAlpha: 0,
                    y: '10%'
                }, {
                    duration: 1,
                    delay: '-0.8',
                    autoAlpha: 1,
                    y: 0,
                    easy: 'circ'
                })
            ;
        }

        function introButtonLoadNext() {
            introButton.addEventListener('click', function () {
                gsap.to(introBlock, {
                    duration: 1,
                    autoAlpha: 0,
                    x: '-3%',
                    onComplete: args => {
                        container.removeChild(introBlock);
                        choiceCat.choiceCategory();
                    }
                });
            })
        }

        introAnim();
    }
}