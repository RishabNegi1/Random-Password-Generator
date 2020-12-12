	function getPassword() {

		var char = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$&";
		var passwordLength = 15;
		var password = "";

		for (var i = 0; i<passwordLength; i++) {

               var randomNumbers = Math.floor(Math.random() * char.length);
               password += char.substring(randomNumbers,randomNumbers+1);
			}
		document.getElementById("password").value =password
	}


