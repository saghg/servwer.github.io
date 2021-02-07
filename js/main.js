$(function () {
	$('.header__inner-btn button').on('click', function () {
		$('.modal__header').removeClass('hidden').fadeIn();
		$('body').css('overflow','hidden');
	});
	$('.close__btn').on('click', function () {
		$('.modal__header').addClass('hidden').fadeOut();
		$('body').css('overflow', 'auto');
	});


	$(".nav").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1000);
	});
	$(".arrow__up").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1000);
	});



	$("#back-top").hide();

	$(window).scroll(function () {
		if ($(this).scrollTop() > 700) {
			$("#back-top").fadeIn();
		} else {
			$("#back-top").fadeOut();
		}
	});

	$("#back-top a").click(function () {
		$("body,html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});