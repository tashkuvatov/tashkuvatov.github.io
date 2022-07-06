$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHieght: true,
		slidesToShow: 1,
		slideToScroll: 1,
		speed: 1000,
		easing: 'cubic-bezier(1,-0.01,0,1.02)',
		infinite: true,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 3000,
	});
});