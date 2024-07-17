//your JS code here. If required.

function show(username){
  alert("Logged in as " + username.value);
}

function check(e){
  e.preventDefault();
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  let event1 = document.getElementById("checkbox").checked;

  if(localStorage.getItem("username") == username.value && localStorage.getItem("password") == password.value){
   document.getElementById('existing').style.display="inline-block";
  }
  else {
    if(event1) {
      localStorage.setItem("username", username.value);
      localStorage.setItem("password", password.value);
    }
    else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }
    show(username);
  }
}

document.getElementById("submit").addEventListener('click', check);
document.getElementById("existing").addEventListener('click',()=>alert(`Logged in as ${localStorage.getItem("username")}`))
