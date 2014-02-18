


function scrollToAnchor(aid){
	var aTag = $("div[name='"+ aid +"']");
	$('html,body').animate({scrollTop: aTag.offset().top - 50 },'slow');
}


$(document).ready(function() {				
	$(".send-message").click(contactUs);				
	$(document).on('click', '.send-order', function(){
		order();
	});
	$(document).on('click', '.close', function(){
		$(".statusbar .container .content").remove();
	});


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

	$('.nav-collapse ul li a').on('click',function(){			
		if($(".nav-collapse.opened").length > 0){
    		navigation.toggle();
    	}
	});

}
);


function contactUs(){
	var data = getFormData();
	if(!($(".statusbar .container .content").length == 0)){
		$(".statusbar .container .content").remove();
	}

	$(".statusbar .container .content").remove();
	
	if(getErrorFlag(data) == true){
		text = "Ooop, ada value yang tidak valid. Mohon perbaiki isi form.";
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

function getErrorFlag(data){
	var errorMap = validateForm(data["phone"], data["email"], data["name"], data["message"]);	
	var errorFlag = false;

	for (var key in errorMap) {	
		if(errorMap[key] != true){
			$("#"+key).addClass("error");
			errorFlag = true;
		}
	}
	return errorFlag;
}

function order(){
	var data = getFormData();
	if(getErrorFlag(data) == true){
		$(".form-message").text("Ooop, ada value yang tidak valid. Mohon perbaiki isi form.");
		$(".form-message").addClass("error");
	}else{		
		$.ajax({url: '/send_message', type: 'POST', data: data, success: callback});
		$(".form-message").text("Terima kasih atas order anda, kami akan menghubungi dalam waktu dekat.");
		$(".form-message").addClass("success");
		clearForm();	
	}
}

function getFormData(){
	var emailValue = $("#email").val();
	var nameValue = $("#name").val();
	var messageValue = $("#message").val();
	var phoneValue = $("#phone").val();
	var websiteValue = $("#website").val();
	var unit_orderedValue = $("#unit_ordered").val();
	var package_typeValue = $("#package_type").val();

	var data = {'email' : emailValue, 'name' : nameValue, 'message' : messageValue, 'website': websiteValue, 'phone': phoneValue, "unit_ordered": unit_orderedValue, "package_type": package_typeValue }
	return data;
}


function sendEmail(){
	

	
}


function sendOrder(){
	
} 

function validateForm (phone, email, name, message) {
	var errorMap = new Object();
	errorMap["email"] = isValidEmail(email);
	errorMap["phone"] = isValidPhone(phone);
	errorMap["name"] = !isEmpty(name);
	
	return errorMap;
}



function isValidEmail(email){
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (filter.test(email)) {
  		return true;
	}
	else{
	  	return false;
	 }
}


function isValidPhone(phone) {
  var filter = /^\+?([\d-])+$/;
  if(filter.test(phone)){
  	return true
  }else{
  	return false;
  }
}


function clearForm(){
	$("#name").val("");
	$("#name").removeClass("error");
	$("#email").val("");
	$("#email").removeClass("error");
	$("#phone").val("");
	$("#phone").removeClass("error");
	$("#message").val("");
	$("#message").removeClass("error");
	$("#website").val("");
	$("#website").removeClass("error");
	$("#unit_ordered").val("");

	if($(".form-message").length > 0){
		$(".form-message").removeClass("error");
	}
}

function isEmpty(value){
	if(value == "" || value == null){
		return true;
	}
}

function callback(){

}

