
function navToggle (argument) {
	var navigation = responsiveNav(".nav-collapse", {customToggle: ".nav-toggle",
	animate: true,        // Boolean: Use CSS3 transitions, true or false
	transition: 50,      // Integer: Speed of the transition, in milliseconds
	open: function(){
		$("nav").css("background-color", "#333");
	}, 
	close: function(){
		if($('body').find('nav.active').length = 1){
			$("nav").css("background-color", "#4980a5");
		} else{
			$("nav").css("background-color", "transparant");
		}
	}
	});
}


function scrollToAnchor(aid){
    var aTag = $("div[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top - 50 },'slow');
}