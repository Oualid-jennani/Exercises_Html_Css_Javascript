/*jslint evil: true */
/*global console, alert,prompt*/

document.write("<br>hello walid jennani");

var myName = "walid",
    myAge = 22,
    myCountry = "moroco";

document.getElementById("D1").innerHTML =
    "<span style='color:red'>my name is :</span> " + "<span style='color:blue'>" + myName + "</span>" +
    "<br>my age is  : " + myAge +
    "<br>my country is : " + myCountry;


var myDiv = document.getElementById("D2");
myDiv.innerHTML = "hello JavaScript";
console.log("my name is : " + myName + " my age is : " + myAge + " my country is : " + myCountry);

//alert("my name is : " + myName + " my age is : " + myAge + " my country is : " + myCountry);

var yourAge = prompt("whats your Age");

if (yourAge < 18) {
	
	document.getElementById("D3").innerHTML = "Sorry Your Age Is " + yourAge + " You Are Not Allowed Here";
} else {
	document.getElementById("D3").innerHTML = "Hello Your Age Is " + yourAge + " You Are Welcom Here";
}

//if ( variable = value ) <--  declare and afectation 
//if ( variable == value ) <--  testing variable
//if ( variable === value ) <--  testing variable and Data Tybe  

//        ||
//       _||_
//        \/
// Not (!) 
//if ( variable != value )
//if ( variable !== value )
//if ( variable !=== value )

//**Exemple** 
//var varTest = "30";
//1: (varTest == 30)    <-- true
//1: (varTest === "30") <-- true
//2: (varTest === 30)   <-- false)
function CallAge(year) {
	"use strict";
	return alert("Your Age Is : " + (2018 - year));
}
function Year() {
	"use strict";
	return prompt("Type your date of birth");
}



(function invoke() {
	"use strict";
	document.getElementById("D4").innerHTML = "Hello Div Yellow";
}());

//-----------------------------------------------------------------------
function CallPrice() {
	"use strict";
	var pr = document.getElementById("PR").value;
	
	if (pr === "") {
		alert("This Field Can't Be Empty ");
	} else if (isNaN(pr)) {
		alert("This Field Accept Nember Only ");
	} else if (pr === "0") {
		alert("The Value Must Not Be 0 ");
	} else if (pr < 0) {
		alert("The Value Must Not Be Negative Number ");
	} else {
		alert(pr + " Dollar is worth " + pr * 10.11 + "DH");
	}
    //if(isFinte(number)){.....} <== test number
}



function SeasonForYou() {
	"use strict";
	
	var Season = prompt("Whats The Best Season For You");
	
	switch (Season) {
	case "winter":
		alert("Winter is too cold");
		break;

	case "Summer":
		alert("Summer is too hot");
		break;

	case "Autumn":
		alert("Autumn is very good");
		break;

	case "Spring":
		alert("Spring is Amazing");
		break;
			
	case "aaa":
	case "bbb":
		alert("Testing True");
		break;
			
	default:
		alert("You Didnt Enter A Season Name");
	}
}


