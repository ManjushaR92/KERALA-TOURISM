function validation(){

    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    
    var passwordcheck = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    var emailcheck = /^[A-Za-z0-9]{3,}@[A-Za-z]{3,}[.]{1}[a-z]{2,3}$/;
   
    
    if (email ==""){
        alert("Email cannot be empty");
        return false;
    }   
    if (emailcheck.test(email)){
        document.getElementById("emailerror").innerHTML = "";
    }
    else{
        document.getElementById("emailerror").innerHTML = "** Email is invalid";
        return false;
    }
    if (password ==""){
        alert("Password cannot be empty");
        return false;
    }   
    if (password.match(passwordcheck)){
        document.getElementById("passworderror").innerHTML = "";
    }
    else{
        document.getElementById("passworderror").innerHTML = "** Incorrect Password";
        return false;
    }
}
