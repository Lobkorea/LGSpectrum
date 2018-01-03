$(document).ready(function(){	
	
	// ���� ����
	$('.class-navEdit').click(function(){
		$(this).hide();
		$('.class-navSave').css('display','block');
		$('.class-widgetEdit').css('display','inline-block');
		$('.class-widgetAdd').slideDown();
		$('.class-sideBt').animate({top:'300'});
		var widgetLeftH = $('.class-widgetLeft').height();
		var widgetRightH = $('.class-widgetRight').height();
		if ( widgetLeftH > widgetRightH ) {
			$("#id-widget .class-widgetRight").append("<section class=\"class-widgetEdit class-gridItem\" style=\"display: inline-block;\"><div class=\"class-bace\"><img src=\"img/add_widget.png\" alt=\"Add New Widget\"></div><div class=\"class-img\">Preview</div></section>");
		} else {
			$("#id-widget .class-widgetLeft").append("<section class=\"class-widgetEdit class-gridItem\" style=\"display: inline-block;\"><div class=\"class-bace\"><img src=\"img/add_widget.png\" alt=\"Add New Widget\"></div><div class=\"class-img\">Preview</div></section>");
		}
		});
	// ���� �߰� ����Ʈ
	var widgetAddW = $('.class-widgetAdd li').length*215;
	$('.class-widgetAdd ul').css('min-width',widgetAddW);
	// ���� �߰� ����Ʈ ���콺 ����
	$('.class-widgetAdd li').mouseenter(function(){
		$('.class-widgetEdit .class-bace').hide();
		$('.class-widgetEdit .class-img').show();
	});
	$('.class-widgetAdd li').mouseleave(function(){
		$('.class-widgetEdit .class-img').hide();
		$('.class-widgetEdit .class-bace').show();
	});
	// �ٸ� ���� Ŭ���� ���� & add  new widget ����
	$(document).click(function(e) {
		if ($(e.target).parents('.class-widgetAddBt').length == 0) {
			$('.class-navSave').css('display','none');
			$('.class-navEdit').css('display','block');
			$('.class-widgetAdd').slideUp(200);
			$('.class-sideBt').animate({top:'100'});
			$('.class-widgetEdit').remove();
		}
	});
	
});