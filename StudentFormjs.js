
window.onload = function() {
	
// function to validate the registration form fields
 this.validaterequiredfields =	function() {
		 
		// get the values of text boxes
		// first get the textbox using document.getElementById and then value using 'value' property
		var uname = document.getElementById('regusername');
		var email = document.getElementById('email');
		var pwd =   document.getElementById('regpwd');
		var confirmpwd = document.getElementById('confirmpwd');

		// if value is empty set required attribute to true and 
		// accordingly red border will be applied to text box
		if(uname.value === '')
			document.getElementById('regusername').required = true;

		if(email.value === '')
			document.getElementById('email').required = true;

		if(pwd.value === '')
			document.getElementById('regpwd').required = true;

		if(confirmpwd.value === '')
			document.getElementById('confirmpwd').required = true;


	}
}