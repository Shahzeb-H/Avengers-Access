function togglesidebar() {
document.getElementById("sidebar").classList.toggle("active");

}
/*
document.getElementById("sidebar").style.left = "0px";
var toggle = document.getElementsByClassName("toggle-btn")[0];
toggle.style.visibility = "hidden";
var toggle1 = document.getElementsByClassName("toggle-btn1")[0];
toggle1.style.visibility = "visible";
toggle1.style.top = "0px";
}

function normal() {
document.getElementById("sidebar").style.left = "-200px";
var toggle = document.getElementsByClassName("toggle-btn")[0];
toggle.style.visibility = "visible";
var toggle1 = document.getElementsByClassName("toggle-btn1")[0];
toggle.style.top = "0px";
toggle1.style.visibility = "hidden";
}*/

function validate() {
var box1 = document.getElementById("name");
var box2 = document.getElementById("password");
var box3 = document.getElementById("email");
var box4 = document.getElementById("answer");
var confirmation = confirm ("Are you sure ?");
if (confirmation == true){
if (box1.value == "" || box2.value.length == "" || box3.value == "" || box4.value == "")
{
alert ("Fill all the fields");
return false;
}
else if (box2.value.length < 8) {
alert ("Password must be atleast 8 characters long");
return false;
}
else if (box1.value == "Shahzeb Hussain" && box2.value == "coolshaarif") {
return true;
}
else {
alert ("Login failed");
return false;
}
}
else {
return false;
}
}
