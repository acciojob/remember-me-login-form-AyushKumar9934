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
    let but = document.createElement("button");
    but.id = "existing";
    but.onclick = () => {show(username)};
    but.textContent = "Login as existing user.";
    document.getElementById("form").appendChild(but);
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