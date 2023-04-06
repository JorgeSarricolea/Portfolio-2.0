/* barsMenu*/

document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");
var menu = document.querySelector(".navbarItems-mobile");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
    menu.classList.toggle("activenavbarItems-mobile")

}

/* typingEffect */

var typingEffect = new Typed(".multiText",{
    strings : ["Web Developer", "UX/UI Designer", "Graphic Designer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 1500
})

var typingEffect = new Typed(".multiText2",{
    strings : ["I'm Web Developer and UI/UX Designer"],
    loop : false,
    typeSpeed : 120,
})