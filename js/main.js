function sorting(t_type){
	if(t_type == 'all'){
		$('.warning').show();
		$('.dashboard').show();
		$('.config').show();
		$('.repair').show();
	}else{
		$('.warning').hide();
		$('.dashboard').hide();
		$('.config').hide();
		$('.repair').hide();
		$('.'+t_type).show();
	}
}

function pagenation(p_num){
	$('.class-paging01, .class-paging02, .class-paging03').removeClass('act');
	$('.class-paging0'+p_num).addClass('act');
	$('#id-itemList01, #id-itemList02, #id-itemList03').hide();
	$('#id-itemList0'+p_num).show();
}


