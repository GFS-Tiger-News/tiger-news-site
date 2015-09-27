$(document).ready(function() {
//$("#register").click(function() {
var name = $("#name").val();
var email = $("#email").val();
var emailForm =document.write("mailto:dmeyer@gfsnet.org?subject=I'd%20like%20to%20sign%20up%20for%20Tiger%20News&body=I%20"+ name+"%20would%20love%20to%20join%20tiger%20news.%20You%20can%20reach%20me%20at%20"+email);
if (name == '' || email == '') {
alert("Please fill all fields...!!!!!!");
} else{ 
	alert("good job?")
$('#signup-link').setAttribute("href","emailForm");
//$('#signup-link').trigger('click');
$('div.main').fadeOut(1000);
$('.signup-main').fadeIn(2000);
//undisable register button and have its href be the mailto
}
//});
});