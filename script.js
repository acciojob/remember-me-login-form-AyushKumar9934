//your JS code here. If required.

function show(username){
 
  alert("Logged in as .");
}


let event1;

function check(e){
  console.log("we are inside the check function")
 e.preventDefault();
  let username=document.getElementById("username");
let password=document.getElementById("password");
console.log(`usre name is ${username.value} and pass is ${password.value}`)
 
event1=document.getElementById("checkbox").checked;
  console.log("event1 is ",event1);

  if(localStorage.getItem("username")==username.value && localStorage.getItem("password")==password.value){
    let but=document.createElement("button");
    but.id="existing";
    but.onclick=()=>{show(username)};
    but.textContent = "Login as existing user."

     document.getElementById("form").appendChild(but);
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
  alert("Logged in as .")
}
}

document.getElementById("submit").addEventListener('click',(e)=>check(e))
