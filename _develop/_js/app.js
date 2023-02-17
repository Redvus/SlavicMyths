let container = document.querySelector('.container'),
    wrapper = document.querySelector('.wrapper')
;

function introLoad() {
    let introL = new Intro();
    introL.introStart();
}

function choiceLoad() {
    let choiceL = new Choice();
    choiceL.choiceCategory();

}
function categoryLoad() {
    let cat = new Category();
    cat.categoriesStart('god/godBelbog.jpg', 'БЕЛБОГ', 'Светлый Бог Прави (Внешнего мира). Олицетворение добра, удачи, счастья, блага. Младший брат Чернобога. Выглядит как старик с седыми волосами, бородой и голубыми глазами. Одет в светлые одежды, в руках держит посох. Считается, что вселяет в человека веру и мысли о чем-то хорошем и добром, помогает заблудившимся в лесу, соблюдает порядок и справедливость в мире.');
}

function questLoad() {
    let questLoad = new Question();
    questLoad.questStart('questBackImage.jpg', 'Что оставил на память людям бог Перун?', 'Палку', 'Молнию', 'Стрелу');
}

function titleSound() {
    let titleCl = document.querySelector('.frame__left_title');
    let sounds = new Sounds();
    // titleCl.addEventListener('click', function () {
    //     sounds.greeting();
    // });
}

function init() {
    // introLoad();
    // choiceLoad();
    // categoryLoad();
    questLoad();
}

init();
