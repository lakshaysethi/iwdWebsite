//welcomescreen
//registerScreen
//login screen

//showTimes
var welcomeScreen = document.getElementsByClassName('welcomeScreen');
var registerScreen =document.getElementsByClassName('registerScreen');
var loginScreen = document.getElementsByClassName('loginScreen');


function showLoginScreen(){
	welcomeScreen[0].style.display="none";
	registerScreen[0].style.display="none";
	loginScreen[0].style.display="block";
}


function showRegisterScreen(){
	welcomeScreen[0].style.display="none";
	registerScreen[0].style.display="block";
}

function viewShowTimesScreen(){
	welcomeScreen[0].style.display="none";
	registerScreen[0].style.display="none";
	loginScreen[0].style.display="none";
}
