function sorting(){
	$('.class-warning').removeClass('class-off');
	$('.class-warning').addClass('class-on');
	$('.class-timelineHead01').removeClass('class-active');
	$('.class-dashboard').removeClass('class-off');
	$('.class-dashboard').addClass('class-on');
	$('.class-timelineHead02').removeClass('class-active');
	$('.class-repair').removeClass('class-off');
	$('.class-repair').addClass('class-on');
	$('.class-timelineHead03').removeClass('class-active');
	$('.class-config').removeClass('class-off');
	$('.class-config').addClass('class-on');
	$('.class-timelineHead04').removeClass('class-active');
}

$(function() {
    $('.class-timelineHead01').on('click', function() {
        $(this).toggleClass('class-active ""');
		$('.class-warning').toggleClass('class-off class-on');
    });
});

$(function() {
    $('.class-timelineHead02').on('click', function() {
        $(this).toggleClass('class-active ""');
		$('.class-dashboard').toggleClass('class-on class-off');
    });
});

$(function() {
    $('.class-timelineHead03').on('click', function() {
        $(this).toggleClass('class-active ""');
		$('.class-repair').toggleClass('class-on class-off');
    });
});

$(function() {
    $('.class-timelineHead04').on('click', function() {
        $(this).toggleClass('class-active ""');
		$('.class-config').toggleClass('class-on class-off');
    });
});

