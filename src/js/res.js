jQuery(function ($) {
    $('.js-slick').slick({
        centerMode: true,
        slidesToShow: 4,
        arrows: true,
        dots: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: true,
                    dots: true,
                    centerMode: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: true,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });
});