function adduser(){

login_user_name=document.getElementById("username").value;

localStorage.setItem("user name", login_user_name);
}