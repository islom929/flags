var elModeBody = document.querySelector(".body")
var elModeToggle = elModeBody.querySelector(".dark-mode__button")

if(elModeToggle){
  elModeToggle.addEventListener("click", function(){
    elModeBody.classList.toggle("body--dark")
  })
}