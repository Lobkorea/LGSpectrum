$(document).ready(function(){

	// 품질 관리 - 검색조건 더보기
	$('.class-qualitySearchButton span').click(function(){
		$('.class-popupBg2').fadeToggle().css('height',$('#id-popupQuality .class-popupContentWrap').height())	;
		$(this).parent().siblings().slideToggle();
		$(this).toggleClass('class-open');
	});
	
});