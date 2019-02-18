$(document).ready(function() {

	//jumbotron carousel
	$('.carousel').slick({
	arrows: false,
	// prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
	// nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
	autoplay: true,
	autoplaySpeed: 4000,
	slidesToScroll: 1,
	pauseOnFocus: false,
	pauseOnHover: false,
	draggable: true//,
	//lazyLoad: 'ondemand'
	});

  //use these to implement prev and next click
	$('.prev').click(function(){
	  $('.carousel').slick('slickPrev');
	})

	$('.next').click(function(){
	  $('.carousel').slick('slickNext');
	})
});
