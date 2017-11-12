
var navbar = document.getElementById("navigation");
var sticky = navbar.offsetTop;

function myFunction() {

      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } 
        
      else {
        navbar.classList.remove("sticky");
      }
    }
function turnOn(){
    document.getElementById("contactinfo").style.display = "block";
}
function turnOff(){
     document.getElementById("contactinfo").style.display = "none";
}

/*
The javascript effect is referenced from: https://www.w3schools.com/howto/howto_css_overlay.asp
https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
It has been modified accordingly to fit in my style desired for the website.

*/