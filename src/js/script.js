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

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                /* $('.catalog-item__wrapper').eq(i).toggleClass('catalog-item__wrapper_active'); */
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item_back');


    //modal

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('fast');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks, #order').fadeOut('fast');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('fast');
        });
    });
    

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Пожалуйста, введите своё имя",
                phone: "Полажуйста, введите ваш телефон",
                email: {
                    required: "Пожалуйста, введите свой email",
                    email: "ваш email должен быть в формате: name@domain.com"
                }
            }

        });
    }
    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });

    validateForms('#first_form');
    validateForms('#consultation_form');
    validateForms('#order_form');

 

    
    /* $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('fast');


            $('form').trigger('reset');
        });
        return false;
    });  */
/* ___________________________________________________________________________________ */
    
    $('form').submit(function (e) {
        if ($(this).valid() === true) {
            console.log('Форма прошла валидацию, отправляем письмо.');
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: "mailer/smart.php",
                data: $(this).serialize()
            }).done(function() {
                $(this).find("input").val("");
                $('#consultation, #order').fadeOut();
                $('.overlay, #thanks').fadeIn('fast');


                $('form').trigger('reset');
            });
            return false;
        }
    });

/* _____________________________________________________________________________________________ */

    $('input[name=phone]').mask("+7 (999) 999 99-99");
    //scrol

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1100) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    
    new WOW().init();
}); 
