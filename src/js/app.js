import $ from "jquery";

$(document).ready(() => {
    $.scrollify({
        section : ".section",
        scrollbars:false,
    });
    $(".navigation a").on("click",function() {
        console.log($(this).attr("href"));
        $.scrollify.move($(this).attr("href"));
    });
});