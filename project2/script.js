//welcomescreen
//registerScreen
//login screen

//showTimes
var welcomeScreen = document.getElementsByClassName('welcomeScreen');
var registerScreen =document.getElementsByClassName('registerScreen');
var loginScreen = document.getElementsByClassName('loginScreen');
var userList = [];
var userName;


function showLoginScreen(){
	welcomeScreen[0].style.display="none";
	registerScreen[0].style.display="none";
	loginScreen[0].style.display="block";
}


function showRegisterScreen(){
	welcomeScreen[0].style.display="none";
	registerScreen[0].style.display="block";
	getUser();
}

function viewShowTimesScreen(){
	welcomeScreen[0].style.display="none";
	registerScreen[0].style.display="none";
	loginScreen[0].style.display="none";
}


function registerNewAccount() {
	var username = document.getElementById("regUsername").value;
	var password = document.getElementById("regPassword").value;
	var name = document.getElementById("regName").value;
}

function loadUserDB(xmlFile) {
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	//Load the XML file and return an XML object
	xmlhttp.open("GET", xmlFile, false);
	xmlhttp.send();
	return (xmlhttp.responseXML);
}

function user(username, password, name) {
	this.username = username;
	this.password = password;
	this.name = name;
}

function getUser() {
	xmlDoc = loadUserDB("userDB.xml");

	var tempUserList = xmlDoc.documentElement.getElementsByTagName("User");
	alert(user.length);
	var rUsername = "";
	var rPassword = "";
	var rName = "";

	for(i=0;i<tempUserList.length;i++) {
		rUsername = tempUserList[i].getElementsByTagName("Username")[0].firstChild.nodeValue;
		rPassword = tempUserList[i].getElementsByTagName("Password")[0].firstChild.nodeValue;
		rName = tempUserList[i].getElementsByTagName("Name")[0].firstChild.nodeValue;

		var tempUser = new user(rUsername, rPassword, rName);
		userList[i] = tempUser;
	}

	txt="<table border='0px' id='tblBook' cellpadding='3px' cellspace='0px'>";
	txt+="<tr><th>Username</th><th>Password</th><th>name</th></tr>";
	
	//Retrieve all the BOOK elements from the XML file
    books=xmlDoc.documentElement.getElementsByTagName("User");
    for (i=0;i<tempUserList.length;i++)
    {
      txt+="<tr>";
      
	  txt+="<td align='left'>" + i + "</td>";
	  userChildren=tempUserList[i].getElementsByTagName("Username");
      txt+="<td align='left' id='title"+ i +"'>" + userChildren[0].firstChild.nodeValue + "</td>"; 
         
      userChildren=tempUserList[i].getElementsByTagName("Password");
      txt+="<td align='left'>" + userChildren[0].firstChild.nodeValue + "</td>";
	  
	  userChildren=tempUserList[i].getElementsByTagName("Name");
      txt+="<td align='left' id='price"+ i +"'>" + userChildren[0].firstChild.nodeValue + "</td>";
	  
	  
      txt=txt + "</tr>";
    }
    txt+="</table>";
	
	//Display book table in <div id="txtBookInfo">
    document.getElementById("userList").innerHTML=txt;



// SHOW TIMES SCREEN FUCNTIONALITY 

function showMoviesOnDate(){

}

function movie(previewDate1,previewDate2,time1,time2){
	this.previewDate1 =previewDate1;
	this.previewDate2 = previewDate2;
	this.time1=time1;
	this.time2= time2;


}




function assignDatesTimeHallToMovie(){
	// everyday there will be 4 movie because Requirement is 

}

function assignDatesAndTimeToMovie(){
	// everyday there will be a movie because Requirement is 

}

function assignDatesAndTimeToMovie(){
	// everyday there will be a movie because Requirement is 

}

function assignDatesAndTimeToMovie(){
	// everyday there will be a movie because Requirement is 

	//minimum two different movie sessions per day for each cinema room
	//means 4 movies each day


}

//login and register page functionality
var userLoggedIn= null;

function register(){

}


