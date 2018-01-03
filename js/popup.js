$(document).ready(function(){
	
	// 설정보기
	$('.class-widgetMoreS').click(function(){
		$(this).parent().parent().siblings('.class-defalt').hide().siblings('.class-widgetSetting').show();
	});
	$('.class-widgetMoreL li').click(function(){
		$(this).parent().siblings('.class-widgetMore').prop('checked',false);
	});
	$('.class-widgetSettingCancel').click(function(){
		$(this).parent().parent().hide().siblings('.class-defalt').show();
	});
	
	// 팝업배경 사이즈
	$('.class-popupBg').css('height',$(window).height()+50);
	$(window).resize(function() {
		$('.class-popupBg').css('height',$(window).height()+50);
	});
	// 팝업창 사이즈
	$('.class-popupContentWrap').css('height',$(window).height()-280);
	$(window).resize(function() {
		$('.class-popupContentWrap').css('height',$(window).height()-280);
	});
	// 1차 팝업 닫기
	$('.class-popupClose').click(function(){
		$('.class-popupBg').fadeOut();
		$('.class-popupBg2').fadeOut();
		$('.class-popup').hide();
		$('.class-popup2').hide();
		$('.class-popupMore').hide();
		$('.class-alarmSearchWrap').hide();
		$('.class-arlarmSearchSetting').slideUp();
		$('.class-alarmSearchButton span').removeClass('class-open');
		$('.class-QualitySearchWrap').hide();
		$('.class-qualitySearchButton span').removeClass('class-open');
		$("body").css({overflow:'auto'}).unbind('touchmove');
	});
	// 1차 팝업 오픈 설정
	function popupType1() {
		$('.class-popupBg2').fadeOut();
		$('.class-popup').hide();
		$('.class-popupMore').hide();
		$('.class-alarmSearchWrap').hide();
		$('.class-arlarmSearchSetting').slideUp();
		$('.class-alarmSearchButton span').removeClass('class-open');
		$('.class-popupBg').fadeIn();
		$("body").css('overflow','hidden').bind('touchmove', function(e){e.preventDefault()});
	};

	// 설정 더보기
	$('.class-widgetMoreM').click(function(){
		popupType1();
	});
	// 시스템알람 더보기
	$('#id-systemAlarm .class-widgetMoreM').click(function(){
		$('#id-popup6').show();
		$('.class-alarmSearchWrap').show();
	});
	// 부품&소모품 더보기
	$('#id-eqSCM .class-widgetMoreM').click(function(){
		$('#id-popup2').show();
	});
	// 이상 수준 감지 이력 더보기
	$('#id-eqALDH .class-widgetMoreM').click(function(){
		$('#id-popup3').show();
	});
	// sv 더보기
	$('#id-eqSVPV .class-widgetMoreM').click(function(){
		$('#id-popup4').show();
	});
	// 리포터 설정 더보기
	$('#id-eqReport .class-widgetMoreM').click(function(){
		$('#id-popup5').show();
	});
	
	// 시스템알람 테이블 상세보기
	$('#id-systemAlarm tbody tr').click(function(){
		popupType1();
		$('#id-popup1').show();
	});
	// 유닛 현황
	$('#id-eqUnitCondition tbody tr').click(function(){
		popupType1();
		$('#id-popup8').show();
	});
	// 엑셀 export 팝업
	$('#id-content > .class-export').click(function(){
		popupType1();
		$('#id-popup7').show();
	});	
	// 엑셀 export 팝업 2
	$('#id-popup1 .class-export').click(function(){
		$('.class-popupBg2').fadeIn().addClass('class-popupBg4').css('height',$('.class-popupContentWrap').height());
		$('#id-popupE2').show();
	});	
	
	// 리포트 설정
	$('.class-navReport').click(function(){
		popupType1();
		$('#id-popup5').show();
	});
	// 알람 조회
	$('.class-navAlarm').click(function(){
		popupType1();
		$('#id-popup6').show();
		$('.class-alarmSearchWrap').show();
	});
	
	// kpi 상세보기
	$('.class-eqkpiList li').click(function(){
		popupType1();
		$('#id-popupKpi').show();
	});
	// 품질 관리 상세보기
	$('#id-eqQuality .class-widgetMoreM').click(function(){
		popupType1();
		$('#id-popupQuality').show();
		$('.class-QualitySearchWrap').show();
	});
	
		
	// 차트 더보기 - 닫기
	$('.class-popupMoreHeader .class-popupMoreClose').click(function(){
		$('.class-popupMore').hide();
		$('.class-popupBg2').hide().removeClass('class-popupBg3');
	});
	// 시스템 알람 상세보기 - 더보기
	$('#id-popup1 .class-alarmtimelineMore').click(function(){
		$('.class-popupBg2').fadeIn().css('height',$('#id-popup1 .class-popupContentWrap').height())	;
		$('#id-popup1More').show();
	});
	// 부품&소모품 관리 상세보기 - 더보기
	$('#id-popup2 .class-alarmtimelineMore').click(function(){
		$('.class-popupBg2').fadeIn().css('height',$('#id-popup2 .class-popupContentWrap').height())	;
		$('#id-popup2More').show();
		$("#id-popup2More .class-pop2Type span").text("부품&소모품 관리");
		$('#id-popup2More .class-popupUnit').show();
		$('#id-popup2More .class-units').show();
	});
	// 이상 수준 감지 이력 상세보기 - 더보기
	$('#id-popup3 .class-alarmtimelineMore').click(function(){
		$('.class-popupBg2').fadeIn().css('height',$('#id-popup3 .class-popupContentWrap').height())	;
		$('#id-popup3More').show();
		$("#id-popup3More .class-pop3Type span").text("장비 측정 data");
		$('#id-popup3More .class-popupPart').show();
		$('#id-popup3More .class-parts').show();
	});
	// SV & PV 상세보기 - 더보기
	$('#id-popup4 .class-svpvMore').click(function(){
		$('.class-popupBg2').fadeIn().css('height',$('#id-popup4 .class-popupContentWrap').height())	;
		$('#id-popup4More').show();
		$("#id-popup4More .class-pop4Type span").text("Type");
		$('#id-popup4More .class-popupParameter').show();
		$('#id-popup4More .class-parameters').show();
	});
	// 유닛 현황 상세보기 - 더보기
	$('#id-popup8 .class-svpvMore').click(function(){
		$('.class-popupBg2').fadeIn().css('height',$('#id-popup4 .class-popupContentWrap').height())	;
		$('#id-popup8More').show();
	});
	
	// 관심차트 - 더보기
	$('#id-eqFavoriteChart .class-widgetMoreM').click(function(){
		popupType1();
		$('#id-popup5More').show();
	});
	// 관심차트 - 위젯 추가
	$('.class-widgetAddFavo').click(function(){
		$('.class-popupBg').fadeIn();
		$('#id-popup5More').show();
	});
	
	
	// 시스템 알람 차트 더보기 - 필터
	$('#id-popup1More .class-popupMoreSelect li:eq(0) .class-popupSelect li').click(function(){
		var indexFilter = $(this).index();
			if(indexFilter == -1 ){
				$('#id-popup1More .class-popupMoreFilter').hide();
				return false;
			} else {
				$('#id-popup1More .class-popupMoreFilter').hide();
				$('#id-popup1More .class-popupMoreFilter').eq(indexFilter).show();
			};
	});
	// 부품&소모품 관리 차트 더보기 - 필터
	$('#id-popup2More .class-popupMoreSelect li:eq(0) .class-popupSelect li').click(function(){
		var indexFilter = $(this).index();
			if(indexFilter == -1 ){
				$('#id-popup2More .class-popupMoreFilter').hide();
				return false;
			} else {
				$('#id-popup2More .class-popupMoreFilter').hide();
				$('#id-popup2More .class-popupMoreFilter').eq(indexFilter).show();
			};
	});
	// 이상 수준 감지 이력 차트 더보기 - 필터
	$('#id-popup3More .class-popupMoreSelect li:eq(0) .class-popupSelect li').click(function(){
		var indexFilter = $(this).index();
			if(indexFilter == -1 ){
				$('#id-popup3More .class-popupMoreFilter').hide();
				return false;
			} else {
				$('#id-popup3More .class-popupMoreFilter').hide();
				$('#id-popup3More .class-popupMoreFilter').eq(indexFilter).show();
			};
	});
	// SV&PV 차트 더보기 - 필터
	$('#id-popup4More .class-popupMoreSelect li:eq(0) .class-popupSelect li').click(function(){
		var indexFilter = $(this).index();
			if(indexFilter == -1 ){
				$('#id-popup4More .class-popupMoreFilter').hide();
				return false;
			} else {
				$('#id-popup4More .class-popupMoreFilter').hide();
				$('#id-popup4More .class-popupMoreFilter').eq(indexFilter).show();
			};
	});
	// 관심 차트 더보기 - 필터
	$('#id-popup5More .class-popupMoreSelect li:eq(0) .class-popupSelect li').click(function(){
		var indexFilter = $(this).index();
			if(indexFilter == -1 ){
				$('#id-popup5More .class-popupMoreFilter').hide();
				return false;
			} else {
				$('#id-popup5More .class-popupMoreFilter').hide();
				$('#id-popup5More .class-popupMoreFilter').eq(indexFilter).show();
			};
	});
	// 유닛 현황 더보기 - 필터
	$('#id-popup8More .class-popupMoreSelect li:eq(0) .class-popupSelect li').click(function(){
		var indexFilter = $(this).index();
			if(indexFilter == -1 ){
				$('#id-popup8More .class-popupMoreFilter').hide();
				return false;
			} else {
				$('#id-popup8More .class-popupMoreFilter').hide();
				$('#id-popup8More .class-popupMoreFilter').eq(indexFilter).show();
			};
	});

	//알람 조회 - Type 컨트롤
	$('.class-arlarmSearchSetting ul:eq(0) li').click(function(){
		if ( $(this).hasClass('class-idnone') == true ) {
			$('.class-inputAlarmID').hide();
		} else {
			$('.class-inputAlarmID').show();
		}
	});

	// 리포트 설정 내역
	$('.class-eqReportAction span').click(function(){
		$(this).toggleClass('class-on');
	});	
	//리포트 설정 - Type 컨트롤
	$('.class-reportTable1 ul:eq(0) li').click(function(){
		if ( $(this).hasClass('class-idnone') == true ) {
			$('.class-reportAlarmID').hide();
		} else {
			$('.class-reportAlarmID').show();
		}
	});

	// 품질 관리 - 더보기
	$('.class-popupQualityChart .class-more').click(function(){
		$('#id-popupQuality .class-popupContent').hide().siblings().fadeIn();
		$('.class-QualitySearchWrap').hide();
	});
	// 품질 관리 - 뒤로 가기
	$('.class-popupContentQualityHeader .class-back').click(function(){
		$('#id-popupQuality .class-popupContentQuality').hide().siblings().fadeIn();
		$('.class-QualitySearchWrap').show();
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
	
	// datepicker
	$( "#id-datepicker1" ).datepicker({
		dateFormat: "yy.mm.dd"
    });
	$( "#id-datepicker2" ).datepicker({
		dateFormat: "yy.mm.dd"
    });
	$( "#id-datepicker3" ).datepicker({
		dateFormat: "yy.mm.dd"
    });
	$( "#id-datepicker4" ).datepicker({
		dateFormat: "yy.mm.dd"
    });
	$( "#id-datepicker5" ).datepicker({
		dateFormat: "yy.mm.dd"
    });
	$( "#id-datepicker6" ).datepicker({
		dateFormat: "yy.mm.dd"
    });
	
	// 팝업 타임 셀렉트
	var select = $("select");
	select.change(function(){
		var select_name = $(this).children("option:selected").text();
		$(this).siblings("label").text(select_name);
    });
	
	// ul 셀렉트 박스 선택시
	$('.class-popupSelectText').click(function(){
		if( $(this).siblings().css('display') == 'none' ) {
			$(this).siblings('ul').slideToggle(200);
		}
	});
	$('.class-popupSelect li').click(function(){
		var pop = $(this).text();
		$(this).parent().siblings('.class-popupSelectText').text(pop);
		$('.class-popupSelect').slideUp(200);
	});
	$(document).mouseup(function(e) {
		if ($(e.target).parents('.class-popupSelect').length == 0) {
		$('.class-popupSelect').slideUp(200);
		}
	});
	
	// 위젯 편집 저장
	$('.class-navSave').click(function(){
		popupType1();
		$('#id-popupSave').show();
	});
	// 위젯 편집 취소
	$('.class-cancel').click(function(){
		$('.class-popupBg').fadeOut();
		$('.class-popup').hide();
		$("body").css({overflow:'auto'}).unbind('touchmove');
	});
	
});