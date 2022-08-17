$(function () {
    $('.main_slider').slick({
        arrows: false,
        dots: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 3500,
    });

    $('.eve_slider').slick({
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        slidesToShow: 3,
        slidesToScroll: 1,
    })

    $('.eve_arrows i:nth-child(1)').on('click', function () {
        $('.eve_slider').slick('slickPrev')
    })

    $('.eve_arrows i:nth-child(2)').on('click', function () {
        $('.eve_slider').slick('slickNext')
    })
})