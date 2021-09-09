document.addEventListener("DOMContentLoaded", function(){
  let navSwitch = document.getElementsByClassName("nav_switch_outside")[0];
  navSwitch.addEventListener("click", function(){
    navSwitch.firstElementChild.classList.toggle("-on");
    navSwitch.previousElementSibling.classList.toggle("-hidden");
  });
  window.addEventListener("resize", function(){
    console.log(window.innerWidth);
    if(window.innerWidth > 575.98){
      navSwitch.firstElementChild.classList.remove("-on");
      navSwitch.previousElementSibling.classList.add("-hidden");
    }
  });
});
