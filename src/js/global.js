jQuery(function ($) {
    var windowBottomLine = 0;


    var checkAnimation = function () {
        windowBottomLine = $(window).scrollTop() + $(window).height() / 1.5;

        $(".js-animatedOrder").each(function () {
            var _this = $(this);
            if (windowBottomLine > _this.offset().top) {
                var _timer = 0;

                _this.find(".js-orderEl").each(function () {
                    var __this = $(this);

                    var interval_id = setTimeout(function () {
                        __this.removeClass("js-orderEl");
                    }, _timer);

                    _timer += _this.data("animation-step");
                });

                _this.removeClass("js-animatedOrder");
            }
        });
    };

    checkAnimation();
    $(window).on("scroll", function () {
        checkAnimation();
    });
});