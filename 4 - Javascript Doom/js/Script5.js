var mainDiv1 = document.getElementById("main1");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

btn1.onclick = function(){
    "use strict";
    document.getElementById("monster1").style.display = 'none';
}

function makeEvent (){
    "use strict";
    document.getElementById("monster3").classList.toggle("change");
}

btn2.onclick = function(){
    "use strict";
    btn1.addEventListener('click',function(){
        document.getElementById("monster2").style.display = 'none';
    });
    btn1.addEventListener('click',makeEvent);
}


btn3.onclick = function(){
    "use strict";
    btn1.removeEventListener('click',makeEvent);
}

/**************************************************/

var mainDiv2 = document.getElementById("main2"),
    myChild = document.getElementById("myChild");

if(mainDiv2.contains(myChild)){
    myChild.textContent = "this is changed from javascript";
}


/**************************************************/
console.log("---------------------------------");
/*
    Client height
        viewble area
        include padding
        no border
        no margin
        no scroll
*/
var mainDiv3 = document.getElementById("main3");
console.log(mainDiv3.clientHeight + 'px');
console.log(mainDiv3.clientWidth + 'px');


/**************************************************/
console.log("---------------------------------");
/*
    Scroll height
        All area includ viewble area
        include padding
        no border
        no margin
        no scroll
*/
var mainDiv4 = document.getElementById("main4");
console.log(mainDiv4.clientHeight + 'px');
console.log(mainDiv4.clientWidth + 'px');
console.log(mainDiv4.scrollHeight + 'px');
console.log(mainDiv4.scrollWidth + 'px');

/**************************************************/
console.log("---------------------------------");
/*
    Scroll height
        All area includ viewble area
        include padding
        include border
        include scroll
        no margin
        
*/
var mainDiv5 = document.getElementById("main5");

console.log(mainDiv5.offsetHeight + 'px');
console.log(mainDiv5.offsetWidth + 'px');


/**************************************************/
console.log("---------------------------------");

var mainDiv6 = document.getElementById("main6");

mainDiv6.onclick = function(){
    "use strict";
    document.documentElement.scrollTop += 100;
    document.documentElement.scrollLeft += 100;
    console.log(document.documentElement.scrollTop);
    
    if(document.documentElement.scrollTop > 1000){
        this.classList.add("active");
    }
}


/**************************************************/
console.log("---------------------------------");

var mainDiv7 = document.getElementById("main7");

console.log("Left border width in px = " + mainDiv7.clientLeft + "px");
console.log("Top border width in px = " + mainDiv7.clientTop + "px");



/**************************************************/ 
console.log("---------------------------------");

var mainDiv8 = document.getElementById("main8");
mainDiv8.style.width = "300px";
mainDiv8.style.height = "300px";
mainDiv8.style.backgroundColor = "blue";
mainDiv8.style.padding = "10px";
mainDiv8.style.color = "white";
mainDiv8.style.fontSize = "60px";/*...................*/























