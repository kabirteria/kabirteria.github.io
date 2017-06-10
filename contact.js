var button= document.querySelector("button");
button.onclick = function (){
var fn= document.querySelector("#fname");
var ln= document.querySelector("#lname");
var email= document.querySelector("#email");

if(fn.value==""){
alert("Enter your first name");
}
if(ln.value==""){
alert("Enter your last name");
}
if(email.value==""){
alert("Enter your email address");
}
else {
alert("Your information has been send");
}
}
