$(document).ready(function() {
	$(".form").keypress(function() {
		var name = $("#name").val();
		var email = $("#email").val();
		var emailForm ="mailto:dmeyer@gfsnet.org?subject=I'd%20like%20to%20sign%20up%20for%20Tiger%20News&body=I,%20"+ name+",%20would%20love%20to%20join%20tiger%20news.%20Reach%20me%20at%20"+email+
		if (!(name == '') & !(email == '')) {
			$('.signup').attr("href",emailForm);
			$('.signup').removeAttr('disabled');
		} 
		if (name =='' | email == ''){
			$('.signup').removeAttr('href');
			$('.signup').attr('href',"#");
		}
		
	});
function signupButtonClicked() {
	$("#warning").innerHTML= "If email does not pop-up, please just send an email to dmeyer@gfsnet.org";
	$("#warning").removeAttribute("hidden");
}
			//$('.form').after(  '<div class="alert alert-warning"> If email does not pop-up, please just send an email to dmeyer@gfsnet.org</div>')
	//});
});