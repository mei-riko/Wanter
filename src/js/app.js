import $ from "jquery";

$(document).ready(() => {
    $('[data-toggle="tooltip"]').tooltip();

    if( $('#indexSlider').length > 0){
        $('#indexSlider').owlCarousel({
            items:1,
            autoHeight: true,
            dots:false,
            nav:true
        });
    }

    if( $('.js-placeholder-search').length > 0){
        $('.js-placeholder-search').select2();
    }
    if( $('.js-placeholder-single').length > 0){
        $('.js-placeholder-single').select2({
            minimumResultsForSearch: 10
        });
    }

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