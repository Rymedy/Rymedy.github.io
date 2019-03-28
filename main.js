$(document).ready(function(){
	$('#name').blur(function(){
		var name = $(this).val();
		if (name == '') {
			$(this).before('<div class="name-alert alert alert-danger"><span>No name entered.</span></div>');
		} else if (name.length > 20) {
			$(this).before('<div class="name-alert alert alert-danger"><span>Name needs to be less than 20 characters.</span></div>');
		} else {
			$('.name-alert').remove();
			$(this).css('background','#deefdf');
		}
	});
	$('#password').blur(function(){
		var pass = $(this).val();
		if (pass == '') {
			$(this).before('<div class="pass-alert alert alert-danger"><span>No password entered.</span></div>');
		} else if (pass.length > 20) {
			$(this).before('<div class="pass-alert alert alert-danger"><span>Password needs to be less than 20 characters.</span></div>');
		} else {
			$('.pass-alert').remove();
			$(this).css('background','#deefdf');
		}
	});
	$('#password-confirm').blur(function(){
		var pass = $('#password').val()
		var pass_c = $(this).val();
		if(pass_c != pass){
			$(this).before('<div class="pass-c-alert alert alert-danger"><span>Passwords don\'t match</span></div>');
		} else {
			$('.pass-c-alert').remove();
			$(this).css('background','#deefdf');
		}
	});
});

/*
console.log('Hello world!');
alert('This is an alert!');

if(condition){
	
} else if () {
	
} else {
	
}

while(){
	
	
}

var example = 4.6;

function name(param1, param2) {
	
	
}
*/
