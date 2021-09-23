const slideShow = document.querySelector('.slide1');
slideShow.style.transition = "transform 0.3s ease-in";
const imgs = document.querySelectorAll('.slide1 img');

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const style = getComputedStyle(slideShow);
var translatedX = 0;

//arrow function
next.addEventListener('mousedown', () => {
    if (translatedX >= -1700) {
        translatedX -= 200;
        slideShow.style.transform += 'translateX(-200px)';
    }
});

prev.addEventListener('mousedown', () => {
    if (translatedX <= -100) {
        translatedX += 200;
        slideShow.style.transform += 'translateX(200px)';
    }
});

function scrollToIntro() {
    document.querySelector('#introid').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToProj() {
    document.querySelector('#projectid').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToIllus() {
    document.querySelector('#illusid').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToContact() {
    document.querySelector('#getintouch').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

