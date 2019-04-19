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




// SHOW TIMES SCREEN FUCNTIONALITY 

function showMoviesOnDate(){
	//get date
	//show table of movies and time on date in cinema halls 
}

function movie(previewDate1,previewDate2,time1,time2,cinemaHall){
	this.previewDate1 =previewDate1;
	this.previewDate2 = previewDate2;
	this.time1=time1;
	this.time2= time2;
	this.cinemaHall = cinemaHall;
}

function assignDatesTimeHallToMovie(){
	// everyday there will be 4 movie because Requirement is 
	//minimum two different movie sessions per day for each cinema room
	//lets keep times fixed of 10 am and 2pm
	//everyday at 10 am there will be 1 moie in 


}
//login and register page functionality
var userLoggedIn= null;

function register(){

}