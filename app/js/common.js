$(function() {

	// var hf = function() {
	// 	var h_header = $('header').height();
	// 	var h_footer = $('footer').height();
	// 	$('.content').css({
	// 		'paddingTop': h_header,
	// 		'paddingBottom': h_footer
	// 	});
	// }

	// $(window).bind('load resize', hf)

});

$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	$('.logo').css({
		'transform' : 'translate(0px, '+ wScroll / 2 +'%)'
	});

	$('.fore-bird').css({
		'transform' : 'translate('+ wScroll / 25 +'%, '+ wScroll / 20 +'%)'
	});

	$('.back-bird').css({
		'transform' : 'translate(0px, '+ wScroll / 4 +'%)'
	});


});