var hor = $('.hills').width() - $(window).width()
var ver = $(window).height() + hor
$('body').css('height', ver);

$(window).on('scroll', function (){
	var scrl = $(window).scrollTop();	
	$('.hills').css('left', -scrl);


    console.log(scrl);
});