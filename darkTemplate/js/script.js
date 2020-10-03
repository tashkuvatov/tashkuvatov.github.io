let menuBtn = document.querySelector('.burger');

menuBtn.onclick = function () {
	this.classList.toggle('_active');
	document.querySelector('.mobile__nav').classList.toggle('_active');
}

//slider
$(document).ready(function () {
	$('.team__slider').slick({
		dots: true,
		infinite: true,
		// adaptiveHeight: true,
		slidesToShow: 3,
		speed: 1000,
		variableWidth: true,
		centerMode: true,
		vertical: false,
		responsive: [{
			breakpoint: 768,
			settings: {
				arrows: false,
				slidesToShow: 2
			}
		},
		{
			breakpoint: 320,
			settings: {
				vertical: true,
				verticalSwiping: true
			}
		}]

	});
});

//плавная прокрутка
//первый вариант (не работает)
// const anchors = document.querySelectorAll('a[href^="#"]')

// for (let anchor of anchors) {
// 	anchor.addEventListener("click", function (e) {
// 		e.preventDefault();
// 		const blockID = anchor.getAttribute('href')
// 		document.querySelector('' + blockID).scrollIntoView({
// 			behavior: "smooth",
// 			block: "start"
// 		})
// 	})
// }

//второй вариант (надо доработать)
/*function scrollTo(element) {
	window.scroll({
		left: 0,
		top: element.offsetTop,
		behavior: 'smooth'
	})
}

var anchors = document.querySelector('a[href*="#"]');
console.log(anchors);

anchors.addEventListener('click', () => {
	console.log("Вы кликнули по ссылке")
})*/

//третьий вариант (jquery)
var $page = $('html, body');
$('a[href *="#"]').click(function () {
	$page.animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 1000); // скорость прокрутки
	return false;
});