$(document).ready(function(){

    /* Slider index.html */

    $('.main-slider__inner').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev-main.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next-main.svg"></button>'
    });

    /* Slider result.html, blocker.html, hologram.html, security.html, battary.html, clean.html, login.html, smart.html */

    $('.slider__inner').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next.svg"></button>'
    });
});