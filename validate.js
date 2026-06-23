function validateform(){
    let name=document.getElementById("name").value.trim();
    let email=document.getElementById("email").value.trim();
    let password=document.getElementById("password").value;
    let dob=document.getElementById("dob").value;

    //Name validation
    if(name===""){
       alert("Name is required");
         return false;
   }
let namePattern=/^[A-Za-z\s]+$/;
if(!namePattern.test(name)){
    alert("Name should only contain letters and spaces");
    return false;
}
//Email validation
let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailPattern.test(email)){
    alert("Please enter a valid email address");
    return false;
}
//Password validation
if(password.length<8 || password.length>15){
    alert("Password must be between 8 and 15 characters");
    return false;
}
if(!/[A-Z]/.test(password)){
    alert("Password must contain at least one uppercase letter");
    return false;
}
if(!/[a-z]/.test(password)){
    alert("Password must contain at least one lowercase letter");
    return false;
}
if(!/[0-9]/.test(password)){
    alert("Password must contain at least one digit");
    return false;
}
if(!/[!@$!%*?&*#()_+\-+=]/.test(password)){
    alert("Password must contain at least one special character");
    return false;
}
//education validation
let see=document.getElementById("see").checked;
let plus2=document.getElementById("plus2").checked;
let above=document.getElementById("above").checked;
if(!see && !plus2 && !above){
    alert("Please select at least one education level");
    return false;
}
//DOB validation
if(dob===""){
    alert("Please select your date of birth");
    return false;
}
alert("Registration Successful");
return true;
}