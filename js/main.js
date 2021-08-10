var elModeBody = document.querySelector(".body")
var elModeToggle = elModeBody.querySelector(".header__button-dark")

if(elModeToggle){
  elModeToggle.addEventListener("click", function(){
    elModeBody.classList.toggle("body--dark")
  })
}