function sorting(t_type){
	if(t_type == 'all'){
		$('.class-warning').show();
		$('.class-dashboard').show();
		$('.class-config').show();
		$('.class-repair').show();
	}else{
		$('.class-warning').hide();
		$('.class-dashboard').hide();
		$('.class-config').hide();
		$('.class-repair').hide();
		$('.'+t_type).show();
	}
}