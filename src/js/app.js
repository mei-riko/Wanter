import $ from "jquery";

$(document).ready(() => {
    $('[data-toggle="tooltip"]').tooltip();
    $('.js-placeholder-search').select2();
    $('.js-placeholder-single').select2({
        minimumResultsForSearch: 10
    });

    // filter
    $(".filter__item").on("click", function(){
        let filter = $(this).attr("id");
        let leftFilterContainer = $(".filter .container").offset().left;
        let leftFilter = $(this).offset().left;
        $(".filter-dropdown").each(function(){
            if( $(this).data("filter") === filter ){
                $(this).css("left", leftFilter - leftFilterContainer);
                $(this).slideToggle();
            }else{
                $(this).css("display","none");
            }
        });
    });
    $(".filter__item#filter-security").on("click", function(){
        $(this).toggleClass("filter__item--active");
    });

});