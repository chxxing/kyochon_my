$(function () {
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
                autoplay: true,
                autoplaySpeed: 4000,
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
                autoplay: true,
                centerMode: false,
                pauseOnFocus: false,
                pauseOnHover: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    })

    $('.news_arrows i:nth-child(1)').on('click', function () {
        $('.news_slider').slick('slickPrev')
    })

    $('.news_arrows i:nth-child(2)').on('click', function () {
        $('.news_slider').slick('slickNext')
    })

})

AOS.init({
    delay: 100,
    duration: 500,
});

