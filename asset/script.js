function showmodel(){
  document.querySelector(".overlay").classList.add("showoverlay");
  document.querySelector(".loginform").classList.add("showloginform");
}

function closemodel(){
  document.querySelector(".overlay").classList.remove("showoverlay");
  document.querySelector(".loginform").classList.remove("showloginform");
}

var btnlogin = document.querySelector(".btn");
btnlogin.addEventListener("click", showmodel);

var c = document.querySelector(".icon");
c.addEventListener("click", closemodel);

