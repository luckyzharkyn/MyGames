



// <Настройка меню>====================================================================
$(document).ready(function () {
	$('.fullscreen__burger').click(function (event) {
		$('.fullscreen__burger,.fullscreen__top-menu').toggleClass('active')
	})
})


$('.fullscreen__bitton-link').on('max-width: 440px', function () {
	$('.fullscreen__top-search').toggleClass('active')
})

$('.fullscreen__content-img').on('mouseenter', function () {
	$('.fullscreen__content-img').hide(20000);
})