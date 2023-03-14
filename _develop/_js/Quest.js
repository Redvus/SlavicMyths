class Quest {
    questStart() {
        let questBlock = document.createElement('div');
        questBlock.className = 'container__wrapper';
        questBlock.innerHTML = `
            <picture class="container__back">
                <img src="assets/games/slavicmyths/images/containerBack.png" alt="Задний фон контейнера">
            </picture>
            <div class="container__inside">
                <picture class="container__inside_back">
                    <img src="assets/games/slavicmyths/images/paperBack.png" alt="Старая бумага как основной фон">
                </picture>
    
                <div class="container__frame container__frame_left"></div>
                <div class="container__frame container__frame_right"></div>
                
                <picture class="container__arrow container__arrow_back" id="arrowBack">
                    <img src="assets/games/slavicmyths/images/arrowBack.png" alt="">
                </picture>
            </div>`;
        container.appendChild(questBlock);

        const containerBack = document.querySelector('.container__back'),
            containerInside = document.querySelector('.container__inside'),
            containerFrameLeft = document.querySelector('.container__frame_left'),
            containerFrameRight = document.querySelector('.container__frame_right'),
            arrowBack = document.getElementById('arrowBack')
        ;

        function questAnim() {
            let tl = new gsap.timeline();

            tl
                .fromTo(containerBack, {
                    autoAlpha: 0
                }, {
                    duration: 0.8,
                    autoAlpha: 1
                })
                .fromTo(containerInside, {
                    autoAlpha: 0,
                }, {
                    duration: 0.5,
                    delay: '-0.2',
                    autoAlpha: 1,
                })
                .fromTo([containerFrameLeft, containerFrameRight], {
                    autoAlpha: 0
                }, {
                    duration: 0.5,
                    delay: '-0.2',
                    autoAlpha: 1,
                    stagger: 0.1
                })
                .fromTo(arrowBack, {
                    autoAlpha: 0,
                    x: '10%'
                }, {
                    duration: 0.4,
                    delay: '-0.4',
                    autoAlpha: 1,
                    x: 0
                })
            ;
        }
        questAnim();

        arrowBack.addEventListener('click', () => {
           const questBack = new Choice(),
                questBlock = document.querySelector('.container__wrapper'),
                questContainer = document.querySelector('.container')
           ;
           gsap.to(questBlock, {
               autoAlpha: 0,
               x: '3%',
               onComplete: () => {
                   questContainer.removeChild(questBlock);
                   questBack.choiceCategory();
                   clickCategory();
               }
           })
        });
    }
}