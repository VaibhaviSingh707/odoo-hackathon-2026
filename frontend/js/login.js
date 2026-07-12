function togglePassword(){

let pass=document.getElementById("password");

if(pass.type==="password")

pass.type="text";

else

pass.type="password";

}

document
.getElementById("loginForm")
.addEventListener("submit",

function(e){

e.preventDefault();

let email=document.getElementById("email").value;

let password=document.getElementById("password").value;

if(email=="" || password==""){

alert("Please enter Email and Password");

return;

}

// Later we'll replace this with Flask API

window.location="dashboard.html";

});