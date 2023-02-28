let container = document.querySelector('.container'),
    wrapper = document.querySelector('.wrapper')
;

// Заставка + выбор категории
function introLoad() {
    let introL = new Intro();
    introL.introStart();
    let introButton = document.getElementById('introButton'),
        introBlock = document.querySelector('.container__wrapper'),
        choiceCat = new Choice();

    function introButtonLoadNext() {
        introButton.addEventListener('click', function () {
            gsap.to(introBlock, {
                duration: 1,
                autoAlpha: 0,
                x: '-3%',
                onComplete: () => {
                    container.removeChild(introBlock);
                    choiceCat.choiceCategory();
                    clickCategory();
                }
            });
        })
    }
    introButtonLoadNext();
}

// Пеереход в категорию
function clickCategory() {
    let questLoad = new Quest();
    let choiceGod = document.getElementById('choiceGod'),
        choiceCreatures = document.getElementById('choiceCreatures'),
        choiceAnimals = document.getElementById('choiceAnimals'),
        choiceBlock = document.querySelector('.container__wrapper')
    ;

    choiceGod.addEventListener('click', (e) => {
        gsap.to(choiceBlock, {
            duration: 1,
            autoAlpha: 0,
            x: '-3%',
            onComplete: () => {
                container.removeChild(choiceBlock);
                questLoad.questStart();
                questionGods_1();
            }
        });
        e.preventDefault();
    });

    choiceAnimals.addEventListener('click', () => {
        gsap.to(choiceBlock, {
            duration: 1,
            autoAlpha: 0,
            x: '-3%',
            onComplete: () => {
                container.removeChild(choiceBlock);
                questLoad.questStart();
                questionAnimals_1();
            }
        });
    });

    choiceCreatures.addEventListener('click', () => {
        gsap.to(choiceBlock, {
            duration: 1,
            autoAlpha: 0,
            x: '-3%',
            onComplete: () => {
                container.removeChild(choiceBlock);
                questLoad.questStart();
                questionCreatures_1();
            }
        });
    });
}

function choiceLoad() {
    const choiceLoad = new Choice();
    choiceLoad.choiceCategory();
    clickCategory();
}

function aboutStart() {
    const aboutLoad = new About();

    let clickAboutGame = document.getElementById('clickAboutGame'),
        clickAboutAuthors = document.getElementById('clickAboutAuthors'),
        clickAboutLibrary = document.getElementById('clickAboutLibrary'),
        containerGame = document.querySelector('.container__wrapper')
    ;

    clickAboutGame.addEventListener('click', (e) => {
        aboutLoad.aboutGame('Дорогие друзья!', 'Представляем вашему вниманию игру по славянской мифологии. Проверьте, что вы знаете о сказаниях, легендах и поверьях наших предков. Играя, вы прикоснётесь к миру древних славян – узнаете или вспомните о самых значимых для них богах, существах, животных и растениях. В этой игре мы не можем охватить весь объем мифологических представлений древних славян. Наша игра – лишь приглашение к более глубокому их изучению. Быть может, по завершении игры вам захочется продолжить знакомство с миром наших предков, их жизнью, бытом, мировоззрением. А помочь в этом вам могут книги нашей библиотеки.')
        e.preventDefault();
    });

    clickAboutAuthors.addEventListener('click', () => {
        aboutLoad.aboutAuthors('сценарист', 'Инна Ямщикова', 'редактор', 'Андрей Косицин', 'художники', 'Елена Расторгуева<br />Вера Расторгуева', 'Программист', 'Александр Суворов');
    });

    clickAboutLibrary.addEventListener('click', () => {
        aboutLoad.aboutLibrary('О библиотеке', 'МБУК г.о. Самара «Самарская муниципальная информационно-библиотечная система» была создана в декабре 1986 года. На сегодняшний день в ее составе - Центральная городская библиотека имени Н.К. Крупской и 35 библиотек-филиалов, нашими читателями являются жители всех 9 районов города. Библиотеки системы – это информационные, образователь- ные центры, место культурного отдыха и общения. СМИБС находится в центре мировых событий, активно участвует в общероссийских акциях и в жизни города.', 'В библиотеках системы можно получить информацию и литературу по любой теме, доступ к электронным базам данных, воспользоваться услугами Интернет-залов, Центрами общественного доступа, побывать на презентациях выставок и творческих встречах, а также воспользоваться дополнительными сервисными услугами:<br />• ксерокопированием<br />• сканированием<br />• ламинированием<br />• документов<br />• распечаткой информации<br />• на принтере<br />• записью на электронные<br />• носители');
    });
}

function init() {
    introLoad();
    // questLoad();
    // choiceLoad();
    aboutStart();
}

init();
