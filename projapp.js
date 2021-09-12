var height, topBar;
const button = document.querySelector(".openmenu");
const menu = document.querySelector(".menu");
const menuicon = document.querySelector(".menuicon");

button.addEventListener('click', function () {
    menu.classList.toggle("visible");
    menuicon.classList.toggle("flip");
});

function checkBarSize(elementString) {
    topBar = document.getElementById(elementString).offsetTop - $('.sidebar').height() - 10;
    window.scroll({ top: topBar, behavior: "smooth" });
}

function scrollToA() {
    checkBarSize("#a");
}

function scrollToB() {
    checkBarSize("#b");
}

function scrollToC() {
    checkBarSize("#c");
}

function scrollToD() {
    checkBarSize("#d");
}

function scrollToE() {
    checkBarSize("#e");
}

function scrollToF() {
    checkBarSize("#f");
}


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
