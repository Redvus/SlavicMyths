class Question {
    questStart(questImage,
               questTitle,
               questVar1,
               questVar2,
               questVar3,
               questNext) {
        let questBlock = document.createElement('div');
        questBlock.className = 'container__wrapper';
        questBlock.innerHTML = `
            <picture class="container__back">
                <img src="images/containerBack.png" alt="Задний фон контейнера">
            </picture>
            <div class="container__inside">
                <picture class="container__inside_back">
                    <img src="images/paperBack.png" alt="Старая бумага как основной фон">
                </picture>
    
                <div class="container__frame container__frame_left">
                    <picture class="frame__left_top">
                        <img src="images/frameEmpty.png" alt="Рамка пустая">
                    </picture>
                    <picture class="frame__left_back">
                        <img src="images/${questImage}" alt="Сменная картинка">
                    </picture>
                    <picture class="frame__left_quest">
                        <img src="images/questBackText.png" alt="Задник вопроса">
                        <span>${questTitle}</span>
                    </picture>
                </div>
    
                <div class="container__frame container__frame_right">
                    <picture class="frame__right_top">
                        <img src="images/frameEmpty.png" alt="Рамка пустая">
                    </picture>
                    <picture class="frame__right_back">
                        <img src="images/frameTextBack.jpg" alt="Задний фон под текстом">
                    </picture>
                    <div class="frame__right_buttons">
                        <picture class="frame__right_button">
                            <img src="images/questButtonYellow.png" alt="Кнопка вопроса первая">
                            <span>${questVar1}</span>
                        </picture>
                        <picture class="frame__right_button">
                            <img src="images/questButtonRed.png" alt="Кнопка вопроса вторая">
                            <span>${questVar2}</span>
                        </picture>
                        <picture class="frame__right_button">
                            <img src="images/questButtonGreen.png" alt="Кнопка вопроса третья">
                            <span>${questVar3}</span>
                        </picture>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(questBlock);
    }
}