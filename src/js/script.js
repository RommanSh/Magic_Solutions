$(document).ready(function(){

    /* Slider index.html */

    $('.main-slider__inner').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 900,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev-main.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next-main.svg"></button>',
        
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 600,
                    arrows: false
                }

            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }

            }
        ]
    });

    /* Slider result.html, blocker.html, hologram.html, security.html, battary.html, clean.html, login.html, smart.html */

    $('.slider__inner').slick({
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: true,
                    verticalSwiping: true,
                    arrows: false
                }
            }
        ]
    });
});