$(function () {
	$('.header__inner-btn button').on('click', function () {
		$('.modal__header').removeClass('hidden').fadeIn();
		// alert('click');
	});
	$('.close__btn').on('click', function () {
		$('.modal__header').addClass('hidden').fadeOut();
	});
});