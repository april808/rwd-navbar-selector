//nav資料----------------------
var nav_data={
  wrapper:"wrapper",
  fadeup:"fade-up",
  navlist: [
    {name:"home",},
    {name:"profile"},
    {name:"gallery"},
    {name:"contact"}
  ],
};
var vm=new Vue({
  el: "#nav",
  data: nav_data
});
//wrapper----------------------
var vm=new Vue({
  el: "#wrapper",
  data: nav_data
});

//進場動態和超連結反應事件
(function ($) {
    $('body').addClass('variant-strm_light');/*先綁隱藏的CSS*/
    $('#home').addClass('fullscreen');
    var menuSelector = $('#sidebar ul li a');
  
    $(document)
        .ready(function () {
            setTimeout(function () {
                $("html, body")
                    .animate({scrollTop: $(document).height()}, 1)
                    .animate({scrollTop: $("#home").scrollTop()}, 1);
                $('body').removeClass('variant-strm_light');
            }, 1200);/*於1.2秒時拿掉隱藏用CSS*/
        })
        .on('click','a',function(event){/*nav超連結動畫*/
            event.preventDefault();/*停止事件的默認動作*/
            var target= $(this).attr("href");

            $('html,body').animate({
              scrollTop: $(target).offset().top
            },600);
        })
        .on('scroll', function () {/*偵測超連結位置*/
            initScroll(menuSelector);
        });/*$(document)結尾*/
  
    function initScroll(menuSelector) {
        var scrollPosition = $(window).scrollTop() + 5;
      
        menuSelector.each(function () {/*.each()每個元素運作函數*/
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {/*設定螢幕範圍運作.active(CSS)*/
                menuSelector.removeClass("active");
                currLink.addClass("active");
            }
            else {
                currLink.removeClass("active");
            }
        });
    }
})(jQuery);