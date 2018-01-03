$(document).ready(function(){

	// 알람 조회 - 검색조건 더보기
	$('.class-alarmSearchButton span').click(function(){
		$('.class-popupBg2').fadeToggle().css('height',$('#id-popup6 .class-popupContentWrap').height())	;
		$(this).parent().siblings().slideToggle();
		$(this).toggleClass('class-open');
	});
	
});