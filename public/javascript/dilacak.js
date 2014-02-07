
function navToggle (argument) {
	var navigation = responsiveNav(".nav-collapse", {customToggle: ".nav-toggle",
	animate: true,        // Boolean: Use CSS3 transitions, true or false
	transition: 50,      // Integer: Speed of the transition, in milliseconds
	open: function(){
		$(".navigator").css("background-color", "#333");
	}, 
	close: function(){
		if($('body').find('.navigator.active').length = 1){
			$(".navigator").css("background-color", "#4980a5");
		} else{
			$(".navigator").css("background-color", "transparant");
		}
	}
	});
}


function scrollToAnchor(aid){
    var aTag = $("div[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top - 50 },'slow');
}