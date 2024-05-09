//your JS code here. If required.

function show(){
    alert("Logged in as ."+username.value);
}
document.getElementById("submit").addEventListener('click',check)
let username=document.getElementById("username");
let password=document.getElementById("password");
let event1;

function check(event){
    event.preventDefault();
 event1=document.getElementById("checkbox").checked;
    console.log("event1 is ",event1);
    console.log("we are inside the check function")
    if(localStorage.getItem("username")==username.value && localStorage.getItem("password")==password.value){
       document.getElementById("form").innerHTML+=`<button id="existing" onclick="show()">Login as existing user.</button>`
}
else{
    if(event1){
   localStorage.setItem("username",username.value);
   localStorage.setItem("password",password.value);
   console.log("inlocal storage data are set ")
    }
    else{
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        console.log("in local storage data removed ")
    }
    alert("Logged in as ."+username.value)
}
}