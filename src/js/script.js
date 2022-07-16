//
// const slider = tns({
// 	container: '.carousel__inner',
// 	items: 1,
// 	slideBy: 'page',
// 	autoplay: false,
// 	controls:false,
// 	nav:false
//
// });
//
// document.querySelector('.next').addEventListener('click',()=>{
// 	slider.goTo('next');
// })
// document.querySelector('.prev').addEventListener('click',()=>{
// 	slider.goTo('prev');
// })

$(document).ready(function () {
	$('.carousel__inner').slick({
		speed: 1200,
		adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-next"><img src="icons/slider_arrow/left.svg" alt="arrow"></button>',
		nextArrow: '<button type="button" class="slick-prev"><img src="icons/slider_arrow/right.svg" alt="arrow"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: true,
					arrows: false
				}
			}
		]
	});

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();
				$('.catalog__content-item').eq(i).toggleClass('catalog__content-item_active');
				$('.catalog__content-list').eq(i).toggleClass('catalog__content-list_active');
			})
		});
	};

	toggleSlide('.catalog__link');
	toggleSlide('.catalog__link-back');
});

