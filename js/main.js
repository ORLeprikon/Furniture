$(document).ready(function () {

	$('.hero').slick({
		fade: true,
		swipe: false,
		prevArrow: '<button class="slider__prev"><img src="img/VectorLeft.png" alt="arrow__right"></button>',
		nextArrow: '<button class="slider__next"><img src="img/VectorRight.png" alt="arrow__left"></button>'
	})

	$(".dropdown").slick({
		infinite: true,
		speed: 600,
		slidesToShow: 6,
		slidesToScroll: 1,
		focusOnSelect: true, 
		swipe: false,
		autoplay: false,
		
		asNavFor: ".dropdown__content",
		prevArrow: '<button class="slider__prev"><img src="img/VectorLeft.png" alt="arrowright"></button>',
		nextArrow: '<button class="slider__next"><img src="img/VectorRight.png" alt="arrowleft"></button>',
	});


	$(".dropdown__content").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		speed: false,
		swipe: false,
		asNavFor: ".dropdown",
	});
});





