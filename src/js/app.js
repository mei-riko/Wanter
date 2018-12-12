import $ from "jquery";

$(document).ready(() => {
    // слайдер
    if( $('.slider').length != 0){
        $('.slider').slick({});
    }
    // виджет ВК
    if( typeof VK !== 'undefined' ){
        VK.Widgets.Group("vk_groups", {mode: 4, wide: 1, width: "auto", height: "400"}, 20003922);
    }
    // Поэкранный скролл на компьютере
    if( $(window).width() > 992 ){
        $.scrollify({
            section : ".section",
            scrollbars:false,
            before: function(i,panels) {
                var ref = panels[i].attr("data-section-name");
                $(".navigation .nav-item.active").removeClass("active");
                $(".navigation a[href='#" + ref + "']").parent().addClass("active");
            },
        });
        $(".navigation a").on("click",function() {
            $.scrollify.move($(this).attr("href"));
        });
    }else{
        // смена активного пункта меню на мобильном
        $(".navigation .nav-item a").on("click",function() {
            if( $(this).parent().hasClass("active") == false){
                $(".navigation .nav-item.active").removeClass("active");
                $(this).parent().addClass("active");
            }
            $(".navbar-toggler").trigger('click');
        });
    }
    // ресайз
    $( window ).resize(function() {
        if( $(window).width() > 992 ){
            $.scrollify({
                section : ".section",
                scrollbars:false,
                before: function(i,panels) {
                    var ref = panels[i].attr("data-section-name");
                    $(".navigation .nav-item.active").removeClass("active");
                    $(".navigation a[href='#" + ref + "']").parent().addClass("active");
                },
            });
            $(".navigation a").on("click",function() {
                $.scrollify.move($(this).attr("href"));
            });
        }else{
            $.scrollify.destroy();
        }
    });
});