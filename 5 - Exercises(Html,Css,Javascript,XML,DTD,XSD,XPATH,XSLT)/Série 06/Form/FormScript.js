var Main = document.getElementById("FSBack");
var iDiv = document.createElement('div');
iDiv.id = 'subm';
iDiv.className = 'subm';
function submit_by_id() {

    var name = document.getElementById("name");
    var pname = document.getElementById("pname");
    var date = document.getElementById("date");
    var passW = document.getElementById("passW");
    var email = document.getElementById("email");
    var Address = document.getElementById("Address");
    var FIL = document.getElementById("FIL");

    var rediochecked = document.querySelectorAll('#NIV:checked');

    var checkboxes = document.querySelectorAll('#Language:checked');

    var array = [];
    for (var i = 0; i < checkboxes.length; i++) {
      array.push(checkboxes[i].value);
    }

    Main.appendChild(iDiv);

    iDiv.style.width = "350px";
    iDiv.style.color = "red";
    iDiv.style.margin = "10px auto";
    iDiv.style.border = "solid 1px #000";
    iDiv.style.padding = "20px";

    iDiv.innerHTML ="";
    var nomReg = /[A-Z][a-z]+/g;
    var emailReg = /^\S+@\S+.\S+$/;
    var adressReg = /\S+/g;
    var passwReg = /\S+/g;

    if (!(name.value).match(nomReg) ) {
        iDiv.innerHTML += "Invalid Nom...!!!!!!<br>";
        name.className +="Invalid";
    }
    if (!(pname.value).match(nomReg)) {
        iDiv.innerHTML += "Invalid Prenom...!!!!!!<br>";
        pname.className +="Invalid";
    }
    if (date.value == "") {
        iDiv.innerHTML += "Invalid Date...!!!!!!<br>";
        date.className +="Invalid";
    }
    if (!(passW.value).match(passwReg)) {
        iDiv.innerHTML += "Invalid Password...!!!!!!<br>";
        passW.className +="Invalid";
    }
    if (!(email.value).match(emailReg)) {
        iDiv.innerHTML += "Invalid Email ...!!!!!!<br>";
        email.className +="Invalid";
    }
    if (!(Address.value).match(adressReg)) {
        iDiv.innerHTML += "Invalid Address...!!!!!!<br>";
        email.className +="Invalid";
    }
    if (FIL.value == "") {
        iDiv.innerHTML += "Invalid Filiere...!!!!!!<br>"
        FIL.className +="Invalid";
    }

    if (rediochecked.length == 0) {
        iDiv.innerHTML += "Invalid Niveau...!!!!!!<br>"
        rediochecked.className +="Invalid";
    }
    if (!(array.length >= 1) ) {
        iDiv.innerHTML += "Invalid Languages...!!!!!!<br>"
        checkboxes.className +="Invalid";
    }
    
    return false;
}


