let container = document.querySelector('.container'),
    wrapper = document.querySelector('.wrapper')
;

function loadStart(obj, objClass, objImages) {
    let startS = document.createElement(obj);
    startS.className = objClass;
    startS.innerHTML = `
        <img src="${objImages}" alt="${objImages}">
    `;
    container.appendChild(startS);

    let tl = gsap.timeline();

    tl
        .from(startS, {
            duration: 1,
            delay: 2,
            autoAlpha: 0,
            y: '-3%',
            ease: 'back'
        })
    ;

    wrapper.addEventListener('click', function () {
        gsap.to(startS, {
            duration: 1,
            delay: 0.5,
            autoAlpha: 0,
            onComplete: function () {
                container.removeChild(startS);
            }
        });
    });
}

function init() {
    loadStart('picture', 'container__back', 'images/containerBack.png');
}

init();
