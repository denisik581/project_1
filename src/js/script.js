$(document).ready(function(){
    $('.carusel__iner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icon/left_a.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icon/right_a.png"></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    dots: true,
                    dotsClass: 'slick-dots-my',
                    arrows: false,
                    speed: 600,
                    adaptiveHeight: false,
                }
            }
        ]
    });
}); 

/* const slider = tns({
    container: '.carusel__iner',
    items: 1,
    autoplay: false,
    controls: false,
    nav: false
    
});
document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
}); 

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
}); */