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

let scrollTo = (domID) => {
    document.querySelector(domID).scrollIntoView({ behavior: 'smooth', block: 'start' });
    
}
scrollTo('#introid");
scrollTo('#projectid');
scrollTo('#illusid');
scrollTo('#getintouch');
