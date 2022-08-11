(function ($) {
    $('body').addClass('variant-strm_light');
    var menuSelector = $('#sidebar ul li a');

    $(document)
        .ready(function () {
            if(window.location.hash) {/*location.href 是包含 '#' 的網址*/
                $("html, body")
                    .removeClass('variant-strm_light')
                    .animate({ scrollTop: $(window.location.hash).scrollTop() }, 1);
            } else {
                setTimeout(function () {
                    $("html, body")
                        .animate({scrollTop: $(document).height()}, 1)
                        .animate({scrollTop: $("#home").scrollTop()}, 1);
                    $('body').removeClass('variant-strm_light');
                }, 1200);
            };
//             $('a[href^="#"]').on('click', function (e) {
//                 e.preventDefault();
//                 var target = this.hash;
//                 $target = $(target);

//                 $('html, body').animate({
//                     'scrollTop': $target.offset().top
//                 }, 600, 'linear', function () {
//                     window.location.hash = target;
//                     $(document).on("scroll", initScroll(menuSelector));
//                 });
//             });
        })
        .on('scroll', function () {
            initScroll(menuSelector);
        });

    function initScroll(menuSelector) {
        var scrollPosition = $(document).scrollTop() + 5;

        menuSelector.each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
                menuSelector.removeClass("active");
                currLink.addClass("active");
            }
            else {
                currLink.removeClass("active");
            }
        });
    }

})(jQuery);