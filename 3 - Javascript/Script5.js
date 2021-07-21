/*jslint evil: true */
/*jslint plusplus: true */
/*global console, alert,prompt*/

var x = Math.ceil(4.3);
console.log(x);
x = Math.ceil(-4.3);
console.log(x);
x = Math.ceil(7 - 3.6);
console.log(x);

console.log("------------------------------");
x = Math.floor(4.3);
console.log(x);
x = Math.floor(-4.3);
console.log(x);

console.log("------------------------------");
x = Math.round(1.4);
console.log(x);
x = Math.round(1.6);
console.log(x);

console.log("------------------------------");
x = Math.max(1.4, 5, 88, -55, 55, 97, 1000);
console.log(x);
x = Math.min(1.4, 5, 88, -55, 55, 97, 1000);
console.log(x);

console.log("------------------------------");
x = Math.random();
console.log(x);
console.log(Math.floor((x * 10) + 1));
console.log(Math.ceil((x * 10)));

//********************************************************************************************************************************
console.log("*************************************************");
//Attributef List
//[ i ] ==> case insensitive
//[ g ] ==> Global Search
//[ m ] ==> multi line Search
//Breckets Use
//[...] character
//[^...] not character
//[a-z] range small letters
//[A-Z] range capital letters
//[0-9] range numbers
//[^0-9] not range
var string = "I Love Elzero Web School (12345test6789)",
    result = string.replace(/L/ig, "@");
console.log(result);
result = string.replace(/[e]/ig, "@");
console.log(result);
result = string.replace(/[a-e]/ig, "@");
console.log(result);
result = string.replace(/[A-Z]/ig, "@");
console.log(result);
result = string.replace(/[0-9]/ig, "@");
console.log(result);
result = string.replace(/[^0-9]/ig, "@");
console.log(result);

console.log("------------------------------");
//[A-g] = range[A-Z] , range[a-g]
var str = "AB XYZ abc hij";
result = str.replace(/[A-g]/g, "@");
console.log(result);
//[0-9a-z] double range
var strALL = "1234567890abcdefghiABCDEFGHIG";
result = strALL.replace(/[0-9a-z]/g, "@");
console.log(result);

console.log("------------------------------");
//Quantifiers
//Letter + ==> word contain one letter
//Letter {number} ==> word contain nember of letter
//Letter {number,number} ==> word contain number or number
//Letter {number,} ==> word contain at least number
var OtherSTR = "I Love Elzeeero Webbbb School";
result = OtherSTR.replace(/o+/gi, "@");
console.log(result);
result = OtherSTR.replace(/e{3}/gi, "@");
console.log(result);
result = OtherSTR.replace(/l{3}/gi, "@");
console.log(result);
result = OtherSTR.replace(/l+/gi, "@");
console.log(result);
result = OtherSTR.replace(/b{2,4}/gi, "@");
console.log(result);
result = OtherSTR.replace(/o{2,}/gi, "@");
console.log(result);

//********************************************************************************************************************************
console.log("*************************************************");

var theDate = new Date();
console.log(theDate);
theDate = new Date(10000);
console.log(theDate);
theDate = new Date("october 25, 1982 12:20:55");
console.log(theDate);
theDate = new Date("2018/2/2");
console.log(theDate);
theDate = new Date(2017, 12, 05, 11, 20, 30, 25);
console.log(theDate);

console.log("*************************************************");
//Long
theDate = new Date("october 25, 1982 12:20:55");
console.log(theDate);
//Short
theDate = new Date("4/22/2018 12:20:55");
console.log(theDate);
//Iso
theDate = new Date("2018-11-22 12:20:55:555 +00:00");
console.log(theDate);

console.log("*************************************************");
//Day of the month 1-31
var DT = theDate.getDate();
console.log(DT);
//Day of the week 0-6
DT = theDate.getDay();
console.log(DT);
//Get the full year
DT = theDate.getFullYear();
console.log(DT);
//Get hours 0-23
DT = theDate.getHours();
console.log(DT);
//Get minutes 0-59
DT = theDate.getMinutes();
console.log(DT);
//Get seconds 0-59
DT = theDate.getSeconds();
console.log(DT);
//Get lilliseconds 0-999
DT = theDate.getMilliseconds();
console.log(DT);
//Number of mililliseconds from 1970 or specific Date
DT = theDate.getTime();
console.log(DT);
//Get def between UTC & your local time in minutes
DT = theDate.getTimezoneOffset();
console.log(DT);
//Get UTC hours 0-23
DT = theDate.getUTCHours();
console.log(DT);

console.log("*************************************************");
var SDT = new Date();
SDT.setDate(18);
console.log(SDT);

console.log("--------------------------------------------------");
SDT.setFullYear(2016);
console.log(SDT);
SDT.setFullYear(2018, 12, 29);
console.log(SDT);
SDT.setFullYear(2018, 12, 0);
console.log(SDT);

console.log("--------------------------------------------------");
SDT.setMonth(5);
console.log(SDT);
SDT.setMonth(12);
console.log(SDT);
SDT.setMonth(0, 0);
console.log(SDT);

console.log("--------------------------------------------------");
SDT.setHours(24);
console.log(SDT);
SDT.setHours(2);
console.log(SDT);
SDT.setHours(0, 60, 60);
console.log(SDT);
SDT.setHours(0, 60, 60, 1000);
console.log(SDT);
SDT.setHours(0, 0, 0, 0000);
console.log(SDT);

console.log("--------------------------------------------------");
SDT.setMinutes(20);
console.log(SDT);

console.log("--------------------------------------------------");
SDT.setSeconds(60);
console.log(SDT);

console.log("--------------------------------------------------");
SDT.setMilliseconds(600000);
console.log(SDT);

console.log("*************************************************");
var MyDate = new Date(),
    Now = Date.now(),
    Min = 1000 * 60,
    Hour = Min * 60,
    Day = Hour * 24,
    Month = Day * 30,
    Year = Month * 12 ;
    
    
console.log(Now);
console.log(Math.round(Now / Year));

MyDate = Date.parse("25 oct 2018 12:20:50");
console.log(MyDate / Year);

console.log("--------------------------------------------------");
var MyDate2 = new Date(),
    MyIso = MyDate2.toISOString(),
    myDtStr = MyDate2.toDateString(),
    MyTime = MyDate2.toTimeString();

console.log(MyIso);
console.log(myDtStr);
console.log(MyTime);
