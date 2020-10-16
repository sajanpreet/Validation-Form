function validation(){
    let user = document.getElementById('user').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('number').value;
    let pass = document.getElementById('pass').value;
    let cpass = document.getElementById('cpass').value;


    //username
    if(user == ""){
        document.getElementById('user-error').innerHTML = "* Please fill name"
        return false;
    }
    if((user.length <= 2) || (user.length > 20)){
        document.getElementById('user-error').innerHTML = "* Please fill 3 to 20 words only"
        return false;
    }
    if(!isNaN(user)){
        document.getElementById('user-error').innerHTML = "* Please fill characters"
        return false;
    }
    









 //email   
    if(email == ""){
        document.getElementById('email-error').innerHTML = "* Please fill"
        return false;
    }

    if(email.indexOf('@')<= 0){
        document.getElementById('email-error').innerHTML = "* Please fill vaild email"
        return false;

    }
    if((email.charAt(email.length-4)!=".") && (email.charAt(email.length-3))!='.') { 
        document.getElementById('email-error').innerHTML = "* Please fill vaild email"
    return false;}
//number
    if(number == ""){
        document.getElementById('number-error').innerHTML = "* Please fill"
        return false;
    }
    if(isNaN(number)){
        document.getElementById('number-error').innerHTML = "* Please fill only number"
        return false;

    }
    if(number.length !=10){
        document.getElementById('number-error').innerHTML = "* Please fill 10 digits number"
        return false;
    }
//password
    if(pass == ""){
        document.getElementById('pass-error').innerHTML = "* Please fill"
        return false;
    }

    if((pass.length <= 5) || (user.length > 20)){
        document.getElementById('user-error').innerHTML = "* Please fill 3 to 20 words only"
        return false;}

//confirm password

    if(cpass == ""){
        document.getElementById('cpass-error').innerHTML = "* Please fill"
        return false;
    }

    if(pass!=cpass){
        document.getElementById('user-error').innerHTML = "* Password not match"
        return false;}

    }


