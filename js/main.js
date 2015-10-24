var hor = $('.hills').width() - $(window).width()
var ver = $(window).height() + hor
$('body').css('height', ver);

$(window).on('scroll', function (){
	var scrl = $(window).scrollTop();	
	$('.hills').css('left', -scrl);

	var imgval = (scrl % 6);
	$('.hero').attr('src', 'img/walk_' + imgval + '.png');

    console.log(scrl);
});