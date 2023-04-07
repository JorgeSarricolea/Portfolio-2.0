$(document).ready(function() {

    /* barsMenu*/

    $(".bars__menu").click(function() {
        $(".line1__bars-menu").toggleClass("activeline1__bars-menu");
        $(".line2__bars-menu").toggleClass("activeline2__bars-menu");
        $(".line3__bars-menu").toggleClass("activeline3__bars-menu");
        $(".navbarItems-mobile").toggleClass("activenavbarItems-mobile");
    });

    /* typingEffect */

    var typingEffect = new Typed(".multiText",{
        strings : ["Web Developer", "UX/UI Designer", "Graphic Designer"],
        loop : true,
        typeSpeed : 100,
        backSpeed : 80,
        backDelay : 1500
    });

    var typingEffect2 = new Typed(".multiText2",{
        strings : ["I'm Web Developer and UI/UX Designer"],
        loop : false,
        typeSpeed : 120,
    });
});
