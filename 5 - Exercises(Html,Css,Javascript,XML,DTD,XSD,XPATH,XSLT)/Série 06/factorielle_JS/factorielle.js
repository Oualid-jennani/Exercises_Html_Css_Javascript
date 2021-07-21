
 // var num = document.getElementById("Numr").value;
function Fact(num)
{
    "use script";
    // var num = document.getElementById("Numr").value;
    if(result =="")
    {
        affich.innerHTML="text box vide!!"; // la fichager dans <div>
    }
    else if(isNaN(result) )
    {
        affich.innerHTML="enter un nombr";
    }
    else if (num == 0)
    { 
        return 1;
    }
    else
    { 
        return num * Fact(num - 1); 
    }

}

var result = prompt("enter number please  : ");
document.getElementById("affich").innerHTML= Fact(result);
affich.innerHTML=Fact(result);
