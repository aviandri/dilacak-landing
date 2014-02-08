
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


$(document).ready(function() {				
	$(".send-message").click(sendEmail);				

	$(document).on('click', '.close', function(){
		$(".statusbar .container .content").remove();
	});

});

function sendEmail(){
	var email = $("#email").val();
	var name = $("#name").val();
	var message = $("#message").val();
	var phone = $("#phone").val();
	var website = $("#website").val();
	var data = {'email' : email, 'name' : name, 'message' : message, 'website': website, 'phone': phone }

	var text = "";
	var sevirity = "";
	if(validateForm(phone, email) == false){
		text = "Oooops, you forgot to fill in some fields";
		sevirity = "error";
	}else{
		text = "We got your message!";
		sevirity = "info";
		$.ajax({url: '/send_message', type: 'POST', data: data, success: callback});
		clearForm();	

	}

	statusBarContentDiv = $(".statusbar").find("div");
	contentDiv = $("<div></div>").attr("class", "content");
	spanMessage = $("<span></span>").text(text);
	closeLink = $("<a></a>").attr("href", "#").attr("class", "close").attr("data-dismiss", "alert").text("x");

	contentDiv.append(spanMessage);
	contentDiv.append(closeLink);

	$(".statusbar").addClass(sevirity);
	statusBarContentDiv.append(contentDiv);
}

function validateForm (phone, email) {
	if(isValidEmail(email) == true && isValidPhone(phone) == true){
		return true
	}else{
		return false;
	}
}



function isValidEmail(email){
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	console.log("email:" + filter.test(email));
	if (filter.test(email)) {
  		return true;
	}
	else{
	  	return false;
	 }
}


function isValidPhone(phone) {
  var filter = /^\d+$/;
  console.log("phone:" + filter.test(phone));
  if(filter.test(phone)){
  	return true
  }else{
  	return false;
  }
}


function clearForm(){
	name = $("#name").val("");
	email = $("#email").val("");
	phone = $("#phone").val("");
	message = $("#message").val("");
	message = $("#website").val("");
}

function empty(value){
	console.log(value);
	if(value == "" || value == null){
		return true;
	}
}

function callback(){

}

