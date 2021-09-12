var height;
const button = document.querySelector(".openmenu");
const menu = document.querySelector(".menu");
const menuicon = document.querySelector(".menuicon");

button.addEventListener('click', function () {
    menu.classList.toggle("visible");
    menuicon.classList.toggle("flip");
});


height = $('.mainsplash').height();
if ($(window).scrollTop() + $('.sidebar').height() < height) {
    $("nav").addClass("blur");
    $("nav").removeClass("solidbg");
} else {
    $("nav").removeClass("blur");
    $("nav").addClass("solidbg");
}

$(window).on("scroll", function () {
    height = $('.mainsplash').height();
    if ($(window).scrollTop() + $('nav').height() < height) {
        $("nav").addClass("blur");
        $("nav").removeClass("solidbg");
    } else {
        $("nav").removeClass("blur");
        $("nav").addClass("solidbg");
    }
});