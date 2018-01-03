$(document).ready(function(){

	// 백그라운드 사이즈 
	$('#id-wrap').css('height',$(window).height());
	$(window).resize(function() {
		$('#id-wrap').css('height',$(window).height());
	});

	// 경고문
	$('.class-loginSm').click(function(){
		$('.class-idpwCheck').show();
	});
});