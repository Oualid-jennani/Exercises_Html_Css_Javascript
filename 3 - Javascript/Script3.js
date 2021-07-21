/*jslint evil: true */
/*global console, alert,prompt*/
 
var table = [ "walid", "hakim", "alae", "hicham", "afifa" ];


if (Array.isArray(table)) {
    console.log(table);
    console.log(table.length);
    table = table.toString();
    console.log(table);
    console.log(table.length);
}
console.log("------------------------------");

var mydate = new Date(),
    mystr = mydate.toString();
console.log(mydate);
console.log(mystr);
mystr = mydate.toLocaleString();
console.log(mystr);

console.log("------------------------------");

var T = [ "walid", "hakim", "alae", "hicham", "afifa" ];
T = T.join("|");
console.log(T);

console.log("------------------------------");

var table = [ "walid", "hakim", "alae", "hicham", "afifa", "khalid", "jihad" ];
console.log(table);

table[table.length] = "jamal";
console.log(table);

table.push("Nada");
console.log(table);

table.unshift("Ichrak");
console.log(table);

console.log("------------------------------");

table.splice(2, 3);
console.log(table);
table.splice(2, 0, "testAdd1", "testAdd2");
console.log(table);
table.splice(2, 2, "testReplace1", "testReplace2");
console.log(table);

console.log("------------------------------");
 /*
table.splice(2, 3);
console.log(table);
*/
table.pop();
console.log(table);
/* var lastName = table.pop(); console.log(lastName); */
table.shift();
console.log(table);
/* var firstName = table.shift(); console.log(firstName); */
console.log("------------------------------");
table.sort();
console.log(table);
table.reverse();
console.log(table);
console.log("------------------------------");

var sliceArray1 = table.slice(2, 5);
console.log(sliceArray1);
var sliceArray2 = table.slice(-6, -1);
console.log(sliceArray2);

var Tab1 = [ "walid", "hakim", "alae", "hicham", "afifa"];
var Tab2 = [ "jamal", "rabi3", "kawtar", "anas"];
var T1_T2 = Tab1.concat(Tab2, sliceArray1);
console.log(T1_T2);

console.log("------------------------------");

var tableSearch = [ "walid", "hakim", "alae", "hicham", "afifa" ];

var specialFriends = tableSearch.indexOf("alae");// à partir de première index
var specialFriends = tableSearch.lastIndexOf("alae");//à partir de derniere index

//var specialFriends = tableSearch.indexOf("alae", 4);//choisir index à partir de premiére index
//var specialFriends = tableSearch.lastIndexOf("alae", 4);//chisir index à partir de derniere index

console.log(specialFriends);
console.log(tableSearch[specialFriends]);

document.getElementById("ALL").innerHTML = "My Friends Are : " + tableSearch;

document.getElementById("SP").innerHTML = "My Special Friend is :" + tableSearch[specialFriends];






console.log("******************************************************************************************************************************************");
console.log("******************************************************************************************************************************************");
console.log("******************************************************************************************************************************************");







var mystr = "I love 'javascript'";
console.log(mystr);
console.log(typeof (mystr));
console.log(mystr.length);
var mynember = 100;
console.log(typeof (mynember));
var myNewNbr = mynember.toString();// ==> or = String(mynember);
console.log(typeof (myNewNbr));

console.log("------------------------------");

var myLove = "I'm In Love With JavaScript And In Love With PHP",
    myWord = myLove.indexOf(myLove);
console.log(myWord);

myWord = myLove.indexOf("Love", 9);
console.log(myWord);

myWord = myLove.lastIndexOf("Love", 39);
console.log(myWord);

myWord = myLove.search("Love");
console.log(myWord);

console.log("------------------------------");

var mySplitSTR = myLove.split(" ", 4);
console.log(mySplitSTR);

var mySlice = myLove.slice(10, 31);
console.log(mySlice);


var mySlice = myLove.slice(-2);

console.log(mySlice);

var mySubstr = myLove.substr(5, 20);
console.log(mySubstr);

var mySubstring = myLove.substring(31, 10);
console.log(mySubstring);

console.log("------------------------------");
 
var myString = "I Love JavaScript Too Much javaScript Is Very Fun",
    myChar = myString.charAt(2),//myChar = myString.charAt(myString.length - 1);
    mycharCode = myString.charCodeAt(8),
    myreplace1 = myString.replace("JavaScript", "C#"),
    myreplace2 = myString.replace(/JavaScript/gi, "C#");
console.log(myChar);
console.log(mycharCode);
console.log(myreplace1);
console.log(myreplace2);

console.log("------------------------------");

var myMessage = String.fromCharCode(65, 66, 67, 68);
console.log(myMessage);

var myMessage1 = "Hello I Love",
    myMessage2 = "PHP And JavaScript",
    myAll = myMessage1.concat(" ", myMessage2, " And C#");
console.log(myAll);

myAll = "Hello I Love".concat(" ", "PHP And JavaScript", " And C#");
console.log(myAll);

console.log("------------------------------");

console.log(myMessage1.toLowerCase());
console.log(myMessage1.toUpperCase());

var text = "         Hello WALID       JENNANI      ";
console.log(text.trim());

var myLink = "Google";

document.getElementById("LINK").innerHTML = "Go To Google By This Link ==>  " + myLink.link("http://www.google.com");
console.log("Go To Google By This Link ==>  " + myLink.link("http://www.google.com"));

console.log("------------------------------");

var myNumber = 12000,
    myNbrStr = myNumber.toString(),
    mynewNBR = myNbrStr.replace(/0/g, 1),
    myArrayNbr = mynewNBR.split("");
console.log(myNumber);
console.log(myNbrStr);
console.log(mynewNBR);
console.log(myArrayNbr);
//        ||
//       _||_
//        \/
console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
myNbrStr = myNumber.toString().replace(/0/g, 1).split("");
console.log(myNbrStr);













