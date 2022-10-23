$(function () {
    $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active');
        $('.gnb').toggleClass('on');
        if ($('.gnb').hasClass('on')) {
            $('html, body').addClass('noScroll');
            $('.main_slider').slick('slickPause');
        } else {
            $('html, body').toggleClass('noScroll');
            $('.main_slider').slick('slickPlay');
        };
    });

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $('.smenu').slideUp();
            $(this).next().stop().slideToggle();
        }
    });

    $(window).on('resize', function () {
        $('.gnb').removeClass('on');
        $('.smenu').removeAttr('style');
    });

    $(window).on("scroll", function () {
        var sct = $(window).scrollTop();
        if (sct > 0) {
            $(".header .bottom_menu").addClass("on");
        } else {
            $(".header .bottom_menu").removeClass("on");
        }
    });

    $('.main_slider').slick({
        arrows: false,
        dots: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 3500,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrow: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });

    $('.eve_slider').slick({
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 768,
            settings: {
                centerMode: false,
                pauseOnFocus: false,
                pauseOnHover: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    })

    $('.eve_arrows i:nth-child(1)').on('click', function () {
        $('.eve_slider').slick('slickPrev')
    })

    $('.eve_arrows i:nth-child(2)').on('click', function () {
        $('.eve_slider').slick('slickNext')
    })

    $('.news_slider').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '5px',
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 768,
            settings: {
                autoplay: false,
                centerMode: false,
                centerPadding: '0px',
                pauseOnFocus: false,
                pauseOnHover: false,
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }]
    })

    $('.news_arrows i:nth-child(1)').on('click', function () {
        $('.news_slider').slick('slickPrev')
    })

    $('.news_arrows i:nth-child(2)').on('click', function () {
        $('.news_slider').slick('slickNext')
    })

    AOS.init({
        delay: 120,
        duration: 500,
    });
});