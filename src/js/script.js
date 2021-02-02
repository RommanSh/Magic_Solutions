        /* Slick slider */

/* Slider products page */

$(document).ready(function(){
    $('.slider__inner').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next.svg"></button>',
    });
});