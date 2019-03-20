$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
// Add slideDown animation to Bootstrap dropdown when expanding.
$('.dropdown').on('show.bs.dropdown', function() {
	$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});
// Add slideUp animation to Bootstrap dropdown when collapsing.
$('.dropdown').on('hide.bs.dropdown', function() {
	$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});

$(document).ready(function(){
  $('#indexSlider.owl-carousel').owlCarousel({
	  items:1,
	  autoHeight: true,
	  dots:false,
	  nav:true
  });
});

$('footer').append('<a id="scroll_top"><i class="fa fa-caret-up" aria-hidden="true"></i></a>');

$(window).scroll(function() {
	if($(this).scrollTop() > 150) {
		$('#scroll_top').css('opacity','1');
		$('.navbar').addClass("scroll");
	} else if ($(this).scrollTop() < 90) {
		$('#scroll_top').css('opacity','0');
		$('.navbar').removeClass("scroll");
	}
});

$('.scroll-to').click( function(){
	var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top - 180}, 500);
        }
	return false; // выключаем стандартное действие
});

$('#scroll_top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 1000);
});

$('nav .navbar-toggler').on('click', function(){
	$('body').toggleClass('navbar_show');
})