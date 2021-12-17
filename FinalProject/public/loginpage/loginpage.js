var emailInput = document.getElementById('email');
var passwordFieldInput = document.getElementById("password");
//emailErrorMessage
window.addEventListener('load', (event) => {
  if(sessionStorage.getItem("Password") != null || sessionStorage.getItem("Eamil") != null) {
	emailInput.value = sessionStorage.getItem("Email");
	passwordFieldInput.value =sessionStorage.getItem("Password"); 
}
});

 function testFunc () {
	var isValid = true;
	var emailInputText = emailInput.value;
var emailError = document.getElementById("emailErrorMessage");
	console.log("Inside function");
if(!emailInputText.match("[A-Za-z0-9]+@[A-Za-z0-9].[A-Za-z]{3}")) {
	emailError.innerHTML = "Invalid email format!"
	alert("Invalid email format!");
	sessionStorage.setItem("Email", emailInputText);
	sessionStorage.setItem("Password", passwordFieldInput.value);
	isValid = false;
	window.location.href = "../mainpage/mainpage.html";
} else {
	emailError.innerHTML = "";
	isValid = true;
	sessionStorage.removeItem("Email");
	sessionStorage.removeItem("Password");
	window.location.href = "../mainpage/mainpage.html";
}
};