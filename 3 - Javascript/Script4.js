/*jslint evil: true */
/*jslint plusplus: true */
/*global console, alert,prompt*/


var i;
for (i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("------------------------------");
i = 1;
for (;;) {
    if(i > 10) break;
    console.log(i);
    i++;
}

console.log("***************************************************************************************");



var myCar = {
    color: "red",
    type: "dasia",
    price: "500000",
    model: "2015"
};

console.log(myCar.model);
var prop;
for (prop in myCar) {
    if (myCar.hasOwnProperty(prop)) {
        console.log(prop + " : " + myCar[prop]);
    }
}
//*********************************************************
function GenerateYears(start, end) {
    "use strict";
    var year;
    document.write("<select>");
    
    for (year = start; year <= end; year++) {
        document.write("<option value ='" + year + "'>" + year + "</option>");
    }
    
    document.write("</select>");
}

GenerateYears(1900, 2018);

console.log("------------------------------");
i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}
i = 0;
do {
    console.log(i);
    i++;
} while (i <= 10);

console.log("------------------------------");
var I, J;

MainLoop:
for (I = 1; I < 5; I++) {
    ChildLoop:
    for (J = 15; J < 20; J++) {
        if (J === 17) {
            break ChildLoop;
            //break MainLoop;
            //continue ChildLoop;
            //continue MainLoop;
        }
        console.log(I + " ==> " + J);
    }
}

console.log("------------------------------");






















