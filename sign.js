function validation(){

    var username =document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var cpassword=document.getElementById("cpassword").value;
    var number=document.getElementById("number").value;
    var status=document.getElementById("length");

    var usercheck = /^[A-Za-z.]{3,20}$/;
    var passwordcheck = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    var passwordcheckk = /^(?=.*[A-Z])(?=.*[a-z])[a-zA-Z!@#$%^&*]{8,16}$/;
    var passwordcheckk = /^(?=.*[a-z])[a-z]{1,6}$/;
    var emailcheck = /^[A-Za-z0-9]{3,}@[A-Za-z]{3,}[.]{1}[a-z]{2,3}$/;
    var mobilecheck = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    

if (username ==""){
        alert("Username cannot be empty");
        return false;
}   
if (usercheck.test(username)){
    document.getElementById("usererror").innerHTML = "";
}else{
    document.getElementById("usererror").innerHTML = "** Username is invalid";
    return false;
}
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
    status.innerHTML="Strong";
    status.style.background="green";
    status.style.color="#ffffff";
    }
    else if (password.match(passwordcheckk)){
        document.getElementById("passworderror").innerHTML = "";
        status.innerHTML="Medium";
        status.style.background="orange";
        status.style.color="#ffffff";
        }  
        else {
            document.getElementById("passworderror").innerHTML = "";
            status.innerHTML="Poor";
            status.style.background="red";
            status.style.color="#ffffff";
            }  
if (cpassword ==""){
    alert("Confirm your Password");
    return false;
}   
if (cpassword.match(password)){
    document.getElementById("cpassworderror").innerHTML = "";
}else{
    document.getElementById("cpassworderror").innerHTML = "** Password is not matching";
    return false;
}
if (number ==""){
    alert("Mobile Number cannot be empty");
    return false;
}   
if (number.match(mobilecheck)){
    document.getElementById("mobileerror").innerHTML = "";
}else{
    document.getElementById("mobileerror").innerHTML = "** Mobile Number is invalid";
    return false;
}
}