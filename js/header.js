$(document).ready(function(){
	
	// 헤더 사이즈 조절
	var navW = $('#id-headerWrap nav').width();
	$('#id-headerWrap h1').css('margin-right',navW);
	$('.class-user').css('margin-right',navW);
	
	// 언어 변경
	$('.class-sideLang li').click(function(){
		if ( $('.class-sideLang').width() > 50 ) {
			$('.class-sideLang li').removeClass('class-sideLangli').removeClass('class-on');
			$(this).addClass('class-on');
			$('.class-sideLang').addClass('class-sideLangFull').animate({width:'50px'}, 300);
		} else {
			var langW = $('.class-sideLang li').length * 30;
			$('.class-sideLang').animate({width:langW}, 300);
			$('.class-sideLang li').addClass('class-sideLangli');
		}
	});
	$(document).mouseup(function(e) {
		if ($(e.target).parents('.class-sideLang').length == 0) {
		$('.class-sideLang').addClass('class-sideLangFull').animate({width:'50px'}, 300);
		$('.class-sideLang li').removeClass('class-sideLangli');
		}
	});
	
	// 로딩 애니메이션
	$('.class-loadingWrap').css('height',$(window).height());
	
});