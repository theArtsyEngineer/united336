 $("#login-button").click(function(event){
     event.preventDefault();
	 
     var username = document.getElementById('username').value;
     var password = document.getElementById('password').value;
     
	 $('form').fadeOut(500);
	 $('.wrapper').addClass('form-success');
     
     $('.login_message').text("Welcome");
     
     $('.test_name').text(username);
     $('.test_password').text(password);
});