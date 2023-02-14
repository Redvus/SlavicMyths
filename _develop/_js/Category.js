class Category {
    categoriesStart(categoryImages, categoryTitle, categoryText) {
        let categories = document.createElement('div');
        categories.className = 'container__wrapper';
        categories.innerHTML = `
            <picture class="container__back">
                <img src="images/containerBack.png" alt="Задний фон контейнера">
            </picture>
            <div class="container__inside">
                <picture class="container__inside_back">
                    <img src="images/paperBack.png" alt="Старая бумага как основной фон">
                </picture>
    
                <div class="container__frame container__frame_left">
                    <picture class="frame__left_top">
                        <img src="images/frameTitle.png" alt="Рамка с название">
                    </picture>
                    <picture class="frame__left_back">
                        <img src="images/${categoryImages}" alt="Сменная картинка">
                    </picture>
                    <div class="frame__left_title">
                        <h2>${categoryTitle}</h2>
                    </div>
                </div>
    
                <div class="container__frame container__frame_right">
                    <picture class="frame__right_top">
                        <img src="images/frameEmpty.png" alt="Рамка пустая">
                    </picture>
                    <picture class="frame__right_back">
                        <img src="images/frameTextBack.jpg" alt="Задний фон под текстом">
                    </picture>
                    <div class="frame__right_text">
                        <p>${categoryText}</p>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(categories);
    }
}