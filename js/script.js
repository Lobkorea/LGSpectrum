$(document).ready(function(){
	// 헤더 사이즈 조절
	$('#id-headerWrap h1').css('width',$(window).width()-230);
	$(window).resize(function() {
		if ( $(window).width() > 1280 ){
			$('#id-headerWrap h1').css('width',$(window).width()-230);
		} else {
			$('#id-headerWrap h1').css('width','1050px');
		}
	});
	// 설정보기
	$('.class-widgetMoreM').click(function(){
		$('.class-popupBg').fadeIn();
		$('body, html').animate({scrollTop:0},500);
			return false;
	});
	$('.class-widgetMoreS').click(function(){
		$(this).parent().parent().siblings('.class-defalt').hide().siblings('.class-widgetSetting').show();
	});
	$('.class-widgetMoreL li').click(function(){
		$(this).parent().siblings('.class-widgetMore').prop('checked',false);
	});
	$('.class-widgetSettingCancel').click(function(){
		$(this).parent().parent().hide().siblings('.class-defalt').show();
	});
	
	// 리포트 설정 내역
	$('.class-eqReportAction span').click(function(){
		$(this).toggleClass('class-on');
	});
	
	//상세보기
	$('#id-systemAlarm table').click(function(){
		$('.class-popupBg').fadeIn();
		$('#id-popup1').show();
		$('body, html').animate({scrollTop:0},500);
			return false;
	});
	$('#id-systemAlarm .class-widgetMoreM').click(function(){
		$('#id-popup6').show();
	});
	$('#id-eqSCM .class-widgetMoreM').click(function(){
		$('#id-popup2').show();
	});
	$('#id-eqALDH .class-widgetMoreM').click(function(){
		$('#id-popup3').show();
	});
	$('#id-eqSVPV .class-widgetMoreM').click(function(){
		$('#id-popup4').show();
	});
	$('#id-eqReport .class-widgetMoreM').click(function(){
		$('#id-popup5').show();
	});
	$('.class-navReport').click(function(){
		$('.class-popupBg').fadeIn();
		$('#id-popup5').show();
	});
	$('.class-navAlarm').click(function(){
		$('.class-popupBg').fadeIn();
		$('#id-popup6').show();
		$('.class-alarmSearchWrap').show();
	});
	
	// 팝업
	$('.class-popupBg').css('height',$('body').height()+50);
	$(window).resize(function() {
		$('.class-popupBg').css('height',$('body').height()+50);
	});
	$('.class-popupClose').click(function(){
		$('.class-popupBg').fadeOut();
		$('.class-popupBg2').fadeOut();
		$('.class-popup').hide();
		$('.class-popupMore').hide();
	});
	
	// 시스템 알람 상세보기 - 더보기
	$('.class-alarmtimelineMore').click(function(){
		$('.class-popupBg2').fadeIn().css('height',$('#id-popup1').height()-55)	;
		$('#id-popup1More').show();
	});
	// 알람 조회 - 검색조건 더보기
	$('.class-alarmSearchButton span').click(function(){
		$('.class-popupBg2').fadeToggle().css('height',$('#id-popup6').height()-55)	;
		$('.class-arlarmSearchSetting').slideToggle();
		$('.class-alarmSearchButton span').toggleClass('class-open');
	});
		
	// 장비 측정 data 전체보기 - 닫기
	$('.class-popupMoreHeader .class-popupMoreClose').click(function(){
		$('.class-popupMore').hide();
		$('.class-popupBg2').fadeOut();
	});
	
	// 팝업 타임 셀렉트
	var select = $("select");
	select.change(function(){
		var select_name = $(this).children("option:selected").text();
		$(this).siblings("label").text(select_name);
    });
	
	// 시스템 알람 가이드 라인
	$('#id-popup1 .class-alarmtimelinePoint').css('height',$('#id-popup1 ').height()-340);
	$(window).resize(function() {
		$('#id-popup1 .class-alarmtimelinePoint').css('height',$('#id-popup1 ').height()-340);
	});
	
	// 부품&소모품 알람 가이드 라인
	$('#id-popup2 .class-alarmtimelinePoint2').css('height',$('#id-popup2').height()-330);
	$(window).resize(function() {
		$('#id-popup2 .class-alarmtimelinePoint2').css('height',$('#id-popup2').height()-330);
	});
	
	// 이상 수준 감지 알람 가이드 라인
	$('#id-popup3 .class-alarmtimelinePoint3').css('height',$('#id-popup2').height()-330);
	$(window).resize(function() {
		$('#id-popup3 .class-alarmtimelinePoint3').css('height',$('#id-popup2').height()-330);
	});
	
	// 장비 측정 data 전체 보기 - 필터
	$('.class-popupMoreSelect select').change(function(){
		var index = $(".class-popupMoreSelect select:eq(0) option").index($(".class-popupMoreSelect select option:selected"));
		var indexFilter = index-1;
			if(indexFilter == -1 ){
				return false;
			} else {
				$('.class-popupMoreFilter').hide();
				$('.class-popupMoreFilter').eq(indexFilter).show();
			};
	});
	
	// datepicker
	$( "#id-datepicker1" ).datepicker({
		dateFormat: "yy.mm.dd"
    });
	$( "#id-datepicker2" ).datepicker({
		dateFormat: "yy.mm.dd"
    });
})