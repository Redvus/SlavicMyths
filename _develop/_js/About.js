class About {

    aboutAuthors(peronFirstTitle, peronFirstName, peronSecondTitle, peronSecondName, peronThirdTitle, peronThirdName, peronFourthTitle, peronFourthName) {
        let introBlock = document.createElement('div');
        introBlock.className = 'container__about';
        introBlock.innerHTML = `
            <div class="container__about_inside">
                <picture id="aboutAuthorsBack" class="container__about_back">
                    <img src="assets/games/slavicmyths/images/aboutBack.png" alt="Фон информации об авторах">
                </picture>
                <picture id="aboutAuthorsFrame" class="container__about_frame">
                    <img src="assets/games/slavicmyths/images/frameEmpty.png" alt="Рамка информации об авторах">
                </picture>
                <picture id="aboutAuthorsFrameBack" class="container__about_frameback">
                    <img src="assets/games/slavicmyths/images/frameTextBack.jpg" alt="Фон рамки информации об авторах">
                </picture>
                <div class="container__about_text">
                    <h1 class="container__about_title">Об авторах</h1>
                    <div class="container__about_person">
                        <h3>${peronFirstTitle}</h3>
                        <p>${peronFirstName}</p>
                        <picture class="container__about_line">
                            <img src="assets/games/slavicmyths/images/aboutBrake.png" alt="Разделитель авторов">
                        </picture>
                    </div>
                    <div class="container__about_person">
                        <h3>${peronSecondTitle}</h3>
                        <p>${peronSecondName}</p>
                        <picture class="container__about_line">
                            <img src="assets/games/slavicmyths/images/aboutBrake.png" alt="Разделитель авторов">
                        </picture>
                    </div>
                    <div class="container__about_person">
                        <h3>${peronThirdTitle}</h3>
                        <p>${peronThirdName}</p>
                        <picture class="container__about_line">
                            <img src="assets/games/slavicmyths/images/aboutBrake.png" alt="Разделитель авторов">
                        </picture>
                    </div>
                    <div class="container__about_person">
                        <h3>${peronFourthTitle}</h3>
                        <p>${peronFourthName}</p>
                        <picture class="container__about_line">
                            <img src="assets/games/slavicmyths/images/aboutBrake.png" alt="Разделитель авторов">
                        </picture>
                    </div>
                </div>
            </div>
            <picture class="container__about_arrow" id="arrowAboutBack">
                <img src="assets/games/slavicmyths/images/arrowBack.png" alt="Кнопка возврата в игру">
            </picture>
        `
        document.body.appendChild(introBlock);

        let aboutAuthorsBack = document.getElementById('aboutAuthorsBack'),
            aboutAuthorsFrame = document.getElementById('aboutAuthorsFrame'),
            aboutAuthorsFrameBack = document.getElementById('aboutAuthorsFrameBack'),
            containerAboutTitle = document.querySelector('.container__about_title'),
            containerAboutPerson = document.querySelectorAll('.container__about_person'),
            arrowAboutBack = document.getElementById('arrowAboutBack'),
            containerAbout = document.querySelector('.container__about')
        ;

        function aboutAuthorsAnim() {
            let tl = new gsap.timeline();

            tl
                .fromTo(aboutAuthorsBack, {
                    autoAlpha: 0
                }, {
                    duration: 0.8,
                    autoAlpha: 1
                })
                .fromTo(aboutAuthorsFrame, {
                    autoAlpha: 0
                }, {
                    duration: 0.6,
                    delay: '-0.5',
                    autoAlpha: 1
                })
                .fromTo(aboutAuthorsFrameBack, {
                    autoAlpha: 0
                }, {
                    duration: 0.6,
                    delay: '-0.5',
                    autoAlpha: 1
                })
                .fromTo(containerAboutTitle, {
                    autoAlpha: 0
                }, {
                    duration: 0.4,
                    delay: '-0.3',
                    autoAlpha: 1
                })
                .fromTo(containerAboutPerson, {
                    autoAlpha: 0
                }, {
                    duration: 0.4,
                    delay: '-0.3',
                    autoAlpha: 1,
                    stagger: 0.07
                })
            ;
        }
        aboutAuthorsAnim();

        arrowAboutBack.addEventListener('click', () => {
            gsap.to(containerAbout, {
                duration: 0.3,
                autoAlpha: 0,
                onComplete: () => {
                    document.body.removeChild(containerAbout);
                }
            })
        });
    }

    aboutGame(aboutGameTitle, aboutGameText) {
        let introBlock = document.createElement('div');
        introBlock.className = 'container__info';
        introBlock.innerHTML = `
            <div class="container__info_inside">
                <picture id="aboutGameBack" class="container__info_frame">
                    <img src="assets/games/slavicmyths/images/aboutMainBack.png" alt="Фон информации об игре">
                </picture>
                <picture id="aboutGameFrameBack" class="container__info_back">
                    <img src="assets/games/slavicmyths/images/aboutMainPaper.png" alt="Фон рамки информации об авторах">
                </picture>
                <div id="aboutGameFrameText" class="container__info_text">
                    <h1>${aboutGameTitle}</h1>
                    <p>${aboutGameText}</p>
                </div>
            </div>
            <picture class="container__about_arrow" id="arrowInfoBack">
                <img src="assets/games/slavicmyths/images/arrowBack.png" alt="Кнопка возврата в игру">
            </picture>
        `
        document.body.appendChild(introBlock);

        let aboutGameBack = document.getElementById('aboutGameBack'),
            aboutGameFrameBack = document.getElementById('aboutGameFrameBack'),
            aboutGameFrameText = document.getElementById('aboutGameFrameText'),
            arrowInfoBack = document.getElementById('arrowInfoBack'),
            containerInfo = document.querySelector('.container__info')
        ;

        function aboutGameAnim() {
            let tl = new gsap.timeline();

            tl
                .fromTo(aboutGameBack, {
                    autoAlpha: 0
                }, {
                    duration: 0.8,
                    autoAlpha: 1
                })
                .fromTo(aboutGameFrameBack, {
                    autoAlpha: 0
                }, {
                    duration: 0.6,
                    delay: '-0.5',
                    autoAlpha: 1
                })
                .fromTo(aboutGameFrameText, {
                    autoAlpha: 0
                }, {
                    duration: 0.8,
                    delay: '-0.2',
                    autoAlpha: 1
                })
            ;
        }
        aboutGameAnim();

        arrowInfoBack.addEventListener('click', () => {
            gsap.to(containerInfo, {
                duration: 0.3,
                autoAlpha: 0,
                onComplete: () => {
                    document.body.removeChild(containerInfo);
                }
            })
        });
    }

    aboutLibrary(libraryTitle, libraryLeftText, libraryRightText) {
        let questBlock = document.createElement('div');
        questBlock.className = 'container__library';
        questBlock.innerHTML = `
            <div class="container__library_inside">
                <picture class="container__back" id="containerLibraryBack">
                    <img src="assets/games/slavicmyths/images/containerBack.png" alt="Задний фон контейнера">
                </picture>
                <div class="container__inside">
                    <picture class="container__inside_back" id="containerLibraryPaper">
                        <img src="assets/games/slavicmyths/images/paperBack.png" alt="Старая бумага как основной фон">
                    </picture>
                    <div class="container__frame container__frame_left">
                        <picture class="frame__left_top" id="containerLibraryFrameLeft">
                            <img src="assets/games/slavicmyths/images/frameTitle.png" alt="Рамка с названием">
                        </picture>
                        <picture class="frame__left_back" id="containerLibraryFrameLeftBack">
                            <img src="assets/games/slavicmyths/images/frameTextBack.jpg" alt="Задний фон под текстом">
                        </picture>
                        <div class="frame__left_title" id="containerLibraryTitle">
                            <h2>${libraryTitle}</h2>
                        </div>
                        <div class="frame__left_text" id="containerLibraryLeftText">
                            <p>${libraryLeftText}</p>
                        </div>
                    </div>
                    <div class="container__frame container__frame_right">
                        <picture class="frame__right_top" id="containerLibraryFrameRight">
                            <img src="assets/games/slavicmyths/images/frameEmpty.png" alt="Рамка пустая">
                        </picture>
                        <picture class="frame__right_back" id="containerLibraryFrameRightBack">
                            <img src="assets/games/slavicmyths/images/frameTextBack.jpg" alt="Задний фон под текстом">
                        </picture>
                        <div class="frame__right_text" id="containerLibraryRightText">
                            <p>${libraryRightText}</p>
                        </div>
                    </div>
                </div>
            </div>
            <picture class="container__about_arrow container__library_arrow" id="arrowLibraryBack">
                <img src="assets/games/slavicmyths/images/arrowBack.png" alt="Кнопка возврата в игру">
            </picture>
        `;
        document.body.appendChild(questBlock);

        let containerLibraryBack = document.getElementById('containerLibraryBack'),
            containerLibraryPaper = document.getElementById('containerLibraryPaper'),
            containerLibraryFrameLeft = document.getElementById('containerLibraryFrameLeft'),
            containerLibraryFrameLeftBack = document.getElementById('containerLibraryFrameLeftBack'),
            containerLibraryTitle = document.getElementById('containerLibraryTitle'),
            containerLibraryLeftText = document.getElementById('containerLibraryLeftText'),
            containerLibraryFrameRight = document.getElementById('containerLibraryFrameRight'),
            containerLibraryFrameRightBack = document.getElementById('containerLibraryFrameRightBack'),
            containerLibraryRightText = document.getElementById('containerLibraryRightText'),
            arrowLibraryBack = document.getElementById('arrowLibraryBack'),
            containerLibrary = document.querySelector('.container__library')
        ;

        function aboutLibraryAnim() {
            let tl = new gsap.timeline();

            tl
                .fromTo(containerLibraryBack, {
                    autoAlpha: 0
                }, {
                    duration: 0.8,
                    autoAlpha: 1
                })
                .fromTo(containerLibraryPaper, {
                    autoAlpha: 0
                }, {
                    duration: 0.6,
                    delay: '-0.3',
                    autoAlpha: 1
                })
                .fromTo([containerLibraryFrameLeft, containerLibraryFrameRight], {
                    autoAlpha: 0
                }, {
                    duration: 0.6,
                    delay: '-0.3',
                    stagger: 0.07,
                    autoAlpha: 1
                })
                .fromTo([containerLibraryFrameLeftBack, containerLibraryFrameRightBack], {
                    autoAlpha: 0
                }, {
                    duration: 0.6,
                    delay: '-0.3',
                    stagger: 0.07,
                    autoAlpha: 1
                })
                .fromTo([containerLibraryTitle, containerLibraryLeftText, containerLibraryRightText], {
                    autoAlpha: 0
                }, {
                    duration: 0.4,
                    delay: '-0.3',
                    stagger: 0.05,
                    autoAlpha: 1
                })
            ;
        }
        aboutLibraryAnim();

        arrowLibraryBack.addEventListener('click', () => {
            gsap.to(containerLibrary, {
                duration: 0.3,
                autoAlpha: 0,
                onComplete: () => {
                    document.body.removeChild(containerLibrary);
                }
            })
        });
    }
}