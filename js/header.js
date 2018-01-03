$(document).ready(function(){
	
	// ��� ������ ����
	var navW = $('#id-headerWrap nav').width();
	$('#id-headerWrap h1').css('margin-right',navW);
	$('.class-user').css('margin-right',navW);
	
	// ��� ����
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
	
	// �ε� �ִϸ��̼�
	$('.class-loadingWrap').css('height',$(window).height());
	
});