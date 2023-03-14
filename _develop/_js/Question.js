class Question {
    question(questTitle, questVar1, questVar2, questVar3) {
        let questBlockLeft = document.createElement('div'),
            questBlockLeftChange = document.querySelector('.container__frame_left'),
            questBlockRight = document.createElement('div'),
            questBlockRightChange = document.querySelector('.container__frame_right')
        ;
        questBlockLeft.className = 'frame__left_change';
        questBlockRight.className = 'frame__right_change';
        questBlockLeft.innerHTML = `
            <picture class="frame__left_top">
                <img src="assets/games/slavicmyths/images/frameEmpty.png" alt="Рамка пустая">
            </picture>
            <picture class="frame__left_back">
                <img src="assets/games/slavicmyths/images/questBackImage.jpg" alt="Сменная картинка">
            </picture>
            <picture class="frame__left_quest">
                <img src="assets/games/slavicmyths/images/questBackText.png" alt="">
                <span>${questTitle}</span>
            </picture>
            <picture class="frame__left_wrong">
                <img src="assets/games/slavicmyths/images/wrongChoiceBack.png" alt="Не правильный ответ">
                <span>Не верно! Подумай</span>
            </picture>`;
        questBlockLeftChange.appendChild(questBlockLeft);

        questBlockRight.innerHTML = `
            <picture class="frame__right_top">
                <img src="assets/games/slavicmyths/images/frameEmpty.png" alt="Рамка пустая">
            </picture>
            <picture class="frame__right_back">
                <img src="assets/games/slavicmyths/images/frameTextBack.jpg" alt="Задний фон под текстом">
            </picture>
            <div class="frame__right_buttons">
                <picture class="frame__right_button" id="questVar_1">
                    <img src="assets/games/slavicmyths/images/questButtonYellow.png" alt="Кнопка вопроса первая">
                    <p>${questVar1}</p>
                </picture>
                <picture class="frame__right_button" id="questVar_2">
                    <img src="assets/games/slavicmyths/images/questButtonRed.png" alt="Кнопка вопроса вторая">
                    <p>${questVar2}</p>
                </picture>
                <picture class="frame__right_button" id="questVar_3">
                    <img src="assets/games/slavicmyths/images/questButtonGreen.png" alt="Кнопка вопроса третья">
                    <p>${questVar3}</p>
                </picture>
            </div>`;
        questBlockRightChange.appendChild(questBlockRight);

        function questionAnim() {
            gsap.fromTo([questBlockLeft, questBlockRight], {
                autoAlpha: 0
            }, {
                duration: 1,
                delay: '-0.2',
                autoAlpha: 1,
                stagger: 0.1
            })
        }
        questionAnim();
    }

    answer(answerTitle, answerImage, answerText) {
        let answerBlockLeft = document.createElement('div'),
            answerBlockLeftChange = document.querySelector('.container__frame_left'),
            answerBlockRight = document.createElement('div'),
            answerBlockRightChange = document.querySelector('.container__frame_right'),
            containerInside = document.querySelector('.container__inside')
        ;

        let arrowNext = document.createElement('picture');
        arrowNext.className = 'container__arrow container__arrow_next';
        arrowNext.innerHTML = `
            <img src="assets/games/slavicmyths/images/arrowNext.png" alt="Следующий вопрос">
        `;
        containerInside.appendChild(arrowNext);

        answerBlockLeft.className = 'frame__left_change';
        answerBlockRight.className = 'frame__right_change';
        answerBlockLeft.innerHTML = `
            <picture class="frame__left_top">
                <img src="assets/games/slavicmyths/images/frameTitle.png" alt="Рамка с названием">
            </picture>
            <picture class="frame__left_back">
                <img src="assets/games/slavicmyths/images/${answerImage}" alt="Сменная картинка">
            </picture>
            <div class="frame__left_title">
                <h2>${answerTitle}</h2>
            </div>`;
        answerBlockLeftChange.appendChild(answerBlockLeft);

        answerBlockRight.innerHTML = `
            <picture class="frame__right_top">
                <img src="assets/games/slavicmyths/images/frameEmpty.png" alt="Рамка пустая">
            </picture>
            <picture class="frame__right_back">
                <img src="assets/games/slavicmyths/images/frameTextBack.jpg" alt="Задний фон под текстом">
            </picture>
            <div class="frame__right_text">
                <p>${answerText}</p>
            </div>`;
        answerBlockRightChange.appendChild(answerBlockRight);

        function answerLoad() {
            let tl = new gsap.timeline(),
                arrowNextLoad = document.querySelector('.container__arrow_next')
            ;
            tl
                .fromTo([answerBlockLeft, answerBlockRight], {
                    duration: 0.5,
                    autoAlpha: 0
                }, {
                    autoAlpha: 1
                    }
                )
                .fromTo(arrowNextLoad, {
                    autoAlpha: 0
                }, {
                    duration: 0.4,
                    delay: '-0.4',
                    autoAlpha: 1
                })
            ;
        }
        answerLoad();
    }
}