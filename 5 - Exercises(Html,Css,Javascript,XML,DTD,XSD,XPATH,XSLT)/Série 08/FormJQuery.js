$(document).ready(function(){
    
    $(".FSBack").append("<div id='subm'class='subm'></div>");
    
    $('#SBMT').click(function(){

        var rediochecked = document.querySelectorAll('#NIV:checked');

        var checkboxes = document.querySelectorAll('#Language:checked');

        var array = [];
        for (var i = 0; i < checkboxes.length; i++) {
          array.push(checkboxes[i].value);
        }

        $('#subm').css({'width':'350px','color':'red','margin':'10px auto','border':'solid 1px #000','padding':'20px'});
        
        $("#subm").html("");
        
        var nomReg = /[A-Z][a-z]+/g;
        var emailReg = /^\S+@\S+.\S+$/;
        var adressReg = /[a-z]+/g;
        var passwReg = /[a-z]+/g;

        if (!($('#name').val()).match(nomReg) ) {
            $('.subm').append("Invalid Nom...!!!!!!<br>");
            $('#name').addClass('Invalid');
        }
        if (!($('#pname').val()).match(nomReg)) {
            $('.subm').append("Invalid Prenom...!!!!!!<br>");
            $('#pname').addClass('Invalid');
        }
        if ($('#date').val() == "") {
            $('.subm').append("Invalid Date...!!!!!!<br>");
            $('#date').addClass('Invalid');
        }
        if (!($('#passW').val()).match(passwReg)) {
            $('.subm').append("Invalid Password...!!!!!!<br>");
            $('#passW').addClass('Invalid');
        }
        if (!($('#email').val()).match(emailReg)) {
            $('.subm').append("Invalid Email...!!!!!!<br>");
            $('#email').addClass('Invalid');
        }
        if (!($('#Address').val()).match(adressReg)) {
            $('.subm').append("Invalid Address...!!!!!!<br>");
            $('#Address').addClass('Invalid');
        }
        if ($('#FIL').val() == "") {
            $('.subm').append("Invalid Filiere...!!!!!!<br>");
            $('#FIL').addClass('Invalid');
        }
        if (rediochecked.length == 0) {
            $('.subm').append("Invalid Niveau...!!!!!!<br>");
            $('#NIV').addClass('Invalid');
        }
        if (!(array.length >= 1) ) {
            $('.subm').append("Invalid Languages...!!!!!!<br>");
            $('#Language').addClass('Invalid');   
        }

        return false;
    });
    
});



